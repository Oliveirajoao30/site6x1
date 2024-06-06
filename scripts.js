document.addEventListener("DOMContentLoaded", function() {
    
    document.querySelectorAll('.info-button').forEach(button => {
        button.addEventListener('click', function() {
            const article = this.parentElement;
            const infoText = article.getAttribute('data-info');
            const additionalInfo = document.createElement('p');
            additionalInfo.textContent = infoText;
            additionalInfo.className = "additional-info";
            article.appendChild(additionalInfo);
            this.disabled = true; 
        });
    });

    document.querySelectorAll('.item').forEach(item => {
        item.addEventListener('mouseover', function() {
            this.style.backgroundColor = "#e0e0e0";
        });
        item.addEventListener('mouseout', function() {
            this.style.backgroundColor = "#f4f4f4";
        });
    });
});
