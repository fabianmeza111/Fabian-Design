// —————— Carga y loader ——————
window.addEventListener('load', () => {
  const loader = document.getElementById('page-loader');
  // 1) Esperamos 3s antes de iniciar fade-out
  setTimeout(() => {
    // 2) Fade-out del overlay
    loader.style.opacity = '0';
    // 3) Tras 1s de transición, lo quitamos
    setTimeout(() => {
      loader.remove();

    }, 700);
  }, 1500);
})




//--- Funcionalidad del botón "Scroll to Top" ---//


/*
window.onscroll = () => {
toggleTopButton();
};
function scrollToTop() {

window.scrollTo({ top:0, behavior: 'smooth'});
}
function toggleTopButton() {
const button = document.getElementById('back-to-up');
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
button.classList.add('show');
} else {
button.classList.remove('show');
}
}
window.onload = function() {
const loader = document.getElementById('loader');
// Esperar 3 segundos para ocultar el loader
setTimeout(() => {
loader.classList.add('hidden'); // Oculta el spinner después de 3 segundos
}, 300); // Duración del spinner de loading
};
*/
// --- Esperar a que el DOM esté completamente cargado antes de ejecutar el script ---
document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("back-to-up");
    const loader = document.getElementById("loader");

    // --- Si existe el botón "Scroll to Top", activa la detección de scroll ---
    if (button) {
        window.onscroll = toggleTopButton;
    }

    // --- Si existe el loader, espera y oculta el spinner ---
    if (loader) {
        setTimeout(() => {
            loader.classList.add("hidden");
        }, 300);
    }
});

// --- Función para hacer scroll hacia arriba de forma suave ---
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// --- Mostrar u ocultar el botón "Scroll to Top" según la posición de scroll ---
function toggleTopButton() {
    const button = document.getElementById("back-to-up");
    
    if (!button) return; // Si el botón no existe, detiene la ejecución
    
    if (window.scrollY > 20) {
        button.classList.add("show");
    } else {
        button.classList.remove("show");
    }
}




// Modales -------------------------------------------------------------------------------

/*
document.addEventListener("DOMContentLoaded", () => {
    const openModal = document.querySelector(".abrir");
    const cerrarModal = document.querySelector(".cerrar");
    const modal = document.querySelector(".modal");

    openModal.addEventListener("click", () => {
        modal.showModal();
    });

    cerrarModal.addEventListener("click", () => {
        modal.close();
    });
});*/



document.addEventListener("DOMContentLoaded", () => {
    const botonesAbrir = document.querySelectorAll(".abrir");
    const botonesCerrar = document.querySelectorAll(".cerrar");
    const modales = document.querySelectorAll(".modal");

    console.log("Botones abrir encontrados:", botonesAbrir.length); 
    console.log("Botones cerrar encontrados:", botonesCerrar.length);
    console.log("Modales encontrados:", modales.length);
});

document.querySelectorAll(".abrir").forEach(boton => {
    boton.addEventListener("click", () => {
        const modalID = boton.getAttribute("data-target");
        const modal = document.querySelector(modalID);
        if (modal) {
            modal.classList.add("modal-show");
            modal.style.visibility = "visible"; // Asegura que se pueda abrir de nuevo
        }
    });
});

document.querySelectorAll(".cerrar").forEach(boton => {
    boton.addEventListener("click", () => {
        const modal = boton.closest(".modal");
        if (modal) {
            modal.classList.add("modal-hide"); // Aplica la animación de cierre

            setTimeout(() => {
                modal.classList.remove("modal-show", "modal-hide"); // Remueve después de la animación
                modal.style.visibility = "hidden"; // Oculta completamente después de animarse
            }, 500); // Igual a la duración en CSS
        }
    });
});



document.querySelectorAll(".modal").forEach(modal => {
    modal.addEventListener("click", (event) => {
        if (event.target === modal) { // Solo si el usuario hace clic en el fondo
            modal.classList.add("modal-hide"); // Aplica la animación de cierre
            
            setTimeout(() => {
                modal.classList.remove("modal-show", "modal-hide"); // Remueve las clases después de la animación
                modal.style.visibility = "hidden"; // Oculta correctamente DESPUÉS de la animación
            }, 500); // Duración igual a la animación en CSS
        }
    });
});

document.querySelectorAll(".abrir").forEach(boton => {
    boton.addEventListener("click", () => {
        const modalID = boton.getAttribute("data-target");
        const modal = document.querySelector(modalID);
        if (modal) {
            modal.classList.add("modal-show");
            modal.style.visibility = "visible"; // Reactiva el modal correctamente
            modal.style.opacity = "1"; // Asegura que aparezca bien
        }
    });
});


//animacion giro --------------------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", function() {
    const imagenes = document.querySelectorAll(".modal-content img"); // Selecciona todas las imágenes

    imagenes.forEach(img => {
        img.addEventListener("click", function() {
            this.classList.add("girando");

            setTimeout(() => {
                this.classList.remove("girando"); // Permite que el giro se repita en siguientes clics
            }, 1000);
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const imagenes = document.querySelectorAll(".abrir"); // Selecciona todas las imágenes

    imagenes.forEach(img => {
        img.addEventListener("click", function() {
            this.classList.add("girando");

            setTimeout(() => {
                this.classList.remove("girando"); // Permite que el giro se repita en siguientes clics
            }, 1000);
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const imagenes = document.querySelectorAll(".col-1"); // Selecciona todas las imágenes

    imagenes.forEach(img => {
        img.addEventListener("click", function() {
            this.classList.add("girando");

            setTimeout(() => {
                this.classList.remove("girando"); // Permite que el giro se repita en siguientes clics
            }, 1000);
        });
    });
});

document.querySelector("a").addEventListener("click", function() {
    this.classList.toggle("activo"); // Alterna la clase "activo"
});

//mensaje formulario----------------------------------------------------------------------------------------------------------

document.querySelector(".formulario").addEventListener("submit", function(event) {
    event.preventDefault();
    let mensaje = document.getElementById("mensajeConfirmacion");

    mensaje.style.display = "block"; // Muestra el mensaje
    setTimeout(() => mensaje.style.opacity = "1", 50); // Asegura que se vea bien

    setTimeout(() => {
        mensaje.style.opacity = "0"; // Lo desvanece
        setTimeout(() => mensaje.style.display = "none", 500); // Lo oculta completamente después
    }, 3000);
});



