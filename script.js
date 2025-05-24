function sim() {
        alert("sabia escolha cowboy :)");
        // redireciona para um URL após clicar no SIM
        location.href = "https://youtube.com/shorts/DjcyIHO2E7E?si=BUPNNiybEnFBhTSi";
    }

    function desvia(btn) {
        // btn declarado na função
        btn.style.position = 'absolute';
        btn.style.bottom = geraPosicao(10, 90);
        btn.style.left = geraPosicao(10, 90);
        console.log('opa, desviei...');
    }

    function geraPosicao(min, max) {
        return (Math.random() * (max - min) + min) + "%";
    }