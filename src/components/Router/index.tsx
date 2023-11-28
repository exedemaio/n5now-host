import * as Styled from "./styles";
import React from "react";
import { Route, Routes } from "react-router-dom";

const Serie = React.lazy(() => import("n5nowSerie/Serie"));
const Movie = React.lazy(() => import("n5nowMovie/Movie"));

const ButtonGroup = () => {
  return (
    <Styled.ContainerRouter>
      <React.Suspense fallback={<span>Cargando...</span>}>
        <Routes>
          <Route
            path="/serie"
            element={
              <Styled.ContainerRoute>
                <Serie />
              </Styled.ContainerRoute>
            }
          />

          <Route
            path="/movie"
            element={
              <Styled.ContainerRoute>
                <Movie />
              </Styled.ContainerRoute>
            }
          />
        </Routes>
      </React.Suspense>
    </Styled.ContainerRouter>
  );
};

export default ButtonGroup;
