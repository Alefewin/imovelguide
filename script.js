const input1 = document.getElementById('txti')

input1.addEventListener('keypress', () => {
  let input1length = input1.value.length

  if (input1length === 3 || input1length === 7) {
    input1.value += '.'
  } else if (input1length === 11) {
    input1.value += '-'
  }
})

const txtf = document.getElementById('txtf');


function applyPhoneNumberMask() {
  let input = txtf.value.replace(/\D/g, '');
  if (input.length > 10) {
    input = input.substring(0, 10);
  }

  let formatted = '';
  for (let i = 0; i < input.length; i++) {
    if (i === 0) {
      formatted += `(${input[i]}`;
    } else if (i === 1) {
      formatted += `${input[i]}) `;
    } else if (i === 5) {
      formatted += `${input[i]}-`;
    } else {
      formatted += input[i];
    }
  }
  txtf.value = formatted;
}

txtf.addEventListener('input', applyPhoneNumberMask);

function mostrarAlerta() {
  alert("Mensagem enviada com sucesso!");
}

var modal = document.getElementById("myModal");
var modalImage = document.getElementById("modalImage");
var modalContent = document.querySelector(".modal-content");

document.getElementById("openBtn").addEventListener("click", function () {
  modal.style.display = "block";
  modalContent.style.width = "100%";
  modalContent.style.height = "100%";
  modalImage.setAttribute("src", "guide.png");
});

function closeModal() {
  modal.style.display = "none";
  modalContent.style.width = "auto";
  modalContent.style.height = "auto";
  modalImage.removeAttribute("src");
}

modalImage.addEventListener("click", function () {
  closeModal();
});

modal.addEventListener("click", function (e) {
  if (e.target === modal) {
    closeModal();
  }
});

window.onload = function () {
  const modal = document.getElementById("modal");
  const zoomImage = document.getElementById("zoomImage");


  modal.style.display = "flex";

  modal.onclick = function () {
    modal.style.display = "none";
  };

  zoomImage.onclick = function (event) {
    event.stopPropagation();
  };
};

