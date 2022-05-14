import React from "react";

import "./Sec.css";

const Sec = () => {
	function handleSubmit(event) {
		event.preventDefault();
	}

	return (
		<div className="app__main">
			<form id="app__main-form" method="post" onSubmit={handleSubmit}>
				<input type="text" placeholder="digite sua mensagem para o futuro" />
				<input id="app__main-form-submit" type="submit" value="enviar" />
			</form>
		</div>
	);
};

export default Sec;
