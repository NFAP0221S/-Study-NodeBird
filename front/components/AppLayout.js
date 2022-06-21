import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import Link from "next/link"; // 링크 컴포넌트
import { Menu, Input, Row, Col } from "antd";
import { createGlobalStyle } from "styled-components";

import styled from "styled-components";
import UserProfile from "../components/UserProfile";
import LoginForm from "../components/LoginForm";

const Global = createGlobalStyle`
.ant-row {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }
  
  .ant-col:first-child {
      padding-left: 0 !important;
  }
  
  .ant-col:last-child {
    padding-right: 0 !important;
  }
`;

const SearchInput = styled(Input.Search)`
  vertical-align: "middle";
`;

const AppLayout = ({ children }) => {
  const { isLoggedIn } = useSelector((state) => state.user);

  return (
    <div>
      <Global />
      <Menu
        mode="horizontal"
        items={[
          {
            label: (
              <Link href="/">
                <a>노드버드</a>
              </Link>
            ),
            key: "/",
          },
          {
            label: (
              <Link href="/profile">
                <a> 프로필</a>
              </Link>
            ),
            key: "/profile",
          },
          { label: <SearchInput enterButton />, key: "/search" },
          {
            label: (
              <Link href="/signup">
                <a>회원가입</a>
              </Link>
            ),
            key: "/signup",
          },
        ]}
      />

      <Row gutter={8}>
        <Col xs={24} md={6}>
          {isLoggedIn && <UserProfile />}
          {!isLoggedIn && <LoginForm />}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <a
            href="https://github.com/katf101"
            target="_blacnk"
            rel="noreferrer noopener"
          >
            My github
          </a>
        </Col>
      </Row>
    </div>
  );
};

// {isLoggedIn && <UserProfile setIsLoggedIn={setIsLoggedIn} />}
// {!isLoggedIn && <LoginForm setIsLoggedIn={setIsLoggedIn} />}

// {isLoggedIn ? (
//     <UserProfile />
//   ) : (
//     <LoginForm setIsLoggedIn={setIsLoggedIn} />
//   )}

// 전달받은 데이터의 유효성을 검증
AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
