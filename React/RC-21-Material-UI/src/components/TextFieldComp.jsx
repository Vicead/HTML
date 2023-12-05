import {
  Box,
  Container,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const TextFieldComp = () => {
  const currencies = [
    {
      value: "USD",
      label: "$",
    },
    {
      value: "EUR",
      label: "€",
    },
    {
      value: "BTC",
      label: "฿",
    },
    {
      value: "JPY",
      label: "¥",
    },
  ];
  let error1 = false;
  const [show, setShow] = useState(true);
  return (
    <div>
      <Container sx={{ marginTop: 4 }}>
        <Typography variant="h4" align="center" color="error">
          TEXT-FIELD (input){" "}
        </Typography>
        <Box sx={{ mt: 4 }}>
          <TextField
            id="outlined-basic"
            label="E-Mail"
            variant="outlined"
            margin="dense"
          />
          <TextField
            id="filled-basic"
            label="Password"
            variant="filled"
            margin="dense"
            type="password"
          />
          <TextField
            error
            id="outlined-error-helper-text"
            label="Error"
            defaultValue="Hello World"
            helperText="Incorrect entry."
          />
          <TextField
            sx={{ mt: 4, mb: 4 }}
            fullWidth
            error={error1}
            id="password"
            placeholder="password giriniz"
            helperText={error1 && "yanlış girdiniz"}
            type="password"
          />
          <TextField
            id="outlined-select-currency"
            select
            label="Select"
            defaultValue="EUR"
            helperText="Please select your currency"
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              type={show ? "password" : "text"}
              id="outlined-adornment-password"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    edge="end"
                    onClick={() => setShow(!show)}
                  >
                    {show ? <VisibilityIcon /> : <VisibilityOffIcon />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <Button fullWidth variant="contained" color="error">
            SUBMIT
            <Avatar
              sx={{ margin: 4 }}
              alt="Remy Sharp"
              src="https://media.istockphoto.com/id/1278564529/tr/foto%C4%9Fraf/mavi-renk-arka-plan-izole-ye%C5%9Fil-g%C3%B6mlek-giyen-esmer-k%C4%B1sa-sa%C3%A7l%C4%B1-sevimli-g%C3%BCl%C3%BCmseyen-g%C3%BCzel-k%C4%B1z.jpg?s=612x612&w=0&k=20&c=qMtjAb1sXxeqOgUHYjWskspY58UyahQsyeu7ZPVgtUQ="
            />
          </Button>
        </Box>
      </Container>
    </div>
  );
};

export default TextFieldComp;
