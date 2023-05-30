import React, {
  useRef,
  useState,
  useCallback,
  forwardRef,
  useImperativeHandle,
  useEffect,
} from "react";
import {
  ViewerApp,
  AssetManagerPlugin,
  GBufferPlugin,
  ProgressivePlugin,
  TonemapPlugin,
  SSRPlugin,
  SSAOPlugin,
  BloomPlugin,
  GammaCorrectionPlugin,
  mobileAndTabletCheck,
} from "webgi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { scrollAnimation } from "../lib/scroll-animation";
gsap.registerPlugin(ScrollTrigger);
const WebgiViewer = forwardRef((props, ref) => {
  const canvasRef = useRef(null);
  const [viewRef, setViewRef] = useState(null);
  const [targetRef, setTargetRef] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [positionRef, setPositionRef] = useState(null);
  const canvaContainerRef = useRef(null);
  const [previewMode, setPreviewMode] = useState(false);
  const [isMobile, setIsMobile] = useState(null);
  useImperativeHandle(ref, () => ({
    triggerPreview() {
      setPreviewMode(true);
      canvaContainerRef.current.style.pointerEvents = "all";
      props.contentRef.current.style.opacity = "0";
      gsap.to(positionRef, {
        x: 13.04,
        y: -2.01,
        z: 2.29,
        duration: 2,
        onUpdate: () => {
          viewRef.setDirty();
          cameraRef.positionTargetUpdated(true);
        },
      });
      gsap.to(targetRef, {
        x: 0.11,
        y: 0.0,
        z: 0.0,
        duration: 2,
      });
      viewRef.scene.activeCamera.setCameraOptions({ controlsEnabled: true });
    },
  }));
  const memoizedScrollAnimation = useCallback(
    (position, target, isMobile, onUpdate) => {
      if (position && target && onUpdate) {
        scrollAnimation(position, target, isMobile, onUpdate);
      }
    },
    []
  );
  const setupViewer = useCallback(async () => {
    // Initialize the viewer
    const viewer = new ViewerApp({
      canvas: canvasRef.current,
    });
    setViewRef(viewer);
    const isMoborTab = mobileAndTabletCheck();
    setIsMobile(isMoborTab);
    // Add some plugins
    const manager = await viewer.addPlugin(AssetManagerPlugin);

    // Add a popup(in HTML) with download progress when any asset is downloading

    // Add plugins individually.
    const camera = viewer.scene.activeCamera;
    const position = camera.position;
    const target = camera.target;
    setCameraRef(camera);
    setPositionRef(position);
    setTargetRef(target);
    await viewer.addPlugin(GBufferPlugin);
    await viewer.addPlugin(new ProgressivePlugin(32));
    await viewer.addPlugin(new TonemapPlugin(true));
    await viewer.addPlugin(GammaCorrectionPlugin);
    await viewer.addPlugin(SSRPlugin);
    await viewer.addPlugin(SSAOPlugin);
    await viewer.addPlugin(BloomPlugin);
    // This must be called once after all plugins are added.
    viewer.renderer.refreshPipeline();

    await manager.addFromPath("scene.glb");

    viewer.getPlugin(TonemapPlugin).config.clipBackground = true;
    viewer.scene.activeCamera.setCameraOptions({ controlsEnabled: false });
    if (isMoborTab) {
      position.set(-16.7, 1.17, 11.7);
      target.set(0, 1.37, 0);
      props.contentRef.current.className = "mobile-or-tablet";
    }
    window.scrollTo(0, 0);
    let needsUpdate = true;
    const onUpdate = () => {
      needsUpdate = true;
      viewer.setDirty();
    };
    viewer.addEventListener("preFrame", () => {
      if (needsUpdate) {
        camera.positionTargetUpdated(true);
        needsUpdate = false;
      }
    });
    memoizedScrollAnimation(position, target, isMoborTab, onUpdate);
  }, []);

  useEffect(() => {
    setupViewer();
  }, []);
  const handleExit = useCallback(() => {
    canvaContainerRef.current.style.pointerEvents = "none";
    props.contentRef.current.style.opacity = "1";
    viewRef.scene.activeCamera.setCameraOptions({ controlsEnabled: false });
    setPreviewMode(false);
    gsap.to(positionRef, {
      x: 1.56,
      y: 5.0,
      z: 0.01,
      scrollTrigger: {
        trigger: ".LaunchPage3",
        start: "top bottom",
        end: "top top",
        scrub: 2,
        immediateRender: false,
      },
      onUpdate: () => {
        viewRef.setDirty();
        cameraRef.positionTargetUpdated(true);
      },
    });
    gsap.to(targetRef, {
      x: -0.55,
      y: 0.32,
      z: 0.0,
      scrollTrigger: {
        trigger: ".LaunchPage3",
        start: "top bottom",
        end: "top top",
        scrub: 2,
        immediateRender: false,
      },
    });
  }, [canvaContainerRef, viewRef, positionRef, cameraRef, targetRef]);
  return (
    <div ref={canvaContainerRef} id="webgi-canvas-container">
      <canvas id="webgi-canvas" ref={canvasRef} />
      {previewMode && (
        <button className="button" onClick={handleExit}>
          Exit Preview mode
        </button>
      )}
    </div>
  );
});

export default WebgiViewer;
