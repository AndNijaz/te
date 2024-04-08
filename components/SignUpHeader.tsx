import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import React, { PropsWithChildren } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";

export default function SignUpHeader({
  children,
  hasBack,
  path,
}: {
  children: string;
  hasBack?: boolean;
  path?: string;
}) {
  return (
    <LinearGradient
      colors={["#D61D23", "#EB7C83"]}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      style={styles.headerContainer}
    >
      {hasBack && (
        <Link
          style={styles.linkText}
          href={!!path ? path : "@/app/(auth)/sign-in"}
        >
          Back
        </Link>
      )}
      <Text style={styles.headerText}>{children}</Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    borderBottomRightRadius: 90,
    borderBottomLeftRadius: 90,
    padding: 24,
    alignItems: "center",
    justifyContent: "flex-end",
    height: 250,
  },
  linkText: {
    position: "absolute",
    top: 10,
    left: 10,
    color: "white",
    fontSize: 16,
  },
  headerText: {
    color: "white",
    fontSize: 44,
    marginBottom: 12,
  },
});