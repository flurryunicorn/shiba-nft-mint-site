// import { ReactComponent as Brand } from "../assets/brand.svg";
// import { ReactComponent as Opensea } from "../assets/opensea.svg";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row  align-items-center ">
                  <div className="col-lg-6 col-12 footer--social-container">

            <div className="social--wrapper">
              <h6 className="text-uppercase mb-4 fw-bold">follow us</h6>
              <div className="d-flex align-items-center">
                <a
                  className="nav-link nav-link_icon"
                  href="https://www.instagram.com/shibasocialclub_nft/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  className="nav-link nav-link_icon"
                  href="https://twitter.com/Shibaclubnft"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  className="nav-link nav-link_icon"
                  href="https://discord.gg/shibasocialclub"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-discord"></i>
                </a>
              </div>
              <a
                className="nav-link nav-link_icon nav-link_icon-fluid mb-5"
                href="https://discord.gg/shibasocialclub"
                target="_blank"
                rel="noreferrer"
              >
                <span className="text-uppercas">join our discord</span>
              </a>
            </div>
          </div>
          <div className="col-lg-6 col-12 footer--brand">
            <div>
              <a href="/#root" className="navbar-brand mb-3 pt-4">
              <svg width="302" height="46" viewBox="0 0 302 46" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M43.7821 30.6621C43.6158 29.3264 42.9318 28.2661 42.0469 27.3102C41.4256 26.6391 40.8608 25.9175 40.296 25.199C39.9006 25.0977 39.4833 24.9742 39.4236 24.9647C38.8086 24.8635 38.2187 24.5944 37.7386 24.1924C37.6602 24.126 37.5786 24.0563 37.4813 24.0215C37.3934 23.9899 37.2962 23.993 37.2146 23.9487C37.0546 23.8633 37.0169 23.6417 36.882 23.5182C36.6372 23.2935 36.2513 23.4929 35.9877 23.6955C35.7963 23.8411 35.6049 23.9899 35.4135 24.1355C35.3381 24.1924 35.2597 24.2589 35.2377 24.3507C35.1938 24.5406 35.3789 24.8191 35.2001 24.8824C35.0808 24.6229 34.6855 24.7274 34.4595 24.9014C34.1144 25.161 33.5966 25.756 33.2075 25.8605C33.082 25.8953 32.2411 25.756 32.5204 25.506C32.5768 25.4554 32.536 25.4174 32.3886 25.3952C32.0026 25.3192 32.4733 24.8666 32.6114 24.7495C32.6961 24.7717 32.9345 24.4551 32.9785 24.3317C32.7023 24.0247 31.6449 25.0249 31.3154 24.7337C31.2213 24.6229 31.7955 24.0848 31.874 24.1703C32.0685 24.126 32.0403 23.8791 32.2254 23.9139C32.4199 23.6449 32.8184 23.781 32.8969 23.4296C33.0538 23.4834 33.9481 23.1606 33.8571 22.977C34.2399 22.8504 34.4941 22.5149 34.0485 22.3819C33.4774 22.1952 33.0036 21.7109 32.3854 21.5273C32.3415 21.3437 32.0089 21.5147 32.1313 21.2868C32.1752 21.2551 32.1532 21.2393 32.0685 21.2393C31.761 21.3216 31.943 21.1317 31.8614 21.0937C31.7422 21.1222 31.397 21.043 31.4629 20.9323C31.4723 20.3435 31.7547 20.6094 32.1658 20.7234C32.263 20.1061 32.1438 20.1441 31.8457 19.7548C31.3468 19.5491 32.3697 19.3117 31.4974 18.704C31.4535 18.2355 31.8551 18.4128 32.056 18.7388C32.8247 19.1851 33.5025 19.758 34.1991 20.2644C34.6855 20.6189 35.5986 21.6761 36.2293 21.6476C36.3987 21.6413 36.9102 21.4229 37.0295 21.2994C37.2899 21.0272 37.8296 20.8246 38.1465 20.5904C38.2375 20.4132 38.5607 20.3594 38.6423 20.3309C38.658 20.0523 38.9843 20.1821 39.1381 20.0555C38.771 18.4697 38.272 16.9156 37.5503 15.428C37.3872 15.0925 37.2397 14.7285 37.0043 14.4499C36.4176 13.7599 36.3328 12.9813 36.3454 12.1077C36.3925 9.08805 35.9187 6.15706 34.6384 3.39383C34.3152 2.69749 33.9481 2.02646 33.4429 1.44723C32.2003 0.0260493 30.5404 -0.325289 28.6576 0.428031C27.3115 0.966117 26.1787 1.83971 25.0993 2.78611C24.6663 3.16594 24.2615 3.57742 23.841 3.97307C23.157 4.61877 22.6769 5.39425 22.4133 6.29633C22.3255 6.59703 22.1937 6.70464 21.8862 6.63501C19.6206 6.11908 17.3206 5.94816 15.0017 6.0083C14.6722 6.01779 14.5404 5.87852 14.4275 5.60631C13.6901 3.78948 12.573 2.26069 11.0386 1.03892C9.28451 -0.360107 7.90072 -0.350611 6.19372 1.10855C2.6605 4.125 1.63442 9.27479 0.671094 13.6238C0.0497977 16.425 -0.154163 19.261 0.115693 22.1192C0.391824 25.0439 1.05705 27.9084 1.58735 30.7919C2.11137 33.6374 2.48478 36.5114 2.26826 39.4076C2.1804 40.5882 2.00155 41.7593 1.75679 42.9178C1.54028 43.9465 1.27356 44.9689 0.92526 45.9596C0.92526 45.9722 0.928398 45.9849 0.928398 46.0007C3.13431 46.0102 5.53477 45.9817 7.93837 45.9849C9.55123 45.9881 11.1672 45.9722 12.7801 45.9659C17.0633 45.9501 21.3464 45.9691 25.6265 45.8994C27.6096 45.8678 29.577 45.5165 31.5445 45.2632C33.5119 45.01 35.3946 44.4719 37.1769 43.5825C40.0324 42.1582 41.8335 39.8381 42.9255 36.8723C43.666 34.856 44.0457 32.8113 43.7821 30.6621ZM29.2852 8.1005C29.7402 7.34085 30.1952 6.57803 30.7067 5.72659C31.5037 7.19525 31.6355 8.6924 31.7076 10.3161C30.8698 9.69577 30.1262 9.14186 29.3794 8.59111C29.1942 8.455 29.1691 8.29358 29.2852 8.1005ZM13.1849 21.4007C13.1943 20.7329 13.5143 21.0336 13.985 21.1633C14.0948 20.4606 13.9599 20.505 13.621 20.065C13.0531 19.8308 14.2141 19.5617 13.2257 18.8717C13.1786 18.34 13.6304 18.5425 13.8595 18.9129C14.7318 19.4193 15.5037 20.0682 16.2945 20.6474C16.8468 21.0525 17.8854 22.249 18.6008 22.2205C18.7954 22.211 19.3759 21.9673 19.5077 21.8249C19.8026 21.5178 20.4176 21.2868 20.7785 21.0209C20.882 20.8183 21.2523 20.7582 21.3402 20.7265C21.359 20.3847 21.7826 20.5841 21.9395 20.3784C22.0995 20.1093 22.6361 20.0492 22.7396 19.8118C23.0974 19.6155 22.8432 20.16 23.066 20.2517C23.1695 20.505 22.8087 20.7234 22.7396 20.9829C22.3945 21.0684 22.3004 21.4039 22.0148 21.3849C21.7826 21.4988 21.723 21.9166 21.3245 21.7869C21.0954 21.9863 21.1017 22.8409 20.7628 22.537C20.7 22.3376 20.4773 22.4832 20.5275 22.6668C20.0976 22.4357 20.0599 23.0435 20.0003 23.2903C20.0097 23.2492 21.1362 24.1006 21.2052 24.1829C21.3778 24.3887 21.6916 24.3918 21.9144 24.5343C22.087 24.6451 22.5608 25.0977 22.7334 25.1768C22.9028 25.2559 23.1131 25.3414 23.1507 25.525C23.1664 25.5978 23.1476 25.6769 23.1727 25.7465C23.2511 25.9871 24.1517 26.4049 24.3274 26.4999C24.2897 26.598 24.1893 26.655 24.0136 26.5822C23.885 26.5284 22.5577 25.889 22.5608 25.8415C22.5577 25.9776 22.3694 26.0061 22.2376 25.9839C21.5378 25.8668 20.8695 25.563 20.3235 25.1072C20.2325 25.0312 20.1415 24.9521 20.0317 24.9141C19.9313 24.8793 19.8214 24.8824 19.7273 24.8318C19.5453 24.7337 19.5045 24.4836 19.3508 24.3412C19.0715 24.0848 18.6353 24.3127 18.3341 24.5438L17.6814 25.0439C17.5967 25.1103 17.5057 25.1831 17.4806 25.2876C17.4335 25.5028 17.6438 25.8194 17.4367 25.8922C17.2986 25.5978 16.853 25.7181 16.5957 25.9111C16.2066 26.2055 15.6167 26.8829 15.1743 27C15.0299 27.038 14.076 26.8829 14.3961 26.598C14.462 26.5379 14.4118 26.4967 14.2455 26.4745C13.8062 26.3859 14.6283 25.7592 14.5906 25.7244C14.5216 25.5598 14.8668 25.4079 14.917 25.2654C14.6032 24.9173 13.4014 26.0504 13.028 25.7244C12.9213 25.5978 13.574 24.9901 13.665 25.0819C13.8878 25.0312 13.8532 24.7527 14.0635 24.7875C14.2863 24.4836 14.7381 24.6387 14.826 24.2367C15.0048 24.2969 16.0184 23.9297 15.9148 23.724C16.351 23.5784 16.6397 23.1986 16.1313 23.0466C15.4818 22.8346 14.9452 22.2838 14.2423 22.0749C14.1953 21.866 13.8156 22.0591 13.9505 21.7995C14.0007 21.7616 13.9756 21.7457 13.8783 21.7457C13.53 21.8407 13.7371 21.6223 13.643 21.5811C13.5049 21.6128 13.1096 21.5242 13.1849 21.4007ZM7.6999 16.3427C6.53575 17.0137 5.56301 16.2256 5.40612 15.1558C5.34023 14.7095 5.32767 14.2537 5.29316 13.801C5.33395 11.7215 5.72618 9.72742 6.65185 7.86311C7.03781 7.0813 7.43632 6.29 8.12978 5.72659C8.90797 5.09355 9.91522 5.198 10.3577 5.96082C11.1641 7.35035 11.9768 8.73671 12.7456 10.1484C13.5426 11.6076 13.0092 13.3927 11.5689 14.1967C10.2792 14.9152 8.977 15.6052 7.6999 16.3427ZM40.98 36.0683C40.0167 38.7397 38.3756 40.7623 35.7586 41.9239C34.4878 42.4873 33.1699 42.8862 31.7986 43.0856C29.759 43.3799 27.7163 43.7313 25.6547 43.7661C21.2962 43.8357 16.9377 43.8199 12.5793 43.8357C11.7728 43.8389 10.9664 43.8294 10.1631 43.8231C9.14017 43.1552 8.76677 42.1202 8.55967 40.9807C8.45612 40.411 8.41219 39.8349 8.35257 39.262C8.14861 37.2553 8.97387 35.6062 10.2102 34.1755C12.3188 31.7383 15.4692 32.4821 18.2274 32.6752C21.2335 32.8841 24.1988 31.8016 26.8063 30.2823C27.6755 29.7759 28.5196 29.2188 29.3825 28.6997C30.1419 28.2439 30.9138 27.8166 31.7296 27.4779C33.3864 26.7942 35.2032 26.503 36.9887 26.6265C39.0283 26.7657 40.3273 27.9052 41.2499 29.7727C42.2289 31.7446 41.6892 34.0995 40.98 36.0683Z" fill="white"></path><path d="M38.6207 21.2703C38.4168 21.4475 38.4262 22.1977 38.1249 21.9318C38.0684 21.7545 37.8739 21.8843 37.9178 22.0457C37.5413 21.8432 37.5068 22.3781 37.4534 22.5933C37.4628 22.5585 38.4513 23.3055 38.514 23.3783C38.6646 23.5587 38.9408 23.5619 39.1385 23.6885C39.2922 23.7866 39.7064 24.1822 39.857 24.255C39.857 24.255 39.8602 24.255 39.8602 24.2582C39.857 24.2329 39.8508 24.2107 39.8476 24.1854C39.7033 23.0839 39.5338 21.9919 39.3142 20.9094C39.2859 20.9158 39.2577 20.9189 39.2232 20.9189C39.0255 21.017 38.9722 21.3842 38.6207 21.2703Z" fill="white"></path><path d="M38.8623 29.0884C37.8927 28.9238 36.9169 28.9808 36.0728 28.9618C34.7486 28.9618 33.5562 28.9365 32.3795 29.2055C32.1975 29.2467 32.0187 29.3005 31.8461 29.367C30.3556 29.9272 29.8912 31.3041 30.7572 32.6493C31.7519 34.1907 33.2299 34.9124 34.9902 35.115C35.3417 35.1561 35.4734 35.2194 35.395 35.6119C35.2538 36.2988 35.1722 36.9983 35.0624 37.6946C34.9714 38.2612 35.1754 38.6252 35.6209 38.6948C36.0602 38.7613 36.3552 38.4764 36.4462 37.8972C36.5686 37.0932 36.7004 36.2924 36.8165 35.4885C36.8572 35.2068 36.9702 35.0928 37.262 35.001C38.9596 34.4788 40.1834 33.4216 40.6195 31.6364C40.927 30.3545 40.1551 29.3068 38.8623 29.0884Z" fill="white"></path><path d="M51.1314 27.8633H55.7817C55.9825 29.2908 56.5913 30.1359 59.2773 30.1359C61.6746 30.1359 62.252 29.1452 62.252 28.2147C62.252 24.6032 51.4515 27.1955 51.4515 20.6688C51.4515 17.4055 53.1553 14.696 58.9604 14.696C64.8533 14.696 66.4975 17.6967 66.5854 20.4061H61.9633C61.7625 19.2698 61.4142 18.4247 58.816 18.4247C56.6509 18.4247 56.1018 19.2413 56.1018 20.2003C56.1018 23.3181 66.7893 20.7827 66.7893 27.9488C66.7893 30.6867 65.2016 33.8614 59.3965 33.8614C53.2683 33.8646 51.1314 31.1868 51.1314 27.8633Z" fill="white"></path><path d="M70.7681 14.9587H75.4467V22.2134H82.033V14.9587H86.7116V33.605H82.033V25.999H75.4467V33.6018H70.7681V14.9587Z" fill="white"></path><path d="M91.2709 14.9587H95.9494V33.605H91.2709V14.9587Z" fill="white"></path><path d="M100.484 14.9587H107.704C113.048 14.9587 115.097 16.9402 115.097 19.735C115.097 21.3366 114.491 23.0838 112.844 23.5808C114.576 24.1632 115.674 26.1161 115.674 27.9203C115.674 30.9494 113.826 33.6018 107.848 33.6018H100.484V14.9587ZM107.732 22.359C110.073 22.359 110.506 21.5424 110.506 20.5232C110.506 19.4755 110.189 18.7443 107.792 18.7443H105.162V22.3558H107.732V22.359ZM107.933 29.8162C110.446 29.8162 110.908 28.854 110.908 27.7462C110.908 26.5814 110.531 25.7363 108.021 25.7363H105.162V29.8162H107.933Z" fill="white"></path><path d="M123.412 14.9587H129.305L135.832 33.605H130.921L129.91 30.4018H122.806L121.796 33.605H116.885L123.412 14.9587ZM128.9 26.9327L126.33 19.0672L123.817 26.9327H128.9Z" fill="white"></path><path d="M137.68 27.3695H139.905C139.961 30.079 141.436 31.7692 145.882 31.7692C150.156 31.7692 151.282 30.1074 151.311 28.4489C151.399 23.3497 138.285 26.8758 138.285 20.0294C138.285 16.5635 140.739 14.7847 145.622 14.7847C150.445 14.7847 153.247 16.6205 153.275 20.8745H151.078C150.934 17.6713 148.913 16.7091 145.534 16.7091C142.327 16.7091 140.479 17.6112 140.479 19.8553C140.479 25.0115 153.532 21.4284 153.532 28.2463C153.532 30.8101 151.857 33.7823 145.936 33.7823C139.845 33.7791 137.68 31.3894 137.68 27.3695Z" fill="white"></path><path d="M156.827 24.2803C156.827 19.1526 158.619 14.7815 165.579 14.7815C172.626 14.7815 174.358 19.1526 174.358 24.3088C174.358 29.4079 172.626 33.7759 165.579 33.7759C158.559 33.7791 156.827 29.4079 156.827 24.2803ZM172.074 24.3088C172.074 20.0547 170.831 16.6775 165.575 16.6775C160.376 16.6775 159.105 20.0579 159.105 24.2803C159.105 28.5027 160.376 31.8831 165.575 31.8831C170.834 31.8863 172.074 28.5058 172.074 24.3088Z" fill="white"></path><path d="M177.647 24.2803C177.647 19.1526 179.379 14.7815 186.138 14.7815C192.059 14.7815 194.397 18.2474 194.397 22.1818H192.087C191.999 19.1527 190.327 16.6743 186.138 16.6743C181.111 16.6743 179.928 20.0547 179.928 24.2771C179.928 28.4995 181.111 31.88 186.138 31.88C190.355 31.88 191.999 29.4902 192.144 26.344H194.397C194.397 30.4809 192.087 33.7728 186.138 33.7728C179.351 33.7791 177.647 29.4079 177.647 24.2803Z" fill="white"></path><path d="M198.121 14.9587H200.374V33.605H198.121V14.9587Z" fill="white"></path><path d="M210.513 14.9587H213.487L220.94 33.605H218.599L217.039 29.6421H206.901L205.313 33.605H202.916L210.513 14.9587ZM216.402 27.895L211.984 16.6774L207.538 27.895H216.402Z" fill="white"></path><path d="M223.563 14.9587H225.816V31.7407H233.585V33.605H223.563V14.9587Z" fill="white"></path><path d="M234.768 24.2803C234.768 19.1526 236.5 14.7815 243.259 14.7815C249.18 14.7815 251.518 18.2474 251.518 22.1818H249.209C249.121 19.1527 247.448 16.6743 243.259 16.6743C238.232 16.6743 237.049 20.0547 237.049 24.2771C237.049 28.4995 238.232 31.88 243.259 31.88C247.477 31.88 249.121 29.4902 249.265 26.344H251.518C251.518 30.4809 249.209 33.7728 243.259 33.7728C236.472 33.7791 234.768 29.4079 234.768 24.2803Z" fill="white"></path><path d="M255.331 14.9587H257.584V31.7407H265.353V33.605H255.331V14.9587Z" fill="white"></path><path d="M267.546 25.1539V14.9587H269.799V25.0969C269.799 29.6706 271.243 31.8546 275.46 31.8546C279.677 31.8546 281.092 29.6991 281.092 25.1539V14.9587H283.345V25.1539C283.345 31.2722 280.948 33.7759 275.46 33.7759C269.944 33.7791 267.546 31.2722 267.546 25.1539Z" fill="white"></path><path d="M287.503 14.9587H294.956C299.606 14.9587 301.426 16.9402 301.426 19.7066C301.426 21.3683 300.877 23.3465 298.768 23.815C301.021 24.3689 302.003 26.4358 302.003 28.3318C302.003 31.1583 300.56 33.605 294.984 33.605H287.503V14.9587ZM295.445 23.2041C298.708 23.2041 299.198 21.5424 299.198 20.1434C299.198 18.1904 298.388 16.823 295.009 16.823H289.753V23.2041H295.445ZM295.068 31.7407C299.054 31.7407 299.719 30.2245 299.719 28.3318C299.719 26.613 298.997 24.983 295.589 24.983H289.756V31.7407H295.068Z" fill="white"></path></svg>
              </a>
              <h6>© 2021 Shiba Social Club. All rights reserved</h6>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

