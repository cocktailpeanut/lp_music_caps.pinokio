const os = require('os')
const fs = require('fs')
const path = require("path")
module.exports = {
  title: "LP-MusicCaps",
  description: "LLM-Based Pseudo Music Captioning",
  icon: "icon.png",
  menu: async (kernel) => {
    let installed = await kernel.exists(__dirname, "app", "venv")
    if (installed) {
      let session = await kernel.load(__dirname, "session.json")
      let running = await kernel.running(__dirname, "start.json")
      if (running) {
        return [{
          icon: "fa-solid fa-spin fa-circle-notch",
          text: "Running"
        }, {
          icon: "fa-solid fa-rocket",
          text: "Open UI",
          href: (session && session.url ? session.url : "http://127.0.0.1:7860"),
          target: "_blank"
        }]
      } else {
        return [{
          icon: "fa-solid fa-power-off",
          text: "Launch",
          href: "start.json",
          params: { fullscreen: true, run: true }
        }]
      }
    } else {
      return [{
        icon: "fa-solid fa-plug",
        text: "Install",
        href: "install.json",
        params: { run: true, fullscreen: true }
      }]
    }
  }
}
