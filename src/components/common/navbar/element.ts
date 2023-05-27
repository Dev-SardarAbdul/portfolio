import styled from "styled-components";
import { motion } from "framer-motion";

export const NavbarWrapper = styled(motion.div)`
  position: relative;
  .img-fluid {
    height: 60px;
  }

  .bg-light {
    background: #000 !important;
    border-bottom: 2px solid #66fcf1;
    padding-top: 10px;
    padding-bottom: 10px;

    @media (max-width: 991.98px) {
      padding-bottom: 20px;
    }
  }

  a.nav-link {
    color: #fff;
    font-weight: 600;
    font-size: 18px;
    border-bottom: 2px solid transparent;
    transition: 0.3s ease-in-out all;
    margin-left: 1rem;

    @media (max-width: 991.98px) {
      text-align: center;
      border-bottom: none;
      margin-left: 0rem;

      &:hover {
        border-bottom: none;
      }
    }
  }

  .navbar-nav .nav-link.active,
  .navbar-nav .show > .nav-link {
    color: #fff;
    border: none !important;
  }
  .navbar-toggler-icon {
    background-image: url("data:image/svg+xml;..") !important;
  }

  .searchIcon {
    color: #fff;
    margin-left: 20px;
    font-size: 22px;
    cursor: pointer;
    @media (max-width: 991.98px) {
      display: none;
    }
  }

  .humbargurIcon {
    color: #fff !important;
  }
`;

export const NavbarButton = styled.button`
  border: 2px solid #66fcf1;
  padding: 10px 20px;
  background-color: #000;
  color: #fff;
  font-weight: 500;
  font-size: 18px;

  @media (max-width: 991.98px) {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const MainDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 2rem;
  margin-right: 2rem;
  cursor: pointer;
`;

export const IconHolderDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  border-radius: 100px;
  background-color: #66fcf1;
  position: fixed;
  top: 40px;
  right: 80px;
  z-index: 20;

  @media (max-width: 991.98px) {
    top: 20px;
    right: 20px;
  }

  .icon {
    font-size: 32px;
    color: #fff;
  }
`;

export const CollapsedNav = styled.div`
  position: fixed;
  top: 0px;
  right: 0px;
  width: 450px;
  height: 450px;
  background-color: #66fcf1;
  border-radius: 0%;
  border-bottom-left-radius: 100%;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  @media (max-width: 991.98px) {
    height: 300px;
    width: 300px;
  }
`;

export const NavLink = styled.h4`
  font-family: "Teko" !important;
  font-size: 32px;
  font-weight: 400;
  color: #000;
  letter-spacing: 1px;

  @media (max-width: 991.98px) {
    font-size: 24px;
    margin-left: 2rem;
  }
`;
