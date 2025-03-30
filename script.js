document.addEventListener("DOMContentLoaded", () => {
    const members = document.querySelectorAll(".member");

    members.forEach((member, index) => {
        member.style.animationDelay = `${index * 0.2}s`;
    });
});

var dosbox = new Dosbox({
    id: "dosbox",
    onload: function (dosbox) {   dosbox.run("https://js-dos.com/cdn/upload/DOOM-@evilution.zip", "./DOOM/DOOM.EXE");
    },
    onrun: function (dosbox, app) {
      console.log("App '" + app + "' is runned");
    }
  });

  document.addEventListener("DOMContentLoaded", () => {
    const members = document.querySelectorAll(".member");

    members.forEach((member, index) => {
        member.style.animationDelay = `${index * 0.2}s`;
    });
});

