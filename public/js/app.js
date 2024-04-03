addProduct();
function addProduct() {
  const cateAll = document.querySelector(".all-cate");
  const cateShirt = document.querySelector(".shirt-cate");
  const catePant = document.querySelector(".pant-cate");
  const cateSkirt = document.querySelector(".skirt-cate");
  const cateOther = document.querySelector(".other-cate");
  function reset(params) {
    if(params==='cateAll'){
        cateAll.style = 'border-bottom: .8px solid #f16974;'
        cateShirt.style = 'border:none';
        catePant.style = 'border:none';
        cateSkirt.style = 'border:none';
        cateOther.style = 'border:none';
    }else if(params==='cateShirt'){
        cateShirt.style = 'border-bottom: .8px solid #f16974;'
        cateAll.style = 'border:none';
        catePant.style = 'border:none';
        cateSkirt.style = 'border:none';
        cateOther.style = 'border:none';
    }
    else if(params==='catePant'){
        catePant.style = 'border-bottom: .8px solid #f16974;'
        cateAll.style = 'border:none';
        cateShirt.style = 'border:none';
        cateSkirt.style = 'border:none';
        cateOther.style = 'border:none';
    }
    else if(params==='cateSkirt'){
        cateSkirt.style = 'border-bottom: .8px solid #f16974;'
        cateAll.style = 'border:none';
        cateShirt.style = 'border:none';
        catePant.style = 'border:none';
        cateOther.style = 'border:none';
    }
    else{
        cateOther.style = 'border-bottom: .8px solid #f16974;'
        cateAll.style = 'border:none';
        catePant.style = 'border:none';
        cateSkirt.style = 'border:none';
        catePant.style = 'border:none';
    }
  }
  let data = [
    {
      photo:
        "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lo2od7br619p5e",
      link: "https://adpvn.top/M95J",
      name: "Áo Croptop Tay Dài Cổ Chữ U Kèm Áo Yếm Bên Trong",
      cate: "áo",
    },
    {
      photo:
        "https://down-vn.img.susercontent.com/file/cn-11134207-7r98o-lqd8urlfdy5x3d",
      link: "https://adpvn.top/5Ft2",
      name: "Áo Kiểu Cổ Vuông Tay Dài Thời Trang",
      cate: "áo",
    },
    {
      photo:
        "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lq8vfi5rtfefe7",
      link: "https://adpvn.top/vZCa",
      name: "Áo croptop nữ kiểu vạt nhọn bigsize sang chảnh tiểu thư",
      cate: "áo",
    },
    {
      photo:
        "https://down-vn.img.susercontent.com/file/vn-11134211-7qukw-lgmilxehnx2q56",
      link: "https://adpvn.top/d5EE",
      name: "Chân Váy Kaki Túi Hộp Chữ A",
      cate: "váy",
    },
    {
      photo:
        "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lkm56s287n9sfe",
      link: "https://adpvn.top/kzDA",
      name: "Áo Xinh Kiểu Mới Gân Trung CHOCKER Đẹp",
      cate: "áo",
    },
    {
      photo:
        "https://down-vn.img.susercontent.com/file/6aaf3dae5b174d4e47debb2a68a765f4",
      link: "https://adpvn.top/yk3f",
      name: "Áo COZOKC tay dài hở vai gợi cảm thời trang cho nữ",
      cate: "áo",
    },
    {
      photo:
        "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lldal49e6xu092",
      link: "https://adpvn.top/DbGt",
      name: "Áo Khoác Cadigan Len Chữ Thập Quảng Châu",
      cate: "áo",
    },
    {
      photo:
        "https://down-vn.img.susercontent.com/file/sg-11134201-7r9b9-llp6lckvf19ffd",
      link: "https://adpvn.top/WUxu",
      name: "Set áo LEN GIẤY trễ vai ôm body mix chân váy ngắn voan 3 tầng",
      cate: "váy",
    },
    {
      photo:
        "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lpo2bci98vjj61",
      link: "https://adpvn.top/WUxu",
      name: "Đầm Dáng Ngắn Xoè Ôm Thắt Lưng Eo",
      cate: "váy",
    },
    {
      photo:
        "	https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lkz70wynt68bdf",
      link: "https://adpvn.top/5BE4",
      name: "Váy Tafta Trễ Vai Đính Ngọc Tay Bồng Siêu Sang Chảnh Tiểu Thư",
      cate: "váy",
    },
    {
      photo:
        "	https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lop1rcz9lob42c",
      link: "https://adpvn.top/6mAa",
      name: "Váy đi chơi jolie dress vải voan",
      cate: "váy",
    },
    {
      photo:
        "https://down-vn.img.susercontent.com/file/vn-11134201-7r98o-llusp5c48rmna7",
      link: "https://adpvn.top/WpuL",
      name: "Váy trắng bánh bèo,Đầm cổ yếm trễ vai",
      cate: "váy",
    },
    {
      photo:
      "https://down-vn.img.susercontent.com/file/cn-11134207-7r98o-lpojwcdy0rpf70",
      link: "https://adpvn.top/eYtv",
      name: "Gương trang điểm để bàn",
      cate: "khác",
    },
    {
      photo:
      "https://down-vn.img.susercontent.com/file/sg-11134201-7qvcu-ljgfqu6977k075",
      link: "https://adpvn.top/FVe8",
      name: "Móng Tay Giả Đính Đá Màu Hồng",
      cate: "khác",
    },
    {
      photo:
      "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lm1fh3m1f8pre3",
      link: "https://adpvn.top/nqWd",
      name: "Áo khoác Jean dáng dài",
      cate: "áo",
    },
    {
      photo:
      "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lpo2bcia3s1b1f",
      link: "https://adpvn.top/iWxo",
      name: "Đầm Dáng Ngắn Xoè Ôm Thắt Lưng Eo",
      cate: "váy",
    },
    {
      photo:
      "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-ls6qn3gh5sih64",
      link: "https://adpvn.top/CNUf",
      name: "Set Đầm Hở Lưng Phối Nơ Eo Voan Tầng + Áo Khoác Croptop",
      cate: "váy",
    },
    {
      photo:
      "https://down-vn.img.susercontent.com/file/sg-11134201-7rbm0-lpks87x1m76m66",
      link: "https://adpvn.top/zaoN",
      name: "Áo Sơ Mi áo sơ mi nữ ",
      cate: "áo",
    },
    {
      photo:
      "https://down-vn.img.susercontent.com/file/sg-11134201-7rbma-lobalgmh1db95c",
      link: "https://adpvn.top/xTLD",
      name: "Hello kitty Dép Lông Đế Dày ",
      cate: "khác",
    },
    {
      photo:
      "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lgszwbc6up6b55",
      link: "https://adpvn.top/97WC",
      name: "Quần Jean nữ ống rộng CẠP CAO",
      cate: "quần",
    },
    {
      photo:
      "https://down-vn.img.susercontent.com/file/3bea7311aca034a5c4d0d7e4fa908e18",
      link: "https://adpvn.top/PZYU",
      name: "Quần jeans lưng cao 2 gang tay rách gối",
      cate: "quần",
    },
    {
      photo:
      "https://down-vn.img.susercontent.com/file/sg-11134201-22100-e3r3vozezbiv92",
      link: "https://adpvn.top/YYNa",
      name: "Áo Khoác Kẻ Sọc Dáng Rộng Phong Cách Hàn Quốc",
      cate: "áo",
    },
    {
      photo:
      "	https://down-vn.img.susercontent.com/file/6af12abf82e61e6151b7904207000cf3",
      link: "https://adpvn.top/hMy4",
      name: "Quần JEANS ống rộng nữ lưng cao",
      cate: "quần",
    },
    {
      photo:
      "	https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lja304cbo3pua1",
      link: "https://adpvn.top/zDUr",
      name: "Áo Thun Tăm Trễ Vai Vạt Xéo",
      cate: "áo",
    },
    {
      photo:
      "https://down-vn.img.susercontent.com/file/sg-11134201-7rblm-lozr7dv9ns7u7b",
      link: "https://adpvn.top/4y9T",
      name: "Quần jeans loe co giãn",
      cate: "quần",
    },
    {
      photo:
      "	https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lnsmvmi5tshmc5",
      link: "https://adpvn.top/p8hG",
      name: "Áo Khoác Nỉ Hoodie Croptop ",
      cate: "áo",
    },
    {
      photo:
      "	https://down-vn.img.susercontent.com/file/vn-11134211-7r98o-ln8k6vgbae3c66",
      link: "https://adpvn.top/f5sf",
      name: "Áo khoác gió nam nữ có mũ",
      cate: "áo",
    },
    {
      photo:
      "https://down-vn.img.susercontent.com/file/sg-11134201-7rbma-lns8zb3tbth1ff",
      link: "https://adpvn.top/TNhR",
      name: "Quần jean thêu ngôi sao xanh ",
      cate: "quần",
    },
    {
      photo:
      "https://down-vn.img.susercontent.com/file/cn-11134207-7r98o-lqish53bvqyd06",
      link: "https://adpvn.top/WiCT",
      name: "Quần jean nữ ống loe cạp cao",
      cate: "quần",
    },
    {
      photo:
      "https://down-vn.img.susercontent.com/file/sg-11134201-7rbl1-lloef3p1g26265",
      link: "https://adpvn.top/gT5b",
      name: "Set Đầm Hai Dây Màu Đen Thời Trang",
      cate: "váy",
    },
    {
      photo:
      "	https://down-vn.img.susercontent.com/file/sg-11134201-7rbk8-ll7wde7nme2485",
      link: "https://adpvn.top/AUi5",
      name: "Chân váy y2k Chân Váy denim Xếp Ly",
      cate: "váy",
    },
    {
      photo:
      "	https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-ll5c3291javcaf",
      link: "https://adpvn.top/qkCv",
      name: "Quần jeans nữ ống loe co giãn",
      cate: "quần",
    },
    {
      photo:
      "	https://down-vn.img.susercontent.com/file/cn-11134207-7r98o-lpk7av6lkdwg42",
      link: "https://adpvn.top/wDVT",
      name: "Quần jeans Nữ Lưng Cao Ống Rộng",
      cate: "quần",
    },
    {
      photo:
      "	https://down-vn.img.susercontent.com/file/vn-11134201-7r98o-ln2sx5znyhnca8",
      link: "https://adpvn.top/nWtB",
      name: "Giày Thời Trang Đế Dày Đính Nơ Xinh Xắn",
      cate: "khác",
    },
    {
      photo:
      "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lmbq7y25uhun17",
      link: "https://adpvn.top/D4ra",
      name: "Quần jeans ống rộng nữ",
      cate: "quần",
    },
    {
      photo:
      "		https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-llvnbz7nqv3307",
      link: "https://adpvn.top/D4ra",
      name: "Đầm Dự Tiệc Trễ Vai Xẻ Vạt Dáng Dài",
      cate: "váy",
    },
    {
      photo:
      "https://down-vn.img.susercontent.com/file/cn-11134207-7r98o-ln829m40i0f125",
      link: "https://adpvn.top/pt3Q",
      name: "Lược Chải Tóc Mát Xa Da Đầu",
      cate: "khác",
    },
    {
      photo:
      "https://down-vn.img.susercontent.com/file/sg-11134201-7rcde-lt685tauc6lrf4",
      link: "https://adpvn.top/mXAu",
      name: "Áo sơ mi Lovito kiểu",
      cate: "áo",
    },
    {
      photo:
      "https://down-vn.img.susercontent.com/file/sg-11134201-7rbml-lnv8a39fpghcf5",
      link: "https://adpvn.top/1HSC",
      name: "Áo thun Lovito khóa kéo",
      cate: "áo",
    },
    {
      photo:
      "https://down-vn.img.susercontent.com/file/sg-11134201-7rcf7-lt69126i7ool20",
      link: "https://adpvn.top/uSGs",
      name: "Mũ lưỡi trai Lovito",
      cate: "khác",
    },
    {
      photo:
      "https://down-vn.img.susercontent.com/file/83abff87b1c9c58086cd481a60a59cfc",
      link: "https://adpvn.top/SFbc",
      name: "Váy babydoll tay phồng",
      cate: "váy",
    },
    {
      photo:
      "	https://down-vn.img.susercontent.com/file/sg-11134201-7qvey-lhd2s2b91nan30",
      link: "https://adpvn.top/LKVV",
      name: "Kính Mát Mắt Mèo Chống Tia",
      cate: "khác",
    },
    {
      photo:
      "https://down-vn.img.susercontent.com/file/sg-11134201-23030-qskcrnwyqaov97",
      link: "https://adpvn.top/mHBw",
      name: " Váy tiểu tiên nữ",
      cate: "váy",
    },
    {
      photo:
      "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lmt1a3vo4qfzdc",
      link: "https://adpvn.top/U2n3",
      name: "Váy trễ vai tay bồng kèm nơ đá",
      cate: "váy",
    },
    {
      photo:
      "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-ln2vpkour22b90",
      link: "https://adpvn.top/dcQ6",
      name: "Váy hoa nhí 2 dây",
      cate: "váy",
    },
    {
      photo:
      "https://down-vn.img.susercontent.com/file/dd16e2d4413e3fb6973ad37b89be13d6",
      link: "https://adpvn.top/1PJi",
      name: "Đầm công chúa",
      cate: "váy",
    },
    {
      photo:
      "	https://down-vn.img.susercontent.com/file/sg-11134201-7rcdw-lt69656merkd5a",
      link: "https://adpvn.top/DcU2",
      name: "Áo thun Lovito dây rút",
      cate: "áo",
    },
    {
      photo:
      "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lgewki08no1697",
      link: "https://adpvn.top/Y6iB",
      name: "Babydoll Thêu Hoa Tay Phồng",
      cate: "váy",
    },
    {
      photo:
      "https://down-vn.img.susercontent.com/file/14676bcb8740c345ee24a26e84343f41",
      link: "https://adpvn.top/q2hD",
      name: "Váy voan be xếp li ngang ngực",
      cate: "váy",
    },
    {
      photo:
      "https://down-vn.img.susercontent.com/file/sg-11134201-7qvf2-li3xih5evi8d74",
      link: "https://adpvn.top/EVpY",
      name: "Váy Ngắn Ôm Hông Có Dây",
      cate: "váy",
    },
    {
      photo:
      "https://down-vn.img.susercontent.com/file/fdbff6c048c4e3b256b87154e4c6f13a",
      link: "https://adpvn.top/gxbc",
      name: "Áo Sơ Mi Dáng Rộng Ngắn Tay",
      cate: "áo",
    },
    {
      photo:
      "	https://down-vn.img.susercontent.com/file/sg-11134201-22100-ua02u1spp5ivfa",
      link: "https://adpvn.top/EVpY",
      name: "Băng Đô Tai Mèo Dễ Thương Phong Cách Lolita Nhật Bản",
      cate: "khác",
    },
    {
      photo:
      "	https://down-vn.img.susercontent.com/file/203c542cf10f80ee927b15d25f6140e3",
      link: "https://adpvn.top/Qh4K",
      name: "Đôi găng tay len dài màu trơn thời trang",
      cate: "khác",
    },
    {
      photo:
      "		https://down-vn.img.susercontent.com/file/cn-11134207-7qukw-li1ago8d4hwe4b",
      link: "https://adpvn.top/iYFC",
      name: "Dép Cross dép sandal nữ",
      cate: "khác",
    },
    {
      photo:
      "https://down-vn.img.susercontent.com/file/sg-11134201-7qvej-ljemtpswjutd66",
      link: "https://adpvn.top/GFw8",
      name: "Bộ Áo Denim Tay Dài Phối Bèo + Chân Váy Denim",
      cate: "áo",
    },
    {
      photo:
      "https://down-vn.img.susercontent.com/file/cn-11134207-7r98o-lqd4agqtucs58c",
      link: "https://adpvn.top/a3sH",
      name: "Áo thun ZHELIHANGFEI ngắn tay",
      cate: "áo",
    },
    {
      photo:
      "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-locmfdv5pwvr16",
      link: "https://adpvn.top/yYca",
      name: "Áo thun phông logo tay nam nữ PINK",
      cate: "áo",
    },
    {
      photo:
      "https://down-vn.img.susercontent.com/file/cn-11134207-7r98o-ls9hleocfefxc2",
      link: "https://adpvn.top/FjkX",
      name: "Áo sơ mi nữ áo kiểu hàn quốc",
      cate: "áo",
    },
    {
      photo:
      "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-loq9pexcfpqjaf",
      link: "https://adpvn.top/cW9q",
      name: "Áo khoác da croptop basic",
      cate: "áo",
    },
    {
      photo:
      "https://down-vn.img.susercontent.com/file/10aaf4eb8b00e97b87ef8dd7a0cdcb6c",
      link: "https://adpvn.top/7LE4",
      name: "Quần jeans Nữ Ống Suông Lưng",
      cate: "quần",
    },
  ];
  var tempt;
  product(data);
  cateAll.addEventListener("click", () => {
    tempt = data;
    product(tempt);
    reset('cateAll');
  });
  cateShirt.addEventListener("click", () => {
    tempt = data.filter((value) => value.cate === "áo");
    product(tempt);
    reset('cateShirt');
  });
  catePant.addEventListener("click", () => {
    tempt = data.filter((value) => value.cate === "quần");
    product(tempt);
    reset('catePant');
  });
  cateSkirt.addEventListener("click", () => {
    tempt = data.filter((value) => value.cate === "váy");
    cateSkirt.style = 'border-bottom: .8px solid #f16974;'
    product(tempt);
    reset('cateSkirt');
  });
  cateOther.addEventListener("click", () => {
    tempt = data.filter((value) => value.cate === "khác");
    cateSkirt.style = 'border-bottom: .8px solid #f16974;'
    product(tempt);
    reset('cateOther');
  });
}
function product(data) {
  const listProduct = document.querySelector(".list-product-content-2");
  listProduct.innerHTML = "";
  data.forEach((item) => {
    const productHTML = `
          <div class="item-product-content-2  bg-white hi"
          data-aos-anchor-placement="top-center">
          <a href=${item.link}>
          <div class="wrapper-product w-full">
              <div class="img-product w-full"><img src=${item.photo}
                      class="img-fluid" alt="">
              </div>
              <div class="content-item text-20"> 
                  <div class="title-product mb-2 text-20 text-center font-600">${item.name}
                  </div>
                  <div class="d-flex justify-content-center">
                      <div class="price"><span
                              class="offer-price text-center text-danger font-600 text-18 mr-1 inline-block">BDT18.74</span><span
                              class="main-price text-qgray font-600 text-center text-18">BDT34.99</span>
                      </div>
                  </div>
              </div>
             
          </div>
          </a>
      </div>
          `;
    listProduct.innerHTML += productHTML;
  });
}
