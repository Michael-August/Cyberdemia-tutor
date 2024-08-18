"use client";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { GoArrowRight } from "react-icons/go";

type ReviewCardProps = {
  name: string;
  daysAgo: number;
  comment: string;
  id: number;
};

const QaCard: React.FC<ReviewCardProps> = ({ name, daysAgo, comment, id }) => {
  const [expanded, setExpanded] = useState(false);
  const router = useRouter();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const shortComment = comment.slice(0, 220);
  return (
    <Card sx={{ maxWidth: "100%", marginBottom: 2 }}>
      <CardHeader
        avatar={<Avatar sx={{ bgcolor: grey[800] }}>{name.charAt(0)}</Avatar>}
        title={name}
        subheader={
          <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
            {daysAgo} days ago
          </Box>
        }
      />
      <CardContent>
        <div className="flex flex-col md:flex-row justify-between items-start flex-nowrap gap-5">
          <div>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                textAlign: "justify",
              }}
            >
              {expanded ? comment : `${shortComment}...`}
            </Typography>
            <Button
              onClick={handleExpandClick}
              size="small"
              sx={{ marginTop: 1 }}
            >
              {expanded ? "See less" : "See more"}
            </Button>
          </div>
          <div className="flex justify-end cursor-pointer">
            <Button
              sx={{
                backgroundColor: "#fff",
                color: "#AC1D7E",
                width: "100px",
                paddingY: "8px",
                display: "flex",
                border: "1px solid #AC1D7E",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                fontSize: "13px",
                gap: "8px",
                "&:hover": {
                  backgroundColor: "#AC1D7E",
                  color: "#fff",
                },
              }}
              onClick={() =>
                router.push(`/tutor/communication/Q&AForums/${id}`)
              }
            >
              View
              <GoArrowRight size={19} />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default QaCard;
