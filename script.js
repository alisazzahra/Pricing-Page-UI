let selected = null;

function selectCard(id) {
    if(selected) {
        const prev = document.getElementById('card-' + selected);
        prev.classList.remove('selected');
    }
    if(selected === id) { selected = null; return}
    selected = id;
    const card = document.getElementById('card-' + id);
    card.classList.add('selected');
}

function buyNow(e, plan) {
    e.stopPropagation();
    const toast = document.getElementById('toast');
    toast.textContent = '🎉Success!' + plan + '-youre all set';
    toast.style.transform = 'translateX(-50%) translateY(0%)';
    toast.style.opacity = '1';
    setTimeout(() => {
        toast.style.transform = 'translateX(-50%) translateY(80%)';
        toast.style.opacity = '0';
    }, 3000);
}

// scroll reveal
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
        if(entry.isIntersecting){
            setTimeout(() => entry.target.classList.add('visible'), i*100);
        }
    });
}, {threshold: 0.15});
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));