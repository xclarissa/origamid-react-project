import React from "react";
import { Routes, Route } from 'react-router-dom'
import UserHeader from "./UserHeader";
import Feed from "../Feed/Feed";
import UserPhotoPost from "./UserPhotoPost";
import UserStats from "./UserStats";
import { UserContext } from "../../contexts/UserContext";
import NotFound from "../NotFound";
import Head from "../Helper/Head";

function User() {
  const { data } = React.useContext(UserContext)
  console.log('data ussercontext ', data)
  return (
    <section className="container">
      <Head title="Minha Conta" />
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={data.id} />} />
        <Route path="post" element={<UserPhotoPost />} />
        <Route path="stats" element={<UserStats />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  );
}

export default User;
