document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    // Ambil nilai dari input form
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;
  
    // Validasi sederhana
    if (name && email && subject && message) {
      // Menampilkan pesan sukses
      document.getElementById("feedback").innerText = "Your message has been sent!";
      document.getElementById("feedback").style.color = "green";
  
      // Reset form
      document.getElementById("contactForm").reset();
    } else {
      // Menampilkan pesan error
      document.getElementById("feedback").innerText = "Please fill out all fields.";
      document.getElementById("feedback").style.color = "red";
    }
  });
  