const seo = [
  (seotitle = 'Mesin Kasir Barcode'),
  (seodesc = 'Mesin barcode lengkap system.'),
  (seocover = 'https://mesinkasironline.web.app/img/mesinkasironlineapp2.jpg'),
  (seoicon = 'src/vite.svg'),
  (facebook = 'https://www.facebook.com/mesinkasircomplete'),
  (twitter = 'https://twitter.com/hockeycomp'),
  (author =
    'https://www.fiverr.com/creativitas/design-your-modern-website-using-jekyll'),
];
document.write(`
<title>${seotitle}</title>
<meta content='${seotitle}' property='og:title'/>
<meta content='${seotitle}' property='og:site_name'/>
<meta content='${seotitle}' name='facebook:title'/>
<meta content='${seotitle} ' name='twitter:title'/>
<meta content='${seodesc}' name='description'/>
<meta content='${seodesc}' name='twitter:description'/>
<meta content='${seodesc}' name='facebook:description'/>
<meta content='website' property='og:type'/>
<meta content='${facebook}' property='facebook:author'/>
<meta content='${seoicon}' name='facebook:image'/>
<meta content='summary_large_image' name='twitter:card'/>
<meta content='${twitter}' property='twitter:author'/>
<meta content='${twitter}' name='twitter:site'/>
<meta content='${author}' property='og:author'/>
<meta content='${author}' property='og:developer'/>
<meta content='${seoicon}' name='twitter:image'/>
<link rel="icon" type="image/x-icon" href="${seoicon}" />
`);
