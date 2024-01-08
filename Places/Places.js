document.addEventListener("DOMContentLoaded", function () {
    const galleryContainer = document.getElementById("gallery");

    
    const galleryItems = [
        { title: "Delhi", image: "image1.jpg", details: " Delhi is the capital city offers a mix of historic sites (such as India Gate, Qutub Minar, and Red Fort) and modern attractions. Old Delhi is known for its bustling markets and Mughal-era architecture." },
        { title: "Jaipur", image: "image2.jpg", details: "Jaipur is known as the Pink City, Jaipur is famous for its historical forts and palaces, including Hawa Mahal, City Palace, and Amer Fort." },
        { title: "Varanasi", image: "image3.jpg", details: "Varanasi is a sacred city on the banks of the Ganges River, Varanasi is known for its ghats, ancient temples, and vibrant spiritual atmosphere." },
        { title: "Goa", image: "image4.jpg", details: "Goa is famous for its beautiful beaches, vibrant nightlife, and Portuguese-influenced architecture, Goa is a popular destination for both relaxation and adventure." },
        { title: "Kerela", image: "image5.jpg", details: "Kerela is a picturesque state in the southwestern part of India, known for its serene backwaters,lush green landscapes, vibrant culture, and diverse wildlife." },
        { title: "Rishikesh", image: "image6.jpg", details: "Rishikesh and Haridwar is  Situated on the banks of the Ganges River, these cities are known for their spiritual significance, yoga retreats, and adventure activities." },
        { title: "Leh", image: "image7.jpg", details: "leh is the small town in ladakhwhich is situated in the northern most part of India,known for its breathtaking landscape, rich cultural heritage,and high altitude adventure." },
        { title: "Mumbai", image: "image8.jpg", details: "Mumbai is the India's financial capital, Mumbai, is a bustling metropolis with a mix of colonial-era architecture, modern skyscrapers, and a vibrant street life ." },
        { title: "Khajuraho", image: "image9.jpg", details: "Khajuraho is known for its exquisite temples with intricate erotic carvings, Khajuraho is a UNESCO World Heritage Site." },
        { title: "Rann of Kutch", image: "image10.jpg", details: "The vast white desert landscape of the Rann of Kutch is especially mesmerizing during the Rann Utsav, a cultural festival celebrating the region's art and craft ." },
        { title: "Darjeeling", image: "image11.jpg", details:"Nestled in the Himalayas, Darjeeling is renowned for its tea gardens, stunning views of Mount Kanchenjunga, and the Darjeeling Himalayan Railway." },
        { title: "Agra", image: "image12.jpg", details: "Agra is located in the northern state of Uttar Pradesh, is one of the most iconic and historically rich cities in India.It is famous for the Taj Mahal ." },
    ];

    
    galleryItems.forEach(item => {
        const galleryItem = document.createElement("div");
        galleryItem.classList.add("gallery-item");

        const image = document.createElement("img");
        image.src = item.image;
        image.alt = item.title;

        const title = document.createElement("h3");
        title.textContent = item.title;

        const details = document.createElement("p");
        details.classList.add("destination-details");
        details.textContent = item.details;

        galleryItem.appendChild(image);
        galleryItem.appendChild(title);
        galleryItem.appendChild(details);
        galleryContainer.appendChild(galleryItem);
    });
});
