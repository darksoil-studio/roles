---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "@darksoil-studio/roles"
  text: "Roles zome for holochain apps"
  tagline: Plug-and-play roles management for your hApps
  actions:
    - theme: brand
      text: Setup
      link: /setup.md
    - theme: alt
      text: Overview
      link: /overview.md
    - theme: alt
      text: Integrity Zome API
      link: "/backend/doc/roles_integrity/index.html"
      target: "_blank"
    - theme: alt
      text: Coordinator Zome API
      link: "/backend/doc/roles/index.html"
      target: "_blank"
    - theme: alt
      text: Frontend API
      link: "/roles-store.md"

features:
  - title: UI+Backend Module
    details: Following the holochain-open-dev guidelines
    link: https://holochain-open-dev.github.io
---


## Module summary

This module gives your apps the power of **role management**.

It uses a *progenitor* as initial admin and allows consuming applications to create arbitrary roles and bind the possibility of preforming actions to those roles. 