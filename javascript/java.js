const modal = document.getElementById('reservationModal');
    const closeModal = document.getElementById('closeModal');
    const reserveButtons = document.querySelectorAll('.reserve-trigger');
    const form = document.getElementById('reservationForm');
    const toast = document.getElementById('toast');
    const dateInput = document.getElementById('date');

    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    dateInput.min = `${yyyy}-${mm}-${dd}`;

    function openModal() {
      modal.classList.add('active');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }

    function hideModal() {
      modal.classList.remove('active');
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }

    reserveButtons.forEach(btn => btn.addEventListener('click', openModal));
    closeModal.addEventListener('click', hideModal);

    modal.addEventListener('click', (e) => {
      if (e.target === modal) hideModal();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('active')) hideModal();
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      hideModal();
      form.reset();
      toast.classList.add('show');
      setTimeout(() => toast.classList.remove('show'), 2800);
    });