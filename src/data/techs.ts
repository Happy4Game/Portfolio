// Associe le nom d'une technologie à son logo (quand on en a un).
// Les images importées depuis src/ sont optimisées par Astro :
// https://docs.astro.build/en/guides/images/
import type { ImageMetadata } from "astro";
import c from "../assets/logo/logo_c.png";
import cpp from "../assets/logo/logo_c_plus_plus.png";
import csharp from "../assets/logo/logo_c_sharp.png";
import css from "../assets/logo/logo_css.png";
import flutter from "../assets/logo/logo_flutter.png";
import html from "../assets/logo/logo_html.png";
import java from "../assets/logo/logo_java.png";
import javafx from "../assets/logo/logo_javafx.png";
import js from "../assets/logo/logo_js.png";
import pygame from "../assets/logo/logo_pygame.png";
import python from "../assets/logo/logo_python.png";
import sfml from "../assets/logo/logo_sfml.png";

export const techLogos: Record<string, ImageMetadata> = {
  C: c,
  "C++": cpp,
  "C#": csharp,
  CSS: css,
  Flutter: flutter,
  HTML: html,
  Java: java,
  JavaFX: javafx,
  JavaScript: js,
  Pygame: pygame,
  Python: python,
  SFML: sfml,
};
