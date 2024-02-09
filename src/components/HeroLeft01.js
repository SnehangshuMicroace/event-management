/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from "react";
import Button from "@mui/joy/Button";
import Link from "@mui/joy/Link";
import Typography from "@mui/joy/Typography";
import ArrowForward from "@mui/icons-material/ArrowForward";
import TwoSidedLayout from "../components/TwoSidedLayout";

export default function HeroLeft01() {
  return (
    <TwoSidedLayout>
      <Typography color="primary" fontSize="lg" fontWeight="lg">
        Collect Event Tickets:
      </Typography>
      <Typography
        level="h1"
        fontWeight="xl"
        fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)"
      >
        "Secure Your Spot: Reserve Tickets Now with Ease!"
      </Typography>
      <Typography fontSize="lg" textColor="text.secondary" lineHeight="lg">
        Reserve your tickets now to secure your spot at the event.
      </Typography>
      <Button size="lg" endDecorator={<ArrowForward fontSize="xl" />}>
        Reserve Tickets
      </Button>
      <Typography>
        Ready to streamline your events?{" "}
        <Link fontWeight="lg">Sign up now</Link>.
      </Typography>
      <Typography
        level="body-xs"
        sx={{
          position: "absolute",
          top: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        Event
      </Typography>
    </TwoSidedLayout>
  );
}
