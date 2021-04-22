import React, { useState } from "react";
import { BarCodeScanner, Constants } from "expo-barcode-scanner";
import {
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import ScannerView from "./ScannerView";

const Scanner = () => {
  const [scanned, setScanned] = useState(null);
  const [hasPermission, setHasPermission] = useState(null);

  const startScan = () => {
    setScanned(false);

    if (!hasPermission) {
      (async () => {
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status === "granted");
      })();
    }
  };

  const handleCodeScanned = ({ data }) => {
    setScanned(true);
    alert(`Scanned QR code with data: "${data}"`);
  };
  return (
    <SafeAreaView style={styles.container}>
      {!scanned && hasPermission && (
        <View style={{ flex: 1 }}>
          <BarCodeScanner
            style={StyleSheet.absoluteFillObject}
            onBarCodeScanned={handleCodeScanned}
            barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
          />
          <View style={styles.helpTextWrapper}>
            <Text style={styles.helpText}>Find QR Code to scan</Text>
          </View>
        </View>
      )}
      <View style={styles.content}>
        {scanned !== null && hasPermission === null && (
          <Text style={styles.helpText}>Requesting for camera permission</Text>
        )}

        {scanned !== null && hasPermission === false && (
          <Text style={styles.helpText}>No access to camera</Text>
        )}

        {scanned === false && hasPermission && (
          <ScannerView scanned={scanned} />
        )}

        {scanned !== false && (
          <TouchableOpacity style={styles.button} onPress={startScan}>
            <Text style={styles.buttonText}>
              {scanned === null ? "Scan now" : "Scan again"}
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
  },
  helpTextWrapper: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 15,
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.6)",
  },
  helpText: {
    color: "#fff",
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    backgroundColor: "#303940",
  },
  buttonText: {
    color: "#fff",
  },
});

export default Scanner;
