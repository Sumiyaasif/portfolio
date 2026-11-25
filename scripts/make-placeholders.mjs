// Generates abstract placeholder artwork. Delete /public/images/design/*.svg once you add real work.
import { writeFileSync } from 'node:fs';
const sets = [
  ['tall', '#3D2FD6', '#E4E1FB', '#16181D'],
  ['square', '#F2B84B', '#16181D', '#FFFFFF'],
  ['tall', '#0F7B62', '#CFEDE3', '#F2B84B'],
  ['square', '#16181D', '#3D2FD6', '#F2F3EF'],
  ['wide', '#E86A92', '#FCE4EC', '#3D2FD6'],
  ['square', '#CFEDE3', '#0F7B62', '#16181D'],
  ['tall', '#FFFFFF', '#16181D', '#E86A92'],
  ['wide', '#3D2FD6', '#F2B84B', '#FFFFFF'],
];
const dims = { tall: [800, 1000], square: [900, 900], wide: [1000, 750] };
sets.forEach(([r, bg, a, b], i) => {
  const [w, h] = dims[r];
  const shapes = [
    `<circle cx="${w*0.62}" cy="${h*0.42}" r="${Math.min(w,h)*0.3}" fill="${a}"/><rect x="${w*0.14}" y="${h*0.58}" width="${w*0.5}" height="${h*0.22}" rx="${h*0.11}" fill="${b}"/>`,
    `<path d="M0 ${h} L${w*0.5} ${h*0.25} L${w} ${h} Z" fill="${a}"/><circle cx="${w*0.5}" cy="${h*0.3}" r="${w*0.09}" fill="${b}"/>`,
    `<rect x="${w*0.18}" y="${h*0.15}" width="${w*0.64}" height="${h*0.7}" rx="${w*0.32}" fill="${a}"/><circle cx="${w*0.5}" cy="${h*0.5}" r="${w*0.14}" fill="${b}"/>`,
    `<rect x="${w*0.15}" y="${h*0.15}" width="${w*0.32}" height="${h*0.32}" rx="40" fill="${a}"/><rect x="${w*0.53}" y="${h*0.15}" width="${w*0.32}" height="${h*0.32}" rx="40" fill="${b}"/><rect x="${w*0.15}" y="${h*0.53}" width="${w*0.32}" height="${h*0.32}" rx="40" fill="${b}"/><rect x="${w*0.53}" y="${h*0.53}" width="${w*0.32}" height="${h*0.32}" rx="40" fill="${a}"/>`,
  ][i % 4];
  writeFileSync(`public/images/design/0${i+1}.svg`,
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}"><rect width="${w}" height="${h}" fill="${bg}"/>${shapes}</svg>\n`);
});
