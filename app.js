const testimonials = [
  {
    name: "Di Z.",
    photoURL:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80",
    text: `IT impressed me on multiple levels. It's exactly what I've been looking
        for. I didn't even need training. It's the perfect solution for our
        business.`,
  },
  {
    name: "Jack F.",
    photoURL:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3880&q=80",
    text: `Fantastic, I'm totally blown away by Testimonial Generator.`,
  },
  {
    name: "Rick E.",
    photoURL:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3744&q=80",
    text: `This is unbelievable. After using Testimonial Generator my business skyrocketed!`,
  },
];

const imgEl = document.querySelector(".img-container img");
const textEl = document.querySelector(".text");
const nameEl = document.querySelector(".username");
let idx = 0;

function updateTestimonial() {
  const { name, photoURL, text } = testimonials[idx];

  imgEl.src = photoURL;
  textEl.textContent = text;
  nameEl.textContent = name;

  idx++;

  if (idx === testimonials.length) {
    idx = 0;
  }

  setTimeout(updateTestimonial, 5000);
}

updateTestimonial();
