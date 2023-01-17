window.onload = function() {
const h1 = document.querySelector("h1");
h1.remove();

const firstH1 = document.createElement("h1");
const secondH1 = document.createElement("h1");
firstH1.append("Webpage Recreation Practice");
secondH1.append("Facts about the Multicolored Tanager");

const body = document.querySelector("body");
body.after(firstH1);
firstH1.after(secondH1);
const p = document.createElement("p");
p.append("The HTML of this webpage was created with JavaScript.");
firstH1.after(p);
const img = document.createElement("img");
img.setAttribute("src", "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/202984001/900");
img.setAttribute("alt", "This is an image of a Multicolored Tanager bird from birdsoftheworld.org");
img.setAttribute("style","width:50%");
p.after(img);
const ul = document.createElement("ul");
const li1 = document.createElement("li");
const li2 = document.createElement("li");
li1.append("It is endemic to the mountains of Colombia.");
li2.append("It usually searches for insects on the underside of leaves of outer limbs while clinging to leaves with its feet.");
ul.append(li1);
ul.append(li2);
secondH1.after(ul);
const h2 = document.createElement("h2");
h2.append("Source");
ul.after(h2);
const a = document.createElement("a");
a.setAttribute("href","https://en.wikipedia.org/wiki/Multicoloured_tanager");
a.append("Wikipedia");
h2.after(a);

}