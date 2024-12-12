"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState, useEffect } from "react";
import axios from "axios";
import { AxiosResponse } from "axios";

type Team = {
  player: string;
  played: number;
  wins: number;
  draws: number;
  losses: number;
  points: number;
  goals: number;
  gd: number;
  ga: number;
  form: string;
};

type Groups = {
  [key: string]: Team[];
};

export function PointsTable() {
  const [groups, setGroups] = useState<Groups>({});
  const [selectedGroup, setSelectedGroup] = useState<string>("GroupA");
  const [loading, setLoading] = useState<boolean>(true);

  const handleGroupChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedGroup(e.target.value);
  };

  useEffect(() => {
    const fetchSheetData = async () => {
      try {
        const sheetId = "1E0LkDApAisf15KY-VCue9wU_t1Mag18vAzgArSVTmR8"; // Replace with your Google Sheet ID
        const apiKey = "AIzaSyCac6f-HBu5vRsaTjyqHSVjQwUpDDj52yc"; // Replace with your API Key
        const ranges = ["B4:K8", "B12:K16", "B20:K24", "B28:K32"];

        const requests = ranges.map((range) =>
          axios.get(
            `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}`
          )
        );

        const responses = await Promise.all(requests);
        const parsedGroups: Groups = {};

        responses.forEach((response: AxiosResponse, index) => {
          const groupName = `Group${String.fromCharCode(65 + index)}`;
          const rows = response.data.values; // Skip the header row

          parsedGroups[groupName] = rows.map((row: string[]) => ({
            player: row[0],
            played: Number(row[1]),
            wins: Number(row[2]),
            draws: Number(row[3]),
            losses: Number(row[4]),
            points: Number(row[5]),
            goals: Number(row[6]),
            gd: Number(row[7]),
            ga: Number(row[8]),
            form: row[9],
          }));
        });

        console.log("Fetched Groups:", parsedGroups); // Debugging
        setGroups(parsedGroups);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data from Google Sheets:", error);
        setLoading(false);
      }
    };

    fetchSheetData();
  }, []);

  if (loading) return <p>Loading...</p>;

  const teams = groups[selectedGroup] || [];

  return (
    <div>
      <div className="mb-4">
        <label htmlFor="group" className="mr-2 font-medium">
          Select Group:
        </label>
        <select
          id="group"
          value={selectedGroup}
          onChange={handleGroupChange}
          className="border rounded px-2 py-1"
        >
          {Object.keys(groups).map((group) => (
            <option key={group} value={group}>
              {group}
            </option>
          ))}
        </select>
      </div>

      <Table>
        <TableCaption>{selectedGroup} Points Table</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[150px]">Player</TableHead>
            <TableHead>Played</TableHead>
            <TableHead>W</TableHead>
            <TableHead>D</TableHead>
            <TableHead>L</TableHead>
            <TableHead>Points</TableHead>
            <TableHead>Goals</TableHead>
            <TableHead>GD</TableHead>
            <TableHead>GA</TableHead>
            <TableHead>Form</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {teams.map((team, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{team.player}</TableCell>
              <TableCell>{team.played}</TableCell>
              <TableCell>{team.wins}</TableCell>
              <TableCell>{team.draws}</TableCell>
              <TableCell>{team.losses}</TableCell>
              <TableCell>{team.points}</TableCell>
              <TableCell>{team.goals}</TableCell>
              <TableCell>{team.gd}</TableCell>
              <TableCell>{team.ga}</TableCell>
              <TableCell>{team.form}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={9} className="font-medium">
              Total Players
            </TableCell>
            <TableCell>{teams.length}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}
