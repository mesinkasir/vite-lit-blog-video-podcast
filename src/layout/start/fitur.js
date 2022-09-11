export const springy = [
  0, 0.0701, 0.2329, 0.4308, 0.6245, 0.7906, 0.9184, 1.0065, 1.059, 1.0833,
  1.0872, 1.0783, 1.0628, 1.0453, 1.0288, 1.015, 1.0048, 0.9979, 0.994, 0.9925,
  0.9925, 0.9935, 0.9949, 0.9964, 0.9978, 0.999, 0.9998,
];

export const onFrames = (animate) => {
  const { animatingProperties: props, frames } = animate;
  if (frames === undefined || props === undefined) {
    return frames;
  }
  return [
    frames[0],
    ...springy.map((v) => {
      const frame = {};
      const x = props.left ? `translateX(${props.left * (1 - v)}px)` : '';
      const y = props.top ? `translateY(${props.top * (1 - v)}px)` : '';
      const sx = props.width
        ? `scaleX(${props.width + (1 - props.width) * v})`
        : '';
      const sy = props.height
        ? `scaleY(${props.height + (1 - props.height) * v})`
        : '';
      frame.transform = `${x} ${y} ${sx} ${sy}`;
      return frame;
    }),
    frames[1],
  ];
};

export const data = [
  {
    id: 0,
    title: 'Intro Mesin Kasir Barcode',
    description: 'Mesin kasir detail informasi produk .',
    content:
      'Pada paket mesin kasir set kami menggunakan all in one touchscreen pos technology by ASUS.',
    text1:
      'Menggunakan OS windows dan dengan monitor touchscreen layar sentuh plus computer menjadi satu kesatuan pada pos point of sale ini.',
    text2: 'Desain slim mewah dan fashionable untuk digunakan.',
    text3:
      'Dukungan multi port untuk integrasi dengan berbagai perangkat kasir.',
    video: 'NLxDbnyQ4r4',
  },
  {
    id: 1,
    title: 'Unboxing all in one pos touchscreen',
    description: 'Yuk cek real tampilan dari mesin kasir terbaru ini..',
    content:
      'Play video dan lihat bagaimana keren nya mesin kasir ini untuk digunakan dalam menunjang bisnis dan usaha mu.',
    text1:
      'Benar benar ramping pada desain nya sehingga tidak memakan tempat pada space mesin kasir.',
    text2:
      'Fleksibel dengan metode rotate yang dapat kita atur sudut kemiringan untuk kenyamanan kasir dalam bekerja.',
    text3:
      'Semakin sempurna dengan dukungan multi port untuk integrasi dengan barcode dan hardware kasir lain nya.',
    video: 'FAhCxCBu8ZE',
  },
  {
    id: 2,
    title: 'Version 2 spesifikasi mesin kasir',
    description: 'Spesifikasi mesin kasir all in one touchsreen pos versi 2',
    content:
      'Version 2 adalah yang termurah dan sudah dilengkapi dengan perangkat kasir seperti printer kasir untuk mencetak struk penjualan.',
    text1:
      'Dengan menggunakan software yang sudah injeksi di dalam nya maka menggunakan mesin kasir ini relatif lebih mudah walau tanpa barcode karna sudah mendukung touchscreen mode.',
    text2:
      'All in one touchscreen pos by asus plus software kasir toko minimarket.',
    text3: 'Auto cutter printer kasir yang dapat memotong kertas otomatis.',
    video: '9HYHptO36A4',
  },
  {
    id: 3,
    title: 'Version 3 mesin kasir touchscreen pos',
    description: 'Spesifikasi mesin kasir all in one touchsreen pos versi 3',
    content:
      'Alternatif lain untuk kebutuhan mesin kasir dengan harga yang murah maka versi 3 adalah solusi untuk mu.',
    text1:
      'All in one touchscreen by asus plus injeksi software pos yang sangat lengkap untuk pembukuan dan transaksi.',
    text2:
      'Include dengan printer kasir auto cutter untuk mencetak struk kasir, dan laci kasir untuk media penyimpanan uang transaksi kasir.',
    text3:
      'Mesin kasir vers 3 ini akan membantu secara optimal pembukuan dan transaksi.',
    video: '_K2AOEAmu3c',
  },
  {
    id: 4,
    title: 'Version 4 dengan manual laser barcode',
    description: 'Mesin kasir barcode lengkap versi 4 demo operasional.',
    content:
      'Untuk kebutuhan dengan menggunakan barcode maka versi 4 ini memberikan solusi yang terbaik dengan penggunaan gun laser barcode dalam bekerja.',
    text1:
      'Include dengan injeksi software program toko minimarket yang lengkap dan support digunakan dengan metode touchscreen maupun barcode system dalam penggunaan nya.',
    text2:
      'All in one touchscreen pos + printer kasir + laci kasir + manual laser gun barcode.',
    text3: 'Semakin cepat dan mudah dengan barcode laser system.',
    video: 'zpcZrwBfxg4',
  },
  {
    id: 5,
    title: 'Version 5 auto laser barcode',
    description:
      'Sempurnakan dan lengkapi system mesin kasir dengan menggunakan versi 5',
    content:
      'Kecepatan dan kesempurnaan dengan barcode system dalam bertransaksi maka pada versi 5 ini sudah ready untuk digunakan dengan auto multi laser barcode system.',
    text1:
      'Laser scanner barcode yang dapat membaca kode barcode dari berbagai arah dan bekerja secara otomatis untuk membaca kode barcode.',
    text2:
      'All in one pos touchscreen barcode + software program toko + laci kasir + printer kasir + auto multi laser barcode.',
    text3:
      'Gunakan mesin kasir all in one touchscreen pos barcode version 5 untuk solusi kecepatan dalam bertransaksi.',
    video: 'jiWpIcWFHH8',
  },
  {
    id: 6,
    title: 'Version 6 barcode ter lengkap',
    description:
      'Solusi mesin kasir yang lengkap dan mandiri dengan barcode system yang lengkap.',
    content:
      'Jika membutuhkan mesin kasir yang mandiri secara keseluruhan maka versi 6 ini adalah solusi tepat untuk digunakan.',
    text1:
      'Dilengkapi dengan barcode system yang komplit seperti mesin cetak barcode dan laser barcode multi auto laser system untuk menunjang pekerjaan kasir.',
    text2:
      'Mesin barcode memudahkan kita untuk bekerja dengan membuat kode barcode sesuai desain snediri untuk ditempelkan pada produk yang dijual.',
    text3:
      'Sempurnakan point of sale system dengan menggunakan technology barcode lengkap ini untuk solusi terbaik.',
    video: 'hzXc74f5KP8',
  },
  {
    id: 7,
    title: 'Operasional penggunaan versi POS 5 ',
    description:
      'Cek video bagaimana mudah dan cepat nya menggunakan mesin kasir barcode touchscreen versi 5 ini',
    content:
      'Versi 5 adalah mesin kasir touchscreen barcode yang sudah sangat lengkap dan cepat dalam mendukung bisnis usaha toko retail minimarket pada khusus nya.',
    text1:
      'Dengan memiliki laser barcode auto multi laser system dalam bekerja menyempurnakan dalam kebutuhan untuk membaca kode barcode dari berbagai arah.',
    text2:
      'Kemudahan dalam bekerja dengan software program toko minimarket yang mendukung penuh touchscreen system maupun barcode pada saat bertransaksi.',
    text3: 'Saat nya menggunakan versi 5 untuk solusi yang terbaik.',
    video: 'zQIjZPnGthc',
  },
  {
    id: 8,
    title: 'Compare mesin kasir online vs offline',
    description:
      'Bagaimana mesin kasir offline dan online dalam bekerja dan apa perbedaan nya.',
    content:
      'Jika dibutuhkan untuk mobilitas maka kami juga menyediakan online system cloud web app dalam bekerja, dengan website dan aplikasi terintegrasi menjadi satu dalam satu mesin kasir online app untuk digunakan.',
    text1:
      'Tapi sebelum memilih system digunakan , maka sesuaikan terlebih dahulu dengan kebutuhan anda khusus nya untuk pos point of sale system.',
    text2:
      'Mesin kasir desktop offline bekerja tanpa membutuhkan internet dan biaya layanan lagi, sekali beli untuk selamanya.',
    text3:
      'Mesin kasir online membutuhkan internet dalam bekerja dan terdapat biaya layanan pertahun dalam penggunaan nya.',
    video: 'hLjAOcPVz0w',
  },
  {
    id: 9,
    title: 'Contact Mesin Kasir Barcode',
    description:
      'Hubungi kami untuk informasi dan konsultasi mengenai mesin kasir.',
    content:
      'Jangan ragu untuk menghubungi team dan staff kami untuk memberikan informasi dan konsultasi mengenai mesin kasir barcode yang cocok untuk bisnis usaha mu.',
    text1: 'Whatsapp : +6285646104747',
    text2: 'Call us : +62895339403223',
    text3: 'Email : axcora@gmail.com',
    video: 'mm-oHbkulWA',
  },
];
