const planButtons = document.querySelectorAll(".btn-plan");
const planTitle = document.querySelector(".icon-set-plan-title");
const planPrice = document.querySelector(".icon-set-price");
const planIcons = document.querySelector(".icon-set-icons-num");
const iconSetListItemsIcons = document.querySelectorAll(".icon-set-list li i");
const btnCart = document.querySelector(".btn-cart");

const planDetails = [
  {
    name: "basic",
    price: 60,
    icons: 50,
  },
  {
    name: "standard",
    price: 120,
    icons: 125,
  },
  {
    name: "premium",
    price: 185,
    icons: 200,
  },
];

planButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    for (plan of planDetails) {
      if (plan.name === e.target.id) {
        updatePlanDetails(plan);
        updateActivePlan(e.target);
        updateIcons(e.target.id);
      }
    }
  });
});

btnCart.addEventListener("click", (e) => {
  let str = `
        Added to cart:
        Plan: ${planTitle.textContent}
        Plan Price: $${planPrice.textContent}
        Icon Set: ${planIcons.textContent}
    `;

  alert(str);
});

function updatePlanDetails(obj) {
  planTitle.textContent = obj.name;
  planPrice.textContent = "$" + obj.price;
  planIcons.textContent = obj.icons;
}

function updateActivePlan(el) {
  planButtons.forEach((pb) => pb.classList.remove("btn-active"));
  el.classList.add("btn-active");
}

function updateIcons(id) {
  if (id !== "basic") {
    iconSetListItemsIcons[1].classList.remove("fa-xmark");
    iconSetListItemsIcons[1].classList.add("fa-check");
  } else if (id === "basic") {
    iconSetListItemsIcons[1].classList.remove("fa-check");
    iconSetListItemsIcons[1].classList.add("fa-xmark");
  }
}
