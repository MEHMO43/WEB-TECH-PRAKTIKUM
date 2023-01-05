//Geben Sie mittels JavaScript die Breite des Layout-Viewports auf der Konsole aus.

const getViewportWidth = () => window.innerWidth ||
document.documentElement.clientWidth;
console.log([`Die Viewport-Breite beträgt: ${getViewportWidth()} Pixel`]);

//percent -> 30% der Bildschirm-Breite in px 
//document.documentElement.clientWidth Viewportbreite in px

const percent = window.screen.width * 0.3;
if(document.documentElement.clientWidth < percent) {
   alert("Warnung! Viewport-Breite weniger als 30%");
}
