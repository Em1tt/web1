document.addEventListener("mousemove", parallax);
function parallax(event) {
  this.querySelectorAll(".parallax").forEach((shift) => {
    const position = shift.getAttribute("value");
    const x = (window.innerWidth - event.pageX * position) / 90 * -1;
    const y = (window.innerHeight - event.pageY * position) / 90;

    shift.style.transform = `translateX(${y}px) translateY(${x}px)`;
  });
}
