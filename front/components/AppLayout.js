import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import { Col, Input, Menu, Row } from "antd";
import { useSelector } from "react-redux";
import styled from "styled-components";

import useInput from "../hooks/useInput";
import LoginForm from "./LoginForm";
import UserProfile from "./UserProfile";

const SearchInput = styled(Input.Search)`
  vertical-align: middle;
`;

const AppLayout = ({ children }) => {
  const [searchInput, onChangeSearchInput] = useInput("");
  const { me } = useSelector((state) => state.user);
  return (
    <div>
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
                <a>프로필</a>
              </Link>
            ),
            key: "/profile",
          },
          {
            label: (
              <SearchInput
                enterButton
                value={searchInput}
                onChange={onChangeSearchInput}
              />
            ),
            key: "/search",
          },
        ]}
      />
      <Row gutter={8}>
        <Col xs={24} md={6}>
          {me ? <UserProfile /> : <LoginForm />}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <a
            href="https://www.zerocho.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            Made by ZeroCho
          </a>
        </Col>
      </Row>
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
