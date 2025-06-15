import { Container, Paper, Typography } from "@mui/material";
import type { ReactNode } from "react";

interface Props {
    children: ReactNode
}

export const LoginContainer = ({ children }: Props) => {
    return (
        <Container>
            <Paper elevation={5}>
                <Typography variant="h3" noWrap sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontWeight: 700,
                    letterSpacing: '.2rem'
                }}>
                    Login
                </Typography>
                <Typography>

                </Typography>
                {children}
            </Paper>
        </Container>
    );
};
