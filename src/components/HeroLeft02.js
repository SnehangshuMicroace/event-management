/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from "react";
import Button from "@mui/joy/Button";
import Link from "@mui/joy/Link";
import Typography from "@mui/joy/Typography";
import ArrowForward from "@mui/icons-material/ArrowForward";
import TwoSidedLayout from "./TwoSidedLayout";

export default function HeroLeft02() {
  return (
    <div>
      <div className="lg:w-2/3 mx-auto flex flex-col gap-2">
        <Typography color="primary" fontSize="lg" fontWeight="lg">
          "Ready to simplify ticket management? Start collecting tickets
          effortlessly today!"
        </Typography>
        <Typography
          level="h1"
          fontWeight="xl"
          fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 2rem)"
        >
          Streamline Your Events with Our Comprehensive Management System
        </Typography>
        <Typography fontSize="lg" textColor="text.secondary" lineHeight="lg">
          Please adjust the wording as needed to align with your application's
          tone and purpose.
        </Typography>
        <Button size="lg" endDecorator={<ArrowForward fontSize="xl" />}>
          Get Started
        </Button>
        <Typography>
          Ready to take control of your events?{" "}
          <Link fontWeight="lg">Sign up now</Link>.
        </Typography>
      </div>
    </div>
  );
}
