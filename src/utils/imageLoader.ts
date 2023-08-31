'use client';

/**
 * Generates a URL for an image with the specified source, width, and quality.
 *
 * @param {string} src - The source of the image.
 * @param {number} width - The desired width of the image.
 * @param {number} [quality] - The desired quality of the image (default is 75).
 * @returns {string} - The URL for the image.
 */
const imageLoader = ({
  src,
  width,
  quality
}: {
  src: string;
  width: number;
  quality?: number;
}) => `${src}?w=${width}&q=${quality || 75}`;

/**
 * Generates an SVG string with a shimmer effect.
 * @param w - The width of the SVG.
 * @param h - The height of the SVG.
 * @returns The SVG string.
 */
const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="    20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

/**
 * Converts a string to base64 encoding.
 *
 * @param {string} str - The string to be converted.
 * @return {string} The base64 encoded string.
 */
const toBase64 = (str: string) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str);

/**
 * Generates a data URL based on the given width and height.
 *
 * @param {number} w - The width of the image.
 * @param {number} h - The height of the image.
 * @return {string} The generated data URL.
 */
export const generateDataURL = (w: number, h: number) =>
  `${toBase64(shimmer(w, h))}`;

export default imageLoader;
