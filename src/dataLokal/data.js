const navItems = ['Home', 'Profil', 'Galeri', 'Kontak'];
const heroSectiondata = [
  {
    image: '/1.jpg',
    title: 'Welcome to Our Site',
    description: 'Discover amazing content here.',
  },
  {
    image: '/2.jpg',
    title: 'Explore More',
    description: 'Dive into our features.',
  },
];
const aboutData = {
  title: 'Tentang Kami',
  description: 'SMA Harapan Bangsa berdedikasi untuk memberikan pendidikan berkualitas yang mendidik siswa berprestasi secara akademik dan pembentukan karakter. Kami percaya setiap siswa memiliki potensi untuk menjadi pemimpin masa depan.',
  logo: '/logontch3.png', // Ganti dengan URL logo Anda
};

const servicesData = [
  {
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    title: 'Pendidikan berbasis kurikulum nasional plus',
  },
  {
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    title: 'Beragam kegiatan untuk mengasah bakat dan kreativitas',
  },
  {
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    title: 'Beragam kegiatan untuk mengasah bakat dan kreativitas',
  },
  {
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    title: 'Pendidikan berbasis kurikulum nasional plus',
  },
];

const contentData = {
  title: 'Content',
  description: 'SMA Harapan Bangsa berdedikasi untuk memberikan pendidikan berkualitas yang mendidik siswa berprestasi secara akademik dan pembentukan karakter. Kami percaya setiap siswa memiliki potensi untuk menjadi pemimpin masa depan.',
  image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
};

const images = [
  { src: './3.jpg', className: 'box1' },
  { src: './2.jpg', className: 'box2' },
  { src: './1.jpg', className: 'box3' },
];

function NavBarItems() {
  return navItems;
}
function dataHeroSection() {
  return heroSectiondata;
}

function AboutData() {
  return aboutData;
}

function serviceData() {
  return servicesData;
}

function contentdata() {
  return contentData;
}

function imageData() {
  return images;
}

export { NavBarItems, dataHeroSection, AboutData, serviceData, contentdata, imageData };
