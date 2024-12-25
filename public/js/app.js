addProduct();
function addProduct() {
  const cateAll = document.querySelector(".all-cate");
  const cateShirt = document.querySelector(".shirt-cate");
  const catePant = document.querySelector(".pant-cate");
  const cateSkirt = document.querySelector(".skirt-cate");
  const cateOther = document.querySelector(".other-cate");
  function reset(params) {
    if (params === "cateAll") {
      cateAll.style = "border-bottom: .8px solid #f16974;";
      cateShirt.style = "border:none";
      catePant.style = "border:none";
      cateSkirt.style = "border:none";
      cateOther.style = "border:none";
    } else if (params === "cateShirt") {
      cateShirt.style = "border-bottom: .8px solid #f16974;";
      cateAll.style = "border:none";
      catePant.style = "border:none";
      cateSkirt.style = "border:none";
      cateOther.style = "border:none";
    } else if (params === "catePant") {
      catePant.style = "border-bottom: .8px solid #f16974;";
      cateAll.style = "border:none";
      cateShirt.style = "border:none";
      cateSkirt.style = "border:none";
      cateOther.style = "border:none";
    } else if (params === "cateSkirt") {
      cateSkirt.style = "border-bottom: .8px solid #f16974;";
      cateAll.style = "border:none";
      cateShirt.style = "border:none";
      catePant.style = "border:none";
      cateOther.style = "border:none";
    } else {
      cateOther.style = "border-bottom: .8px solid #f16974;";
      cateAll.style = "border:none";
      catePant.style = "border:none";
      cateSkirt.style = "border:none";
      catePant.style = "border:none";
    }
  }
  let data = [
    {
      photo:
        "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lo2od7br619p5e",
      link: "https://adpvn.top/M95J",
      name: "Áo Croptop Tay Dài Cổ Chữ U Kèm Áo Yếm Bên Trong",
      cate: "áo",
      id: "MSC001",
    },
    {
      photo:
        "https://down-vn.img.susercontent.com/file/cn-11134207-7r98o-lqd8urlfdy5x3d",
      link: "https://adpvn.top/5Ft2",
      name: "Áo Kiểu Cổ Vuông Tay Dài Thời Trang",
      cate: "áo",
      id: "MSC002",
    },
    {
      photo:
        "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lq8vfi5rtfefe7",
      link: "https://adpvn.top/vZCa",
      name: "Áo croptop nữ kiểu vạt nhọn bigsize sang chảnh tiểu thư",
      cate: "áo",
      id: "MSC003",
    },
    {
      photo:
        "https://down-vn.img.susercontent.com/file/vn-11134211-7qukw-lgmilxehnx2q56",
      link: "https://adpvn.top/d5EE",
      name: "Chân Váy Kaki Túi Hộp Chữ A",
      cate: "váy",
      id: "MSC004",
    },
    {
      photo:
        "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lkm56s287n9sfe",
      link: "https://adpvn.top/kzDA",
      name: "Áo Xinh Kiểu Mới Gân Trung CHOCKER Đẹp",
      cate: "áo",
      id: "MSC005",
    },
    {
      photo:
        "https://down-vn.img.susercontent.com/file/6aaf3dae5b174d4e47debb2a68a765f4",
      link: "https://adpvn.top/yk3f",
      name: "Áo COZOKC tay dài hở vai gợi cảm thời trang cho nữ",
      cate: "áo",
      id: "MSC006",
    },
    {
      photo:
        "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lldal49e6xu092",
      link: "https://adpvn.top/DbGt",
      name: "Áo Khoác Cadigan Len Chữ Thập Quảng Châu",
      cate: "áo",
      id: "MSC007",
    },
    {
      photo: "https://cf.shopee.vn/file/vn-11134207-7qukw-lhwtqoc0wr7lba",
      link: "https://click.adpia.vn/tracking.php?m=shopee&a=A100118771&l=9999&l_cd1=3&l_cd2=0&u_id=&tu=https%3A%2F%2Fshopee.vn%2Fproduct%2F33680938%2F21678399000",
      name: "Áo Thun Form Fit Chữ B",
      cate: "áo",
      id: "MSC008",
    },
    {
      photo:
        "https://down-vn.img.susercontent.com/file/sg-11134201-7r9b9-llp6lckvf19ffd",
      link: "https://adpvn.top/WUxu",
      name: "Set áo LEN GIẤY trễ vai ôm body mix chân váy ngắn voan 3 tầng",
      cate: "váy",
      id: "MSC009",
    },
    {
      photo:
        "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lpo2bci98vjj61",
      link: "https://adpvn.top/WUxu",
      name: "Đầm Dáng Ngắn Xoè Ôm Thắt Lưng Eo",
      cate: "váy",
      id: "MSC010",
    },
    {
      photo:
        "\thttps://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lkz70wynt68bdf",
      link: "https://adpvn.top/5BE4",
      name: "Váy Tafta Trễ Vai Đính Ngọc Tay Bồng Siêu Sang Chảnh Tiểu Thư",
      cate: "váy",
      id: "MSC011",
    },
    {
      photo:
        "\thttps://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lop1rcz9lob42c",
      link: "https://adpvn.top/6mAa",
      name: "Váy đi chơi jolie dress vải voan",
      cate: "váy",
      id: "MSC012",
    },
    {
      photo:
        "https://down-vn.img.susercontent.com/file/vn-11134201-7r98o-llusp5c48rmna7",
      link: "https://adpvn.top/WpuL",
      name: "Váy trắng bánh bèo,Đầm cổ yếm trễ vai",
      cate: "váy",
      id: "MSC013",
    },
    {
      photo:
        "https://down-vn.img.susercontent.com/file/cn-11134207-7r98o-lpojwcdy0rpf70",
      link: "https://adpvn.top/eYtv",
      name: "Gương trang điểm để bàn",
      cate: "khác",
      id: "MSC014",
    },
    {
      photo:
        "https://down-vn.img.susercontent.com/file/sg-11134201-7qvcu-ljgfqu6977k075",
      link: "https://adpvn.top/FVe8",
      name: "Móng Tay Giả Đính Đá Màu Hồng",
      cate: "khác",
      id: "MSC015",
    },
    {
      photo:
        "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lm1fh3m1f8pre3",
      link: "https://adpvn.top/nqWd",
      name: "Áo khoác Jean dáng dài",
      cate: "áo",
      id: "MSC016",
    },
    {
      photo:
        "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lpo2bcia3s1b1f",
      link: "https://adpvn.top/iWxo",
      name: "Đầm Dáng Ngắn Xoè Ôm Thắt Lưng Eo",
      cate: "váy",
      id: "MSC017",
    },
    {
      photo:
        "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-ls6qn3gh5sih64",
      link: "https://adpvn.top/CNUf",
      name: "Set Đầm Hở Lưng Phối Nơ Eo Voan Tầng + Áo Khoác Croptop",
      cate: "váy",
      id: "MSC018",
    },
    {
      photo:
        "https://down-vn.img.susercontent.com/file/sg-11134201-7rbm0-lpks87x1m76m66",
      link: "https://adpvn.top/zaoN",
      name: "Áo Sơ Mi áo sơ mi nữ ",
      cate: "áo",
      id: "MSC019",
    },
    {
      photo:
        "https://down-vn.img.susercontent.com/file/sg-11134201-7rbma-lobalgmh1db95c",
      link: "https://adpvn.top/xTLD",
      name: "Hello kitty Dép Lông Đế Dày ",
      cate: "khác",
      id: "MSC020",
    },
    {
      photo:
        "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lgszwbc6up6b55",
      link: "https://adpvn.top/97WC",
      name: "Quần Jean nữ ống rộng CẠP CAO",
      cate: "quần",
      id: "MSC021",
    },
    {
      photo:
        "https://down-vn.img.susercontent.com/file/3bea7311aca034a5c4d0d7e4fa908e18",
      link: "https://adpvn.top/PZYU",
      name: "Quần jeans lưng cao 2 gang tay rách gối",
      cate: "quần",
      id: "MSC022",
    },
    {
      photo:
        "https://down-vn.img.susercontent.com/file/sg-11134201-22100-e3r3vozezbiv92",
      link: "https://adpvn.top/YYNa",
      name: "Áo Khoác Kẻ Sọc Dáng Rộng Phong Cách Hàn Quốc",
      cate: "áo",
      id: "MSC023",
    },
    {
      photo:
        "\thttps://down-vn.img.susercontent.com/file/6af12abf82e61e6151b7904207000cf3",
      link: "https://adpvn.top/hMy4",
      name: "Quần JEANS ống rộng nữ lưng cao",
      cate: "quần",
      id: "MSC024",
    },
    {
      photo:
        "\thttps://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lja304cbo3pua1",
      link: "https://adpvn.top/zDUr",
      name: "Áo Thun Tăm Trễ Vai Vạt Xéo",
      cate: "áo",
      id: "MSC025",
    },
    {
      photo:
        "https://down-vn.img.susercontent.com/file/sg-11134201-7rblm-lozr7dv9ns7u7b",
      link: "https://adpvn.top/4y9T",
      name: "Quần jeans loe co giãn",
      cate: "quần",
      id: "MSC026",
    },
    {
      photo:
        "\thttps://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lnsmvmi5tshmc5",
      link: "https://adpvn.top/p8hG",
      name: "Áo Khoác Nỉ Hoodie Croptop ",
      cate: "áo",
      id: "MSC027",
    },
    {
      photo:
        "\thttps://down-vn.img.susercontent.com/file/vn-11134211-7r98o-ln8k6vgbae3c66",
      link: "https://adpvn.top/f5sf",
      name: "Áo khoác gió nam nữ có mũ",
      cate: "áo",
      id: "MSC028",
    },
    {
      photo:
        "https://down-vn.img.susercontent.com/file/sg-11134201-7rbma-lns8zb3tbth1ff",
      link: "https://adpvn.top/TNhR",
      name: "Quần jean thêu ngôi sao xanh ",
      cate: "quần",
      id: "MSC029",
    },
    {
      photo:
        "https://down-vn.img.susercontent.com/file/cn-11134207-7r98o-lqish53bvqyd06",
      link: "https://adpvn.top/WiCT",
      name: "Quần jean nữ ống loe cạp cao",
      cate: "quần",
      id: "MSC030",
    },
    {
      photo:
        "https://down-vn.img.susercontent.com/file/sg-11134201-7rbl1-lloef3p1g26265",
      link: "https://adpvn.top/gT5b",
      name: "Set Đầm Hai Dây Màu Đen Thời Trang",
      cate: "váy",
      id: "MSC031",
    },
    {
      photo:
        "\thttps://down-vn.img.susercontent.com/file/sg-11134201-7rbk8-ll7wde7nme2485",
      link: "https://adpvn.top/AUi5",
      name: "Chân váy y2k Chân Váy denim Xếp Ly",
      cate: "váy",
      id: "MSC032",
    },
    {
      photo:
        "\thttps://down-vn.img.susercontent.com/file/vn-11134207-7r98o-ll5c3291javcaf",
      link: "https://adpvn.top/qkCv",
      name: "Quần jeans nữ ống loe co giãn",
      cate: "quần",
      id: "MSC033",
    },
    {
      photo:
        "\thttps://down-vn.img.susercontent.com/file/cn-11134207-7r98o-lpk7av6lkdwg42",
      link: "https://adpvn.top/wDVT",
      name: "Quần jeans Nữ Lưng Cao Ống Rộng",
      cate: "quần",
      id: "MSC034",
    },
    {
      photo:
        "\thttps://down-vn.img.susercontent.com/file/vn-11134201-7r98o-ln2sx5znyhnca8",
      link: "https://adpvn.top/nWtB",
      name: "Giày Thời Trang Đế Dày Đính Nơ Xinh Xắn",
      cate: "khác",
      id: "MSC035",
    },
    {
      photo:
        "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lmbq7y25uhun17",
      link: "https://adpvn.top/D4ra",
      name: "Quần jeans ống rộng nữ",
      cate: "quần",
      id: "MSC036",
    },
    {
      photo:
        "\t\thttps://down-vn.img.susercontent.com/file/vn-11134207-7r98o-llvnbz7nqv3307",
      link: "https://adpvn.top/D4ra",
      name: "Đầm Dự Tiệc Trễ Vai Xẻ Vạt Dáng Dài",
      cate: "váy",
      id: "MSC037",
    },
    {
      photo:
        "https://down-vn.img.susercontent.com/file/cn-11134207-7r98o-ln829m40i0f125",
      link: "https://adpvn.top/pt3Q",
      name: "Lược Chải Tóc Mát Xa Da Đầu",
      cate: "khác",
      id: "MSC038",
    },
    {
      photo:
        "https://down-vn.img.susercontent.com/file/sg-11134201-7rcde-lt685tauc6lrf4",
      link: "https://adpvn.top/mXAu",
      name: "Áo sơ mi Lovito kiểu",
      cate: "áo",
      id: "MSC039",
    },
    {
      photo:
        "https://down-vn.img.susercontent.com/file/sg-11134201-7rbml-lnv8a39fpghcf5",
      link: "https://adpvn.top/1HSC",
      name: "Áo thun Lovito khóa kéo",
      cate: "áo",
      id: "MSC040",
    },
    {
      photo:
        "https://down-vn.img.susercontent.com/file/sg-11134201-7rcf7-lt69126i7ool20",
      link: "https://adpvn.top/uSGs",
      name: "Mũ lưỡi trai Lovito",
      cate: "khác",
      id: "MSC041",
    },
    {
      photo:
        "https://down-vn.img.susercontent.com/file/83abff87b1c9c58086cd481a60a59cfc",
      link: "https://adpvn.top/SFbc",
      name: "Váy babydoll tay phồng",
      cate: "váy",
      id: "MSC042",
    },
    {
      photo:
        "\thttps://down-vn.img.susercontent.com/file/sg-11134201-7qvey-lhd2s2b91nan30",
      link: "https://adpvn.top/LKVV",
      name: "Kính Mát Mắt Mèo Chống Tia",
      cate: "khác",
      id: "MSC043",
    },
    {
      photo:
        "https://down-vn.img.susercontent.com/file/sg-11134201-23030-qskcrnwyqaov97",
      link: "https://adpvn.top/mHBw",
      name: " Váy tiểu tiên nữ",
      cate: "váy",
      id: "MSC044",
    },
    {
      photo:
        "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lmt1a3vo4qfzdc",
      link: "https://adpvn.top/U2n3",
      name: "Váy trễ vai tay bồng kèm nơ đá",
      cate: "váy",
      id: "MSC045",
    },
    {
      photo:
        "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-ln2vpkour22b90",
      link: "https://adpvn.top/dcQ6",
      name: "Váy hoa nhí 2 dây",
      cate: "váy",
      id: "MSC046",
    },
    {
      photo:
        "https://down-vn.img.susercontent.com/file/dd16e2d4413e3fb6973ad37b89be13d6",
      link: "https://adpvn.top/1PJi",
      name: "Đầm công chúa",
      cate: "váy",
      id: "MSC047",
    },
    {
      photo:
        "\thttps://down-vn.img.susercontent.com/file/sg-11134201-7rcdw-lt69656merkd5a",
      link: "https://adpvn.top/DcU2",
      name: "Áo thun Lovito dây rút",
      cate: "áo",
      id: "MSC048",
    },
    {
      photo:
        "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lgewki08no1697",
      link: "https://adpvn.top/Y6iB",
      name: "Babydoll Thêu Hoa Tay Phồng",
      cate: "váy",
      id: "MSC049",
    },
    {
      photo:
        "https://down-vn.img.susercontent.com/file/14676bcb8740c345ee24a26e84343f41",
      link: "https://adpvn.top/q2hD",
      name: "Váy voan be xếp li ngang ngực",
      cate: "váy",
      id: "MSC050",
    },
    {
      photo:
        "https://down-vn.img.susercontent.com/file/sg-11134201-7qvf2-li3xih5evi8d74",
      link: "https://adpvn.top/EVpY",
      name: "Váy Ngắn Ôm Hông Có Dây",
      cate: "váy",
      id: "MSC051",
    },
    {
      photo:
        "https://down-vn.img.susercontent.com/file/fdbff6c048c4e3b256b87154e4c6f13a",
      link: "https://adpvn.top/gxbc",
      name: "Áo Sơ Mi Dáng Rộng Ngắn Tay",
      cate: "áo",
      id: "MSC052",
    },
    {
      photo:
        "\thttps://down-vn.img.susercontent.com/file/sg-11134201-22100-ua02u1spp5ivfa",
      link: "https://adpvn.top/EVpY",
      name: "Băng Đô Tai Mèo Dễ Thương Phong Cách Lolita Nhật Bản",
      cate: "khác",
      id: "MSC053",
    },
    {
      photo:
        "\thttps://down-vn.img.susercontent.com/file/203c542cf10f80ee927b15d25f6140e3",
      link: "https://adpvn.top/Qh4K",
      name: "Đôi găng tay len dài màu trơn thời trang",
      cate: "khác",
      id: "MSC054",
    },
    {
      photo:
        "\t\thttps://down-vn.img.susercontent.com/file/cn-11134207-7qukw-li1ago8d4hwe4b",
      link: "https://adpvn.top/iYFC",
      name: "Dép Cross dép sandal nữ",
      cate: "khác",
      id: "MSC055",
    },
    {
      photo:
        "https://down-vn.img.susercontent.com/file/sg-11134201-7qvej-ljemtpswjutd66",
      link: "https://adpvn.top/GFw8",
      name: "Bộ Áo Denim Tay Dài Phối Bèo + Chân Váy Denim",
      cate: "áo",
      id: "MSC056",
    },
    {
      photo:
        "https://down-vn.img.susercontent.com/file/cn-11134207-7r98o-lqd4agqtucs58c",
      link: "https://adpvn.top/a3sH",
      name: "Áo thun ZHELIHANGFEI ngắn tay",
      cate: "áo",
      id: "MSC057",
    },
    {
      photo:
        "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-locmfdv5pwvr16",
      link: "https://adpvn.top/yYca",
      name: "Áo thun phông logo tay nam nữ PINK",
      cate: "áo",
      id: "MSC058",
    },
    {
      photo:
        "https://down-vn.img.susercontent.com/file/cn-11134207-7r98o-ls9hleocfefxc2",
      link: "https://adpvn.top/FjkX",
      name: "Áo sơ mi nữ áo kiểu hàn quốc",
      cate: "áo",
      id: "MSC059",
    },
    {
      photo:
        "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-loq9pexcfpqjaf",
      link: "https://adpvn.top/cW9q",
      name: "Áo khoác da croptop basic",
      cate: "áo",
      id: "MSC060",
    },
    {
      photo:
        "https://down-vn.img.susercontent.com/file/10aaf4eb8b00e97b87ef8dd7a0cdcb6c",
      link: "https://adpvn.top/7LE4",
      name: "Quần jeans Nữ Ống Suông Lưng",
      cate: "quần",
      id: "MSC061",
    },
    {
      photo:
        "https://down-vn.img.susercontent.com/file/sg-11134201-7rcd8-lrwsbk9pddgn15.webp",
      link: "https://adpvn.top/LcNm",
      name: "Áo croptop 2 dây Phiên bản Hàn Quốc",
      cate: "áo",
      id: "MSC062",
    },
    {
      photo:
        "https://down-vn.img.susercontent.com/file/cn-11134207-7ras8-m0i7qcnrny6fef.webp",
      link: "https://adpvn.top/Cvbm",
      name: "Áo thun ôm body nữ Hàn Quốc",
      cate: "áo",
      id: "MSC063",
    },
    {
      photo:
        "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m2plw0isp39644.webp",
      link: "https://adpvn.top/pcWB",
      name: "Quần jean nữ ống loe suông Cạp Cao",
      cate: "quần",
      id: "MSC064",
    },
    {
      photo:
        "	https://down-vn.img.susercontent.com/file/sg-11134201-7rdvg-lzjux1tdkz5z36.webp",
      link: "https://adpvn.top/ysr8",
      name: "Giày thể thao cute đế dày",
      cate: "giày",
      id: "MSC065",
    },
    {
      photo:
        "https://down-vn.img.susercontent.com/file/sg-11134201-7rdw1-lyg6ig98hv1w6d.webp",
      link: "https://adpvn.top/9Riy",
      name: "Áo sơ mi dài tay màu xanh lam",
      cate: "áo",
      id: "MSC066",
    },
    {
      photo:
        "	https://down-vn.img.susercontent.com/file/cn-11134207-7r98o-lxurnplmzorne5.webp",
      link: "https://adpvn.top/44EM",
      name: "Áo mùa hè đa năng",
      cate: "áo",
      id: "MSC067",
    },
    {
      photo:
        "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m12beqqaz1970c.webp",
      link: "https://adpvn.top/4aEQ",
      name: "Quần bò ống rộng nữ cạp cao",
      cate: "quần",
      id: "MSC068",
    },
    {
      photo:
        "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lvb8e5zm9qq58f.webp",
      link: "https://adpvn.top/HKHr",
      name: " Áo sơ mi cổ sen hở vai tay ngắn",
      cate: "áo",
      id: "MSC069",
    },
    {
      photo:
        "	https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lt20rq93s24k49.webp",
      link: "https://adpvn.top/yaSa",
      name: "Áo thun croptop phối bèo",
      cate: "áo",
      id: "MSC070",
    },
    {
      photo:
        "https://down-vn.img.susercontent.com/file/sg-11134201-7rd6g-lvr47tfw57qa59.webp",
      link: "https://adpvn.top/5gGk",
      name: "Áo Croptop Tay Ngắn Cổ Tròn",
      cate: "áo",
      id: "MSC071",
    },
    {
      photo:
        "	https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lwzf3m6z01jt3a.webp",
      link: "https://adpvn.top/AxCL",
      name: "Chân váy bèo ren 3 tầng",
      cate: "váy",
      id: "MSC072",
    },
    {
      photo:
        "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m0l9huj6ck9bab.webp",
      link: "https://adpvn.top/pZvM",
      name: "Áo Thun Big Boxy",
      cate: "áo",
      id: "MSC073",
    },
    {
      photo:
        "	https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m1wyxid3ogqn64.webp",
      link: "https://adpvn.top/bK1e",
      name: "Set Áo Khoác Dạ Tweed",
      cate: "áo",
      id: "MSC073",
    },
    {
      photo:
        "	https://down-vn.img.susercontent.com/file/sg-11134201-7rcd1-ltdgnnx9s4678a.webp",
      link: "https://adpvn.top/ZY4J",
      name: "Áo sơ mi nữ áo kiểu hàn quốc",
      cate: "áo",
      id: "MSC074",
    },
    {
      photo:
        "	https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lprgf569hgwi24.webp",
      link: "https://adpvn.top/i1jb",
      name: "Quần Dạ Kẻ Dây Rút Ống Rộng",
      cate: "quần",
      id: "MSC075",
    },
    {
      photo:
        "	https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-ljrwpxu1w3hwa8.webp",
      link: "https://adpvn.top/dFCb",
      name: "Chân Váy KaKi Túi Hộp",
      cate: "váy",
      id: "MSC076",
    },
    {
      photo:
        "		https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lvn9jxehlth559.webp",
      link: "https://adpvn.top/1SaZ",
      name: "Váy đầm tiểu thư đính nơ bánh bèo",
      cate: "váy",
      id: "MSC077",
    },
    {
      photo:
        "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m3dtc2uuw14sfa.webp",
      link: "https://adpvn.top/jwxe",
      name: "Set Đồ Nữ - Áo Nỉ Hoodie Trễ Vai ",
      cate: "áo",
      id: "MSC078",
    },
    {
      photo:
        "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lsldajq1wclgef.webp",
      link: "https://adpvn.top/8igq",
      name: "Chân váy ôm chữ A thun",
      cate: "váy",
      id: "MSC079",
    },
    {
      photo:
        "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lncrmvtkhfui12.webp",
      link: "https://adpvn.top/bK1e",
      name: "Váy xòe 2 tầng đính nơ phong cách",
      cate: "váy",
      id: "MSC080",
    },
    {
      photo:
        "	https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lo84t56q5z7v13.webp",
      link: "https://adpvn.top/NDBq",
      name: "Set áo - chân váy dạ mỏng lông vũ",
      cate: "áo",
      id: "MSC081",
    },
    {
      photo:
        "	https://down-vn.img.susercontent.com/file/sg-11134201-7rdvw-m0sl6m7npjlmb9.webp",
      link: "https://adpvn.top/kkCZ",
      name: "Bông Chụp Tai Giữ Ấm Thu Đông",
      cate: "khác",
      id: "MSC082",
    },
    {
      photo:
        "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lqa1pqzmnpdjbc.webp",
      link: "https://adpvn.top/YTSC",
      name: "Khăn quàng cổ dệt kim ấm áp",
      cate: "khác",
      id: "MSC083",
    },
    {
      photo:
        "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lq7smjn9uss7fe.webp",
      link: "https://adpvn.top/8g95",
      name: "Chân váy dạ ngắn kẻ sọc",
      cate: "váy",
      id: "MSC084",
    },
    {
      photo:
        "	https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m3nekxr27mi024.webp",
      link: "https://adpvn.top/E1pY",
      name: "Áo Croptop Nữ BABY",
      cate: "áo",
      id: "MSC085",
    },
  ];
  var tempt;
  product(data);
  const searchInputs = document.getElementsByClassName("input-search");

  Array.from(searchInputs).forEach(function (inputElement) {
    inputElement.addEventListener("input", function (event) {
      searchProduct(event.target.value, data);
    });
  });
  cateAll.addEventListener("click", () => {
    tempt = data;
    product(tempt);
    reset("cateAll");
  });
  cateShirt.addEventListener("click", () => {
    tempt = data.filter((value) => value.cate === "áo");
    product(tempt);
    reset("cateShirt");
  });
  catePant.addEventListener("click", () => {
    tempt = data.filter((value) => value.cate === "quần");
    product(tempt);
    reset("catePant");
  });
  cateSkirt.addEventListener("click", () => {
    tempt = data.filter((value) => value.cate === "váy");
    cateSkirt.style = "border-bottom: .8px solid #f16974;";
    product(tempt);
    reset("cateSkirt");
  });
  cateOther.addEventListener("click", () => {
    tempt = data.filter((value) => value.cate === "khác");
    cateSkirt.style = "border-bottom: .8px solid #f16974;";
    product(tempt);
    reset("cateOther");
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
function searchProduct(searchQuery, data) {
  searchQuery = searchQuery.toLowerCase();
  const filteredData = data.filter(
    (item) =>
      item.id.toLowerCase().includes(searchQuery) ||
      item.cate.toLowerCase().includes(searchQuery) ||
      item.name.toLowerCase().includes(searchQuery) 
  );

  product(filteredData);
}
