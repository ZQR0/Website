const noSelect = () => false;

document.ondragstart = noSelect();
document.onselectstart = noSelect();
document.oncontextmenu = noSelect();

VANTA.WAVES({
    el: "#back",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 1920.00,
    minWidth: 1080.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0x70711,
    zoom: 1.02
});