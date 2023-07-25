import React, { useEffect, useState, ChangeEvent } from "react";
import { useAppDispatch, useAppSelector } from "reduxx";
import { updateMemo } from "reduxx/commonReducer";
import { getListUser } from "services/api/withdraw";
import { UserType } from "services/api/withdraw/type";

type UserState = {
  loading: boolean;
  users: UserType[];
};

export default function Home() {
  const dispatch = useAppDispatch();
  const memo = useAppSelector((s) => s.common.memo);
  const [usersState, setUsersState] = useState<UserState>({
    loading: true,
    users: [],
  });
  const [pageControl, setPageControl] = useState({ page: 1, totalPages: 1 });

  useEffect(() => {
    setUsersState({ loading: true, users: [] });
    getListUser({ page: pageControl.page })
      .then((res) => {
        setUsersState({ loading: false, users: res.data.data });
        setPageControl((p) => ({ ...p, totalPages: res.data.total_pages }));
      })
      .catch(() => {
        setUsersState({ loading: false, users: [] });
      });
  }, [pageControl.page]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(updateMemo(event.target.value));
  };

  return (
    <header className="App-header">
      <input value={memo.value} onChange={handleChange} />
      <button type="button" onClick={() => window.location.reload()}>
        reload page
      </button>
      <div style={{ paddingTop: 50 }}>
        {usersState.loading ? (
          <span>loading...</span>
        ) : (
          <div>
            {usersState.users.map((user) => (
              <div
                key={user.id}
                style={{
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                  gap: 10,
                  paddingBottom: 10,
                }}
              >
                <img
                  src={user.avatar}
                  alt={user.email}
                  style={{ borderRadius: "50%", width: 60, height: 60 }}
                />
                <span>{`${user.first_name} ${user.last_name}`}</span>
              </div>
            ))}
          </div>
        )}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          gap: 100,
          paddingTop: 10,
        }}
      >
        <button
          type="button"
          disabled={pageControl.page === 1}
          onClick={() => setPageControl((p) => ({ ...p, page: p.page - 1 }))}
        >
          {"<< Prev"}
        </button>
        <button
          type="button"
          disabled={pageControl.page === pageControl.totalPages}
          onClick={() => setPageControl((p) => ({ ...p, page: p.page + 1 }))}
        >
          {"Next >>"}
        </button>
      </div>
    </header>
  );
}
