import React from "react";
import IconButton from "@mui/material/IconButton";
import { IMaskInput } from "react-imask";

const Loged = ({
  handleMenu,
  ModalUser,
  AccountCircle,
  Menu,
  StyleModalUserInfo,
  anchorEl,
  handleCloseAnchor,
  personalModal,
  PersonalInfo,
  setPersonalModal,
  MyDetails,
  userInfo,
  MyAddresses,
  HistoryOfOrders,
}) => {
  return (
    <>
      <div>
        {/* //! ICON USER */}
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleMenu}
          color="inherit"
          sx={ModalUser}
        >
          <AccountCircle />
        </IconButton>
        <Menu
          sx={StyleModalUserInfo}
          id="menu-appbar"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleCloseAnchor}
        >
          {/* //!========================================ImportUserModal===== */}

          {personalModal === "PersonalInfo" && (
            <div>
              <PersonalInfo
                setPersonalModal={setPersonalModal}
                userInfo={userInfo}
              />
            </div>
          )}
          {personalModal === "MyDetails" && (
            <div>
              <MyDetails
                setPersonalModal={setPersonalModal}
                IMaskInput={IMaskInput}
                userInfo={userInfo}
              />
            </div>
          )}
          {personalModal === "MyAddresses" && (
            <div>
              <MyAddresses setPersonalModal={setPersonalModal} />
            </div>
          )}
          {personalModal === "HistoryOfOrders" && (
            <div>
              <HistoryOfOrders setPersonalModal={setPersonalModal} />
            </div>
          )}
        </Menu>
      </div>
    </>
  );
};

export default Loged;
