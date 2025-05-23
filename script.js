   document.getElementById('submit').onclick = function() {
            const name = document.getElementById('name').value;
            const days = parseInt(document.getElementById('days').value);
            const preference = document.getElementById('preference').value;
            const satisfaction = document.getElementById('satisfaction').value;
            const improvements = document.getElementById('improvements').value;
            const recommendations = document.getElementById('recommendations').value;

            let touristType = '';

            if (days >= 5 && preference === 'mar') {
                touristType = '¡Eres un buen turista!';
            } else if (days < 5 && preference === 'montaña') {
                touristType = 'Eres un mal turista.';
            } else {
                touristType = 'Eres un turista promedio.';
            }

            document.getElementById('result').innerText = `${name}, ${touristType} Gracias por tus respuestas. ¡Tu opinión es muy valiosa para mejorar Barcelona como destino turístico!`;
        };