const socket = io();

const postForm = document.getElementById("form-post");

//Adiciona um dovo post
function newPost() {
	const title = document.getElementById("title"),
		desc = document.getElementById("text");

	const mural = document.getElementById("mural-posts");

	const div = document.createElement("div");
	div.classList.add("card");
	div.classList.add("mb-3");
	div.innerHTML = `<div class="card-header">
                        <h3>${title.value}</h3>
                    </div>
                    <div class="card-body">
                         <p>
                            ${desc.value}
                         </p>
                    </div>`;

	mural.appendChild(div);

	socket.emit("newPost", { title: title.value, desc: desc.value });

	title.value = "";
	desc.value = "";
}

//Cancelar reload do submit
postForm.addEventListener("submit", (e) => {
	e.preventDefault();

	newPost();
});
