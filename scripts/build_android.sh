#!/usr/bin/env bash

cd android
./gradlew assembleDebug
cd app/build/outputs/apk
adb install app-debug.apk
react-native start
adb reverse tcp:8081 tcp:8081
