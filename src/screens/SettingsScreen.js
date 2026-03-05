import * as React from "react";
import {StyleSheet, View, Text, Image} from "react-native";

const SettingsScreen = () => {
  	
  	return (
    		<View style={styles.androidCompact6}>
      			<View style={styles.navigationBarVerticalItems}>
        				<View style={styles.navItem01}>
          					<View style={[styles.iconContainer, styles.iconContainerFlexBox]}>
            						<View style={styles.stateFlexBox}>
              							<Image style={[styles.icon, styles.iconLayout1]} resizeMode="cover" />
              							<Image style={styles.iconLayout} resizeMode="cover" />
            						</View>
          					</View>
          					<Text style={[styles.labelText, styles.labelTypo]}>Сегодня</Text>
        				</View>
        				<View style={styles.navItem01}>
          					<View style={[styles.iconContainer2, styles.iconContainerFlexBox]}>
            						<View style={[styles.stateLayer2, styles.stateFlexBox]}>
              							<View style={[styles.icon3, styles.iconLayout]} />
              							<Image style={styles.iconLayout1} resizeMode="cover" />
            						</View>
          					</View>
          					<Text style={[styles.labelText, styles.labelTypo]}>Задачи</Text>
        				</View>
        				<View style={styles.navItem01}>
          					<View style={[styles.iconContainer2, styles.iconContainerFlexBox]}>
            						<View style={[styles.stateLayer2, styles.stateFlexBox]}>
              							<Image style={[styles.icon5, styles.iconLayout]} resizeMode="cover" />
              							<Image style={styles.iconLayout1} resizeMode="cover" />
            						</View>
          					</View>
          					<Text style={[styles.labelText, styles.labelTypo]}>Помощник</Text>
        				</View>
        				<View style={styles.navItem01}>
          					<View style={[styles.iconContainer2, styles.iconContainerFlexBox]}>
            						<View style={[styles.stateLayer2, styles.stateFlexBox]}>
              							<Image style={[styles.icon5, styles.iconLayout]} resizeMode="cover" />
              							<Image style={styles.iconLayout1} resizeMode="cover" />
            						</View>
          					</View>
          					<Text style={[styles.labelText, styles.labelTypo]}>Аналитика</Text>
        				</View>
        				<View style={styles.navItem01}>
          					<View style={[styles.iconContainer2, styles.iconContainerFlexBox]}>
            						<View style={[styles.stateLayer2, styles.stateFlexBox]}>
              							<Image style={[styles.icon5, styles.iconLayout]} resizeMode="cover" />
              							<Image style={styles.iconLayout1} resizeMode="cover" />
            						</View>
          					</View>
          					<Text style={[styles.labelText5, styles.labelTypo]}>Настройки</Text>
        				</View>
      			</View>
      			<Text style={styles.text}>Настройки</Text>
      			<Text style={[styles.text2, styles.textTypo5]}>Профиль</Text>
      			<Text style={[styles.text3, styles.textTypo5]}>Внешний вид</Text>
      			<Text style={[styles.text4, styles.textTypo5]}>Уведомления</Text>
      			<View style={styles.androidCompact6Child} />
      			<View style={styles.genericAvatar}>
        				<Image style={styles.avatarPlaceholderIcon} resizeMode="cover" />
      			</View>
      			<Text style={[styles.text5, styles.textClr]}>Александр Петров</Text>
      			<Text style={[styles.alexemailcom, styles.textTypo6]}>alex@email.com</Text>
      			<Text style={[styles.text6, styles.textTypo6]}>{`Редактировать профиль >`}</Text>
      			<Text style={[styles.text7, styles.textTypo3]}>Тема приложения</Text>
      			<Text style={[styles.text8, styles.textTypo3]}>Размер текста</Text>
      			<View style={[styles.rectangleParent, styles.groupLayout]}>
        				<View style={[styles.groupChild, styles.groupLayout]} />
        				<Text style={[styles.text9, styles.textTypo2]}>Светлая</Text>
      			</View>
      			<View style={[styles.rectangleGroup, styles.groupLayout]}>
        				<View style={[styles.groupChild, styles.groupLayout]} />
        				<Text style={[styles.text10, styles.textTypo1]}>Темная</Text>
      			</View>
      			<Text style={[styles.push, styles.textTypo3]}>Push-уведомления</Text>
      			<Text style={[styles.text11, styles.textTypo3]}>Время тишины</Text>
      			<View style={[styles.rectangleContainer, styles.groupViewPosition]}>
        				<View style={[styles.groupChild, styles.groupLayout]} />
        				<Text style={[styles.text12, styles.textTypo2]}>Включить</Text>
      			</View>
      			<View style={[styles.groupView, styles.groupViewPosition]}>
        				<View style={[styles.groupChild, styles.groupLayout]} />
        				<Text style={[styles.text13, styles.textTypo1]}>Выключить</Text>
      			</View>
      			<View style={[styles.androidCompact6Item, styles.androidPosition]} />
      			<View style={[styles.androidCompact6Inner, styles.androidPosition]} />
      			<Text style={[styles.text14, styles.textTypo]}>Мелкий</Text>
      			<Text style={[styles.text15, styles.textTypo]}>Крупный</Text>
      			<Image style={[styles.ellipseIcon, styles.text17Layout]} resizeMode="cover" />
      			<Text style={[styles.text16, styles.textTypo4]}>22:00 - 8:00</Text>
      			<Text style={[styles.text17, styles.text17Layout]}>[Изменить]</Text>
    		</View>);
};

const styles = StyleSheet.create({
  	iconContainerFlexBox: {
    		borderRadius: 16,
    		alignItems: "center",
    		justifyContent: "center",
    		overflow: "hidden"
  	},
  	iconLayout1: {
    		zIndex: 0,
    		width: 24,
    		height: 24
  	},
  	labelTypo: {
    		textAlign: "center",
    		fontFamily: "Roboto-Medium",
    		fontWeight: "500",
    		lineHeight: 16,
    		letterSpacing: 0.5,
    		fontSize: 12,
    		alignSelf: "stretch"
  	},
  	stateFlexBox: {
    		height: 32,
    		width: 56,
    		alignItems: "center",
    		justifyContent: "center",
    		flexDirection: "row"
  	},
  	iconLayout: {
    		zIndex: 1,
    		width: 24,
    		height: 24
  	},
  	textTypo5: {
    		height: 29,
    		width: 111,
    		fontFamily: "Inter-SemiBold",
    		fontWeight: "600",
    		letterSpacing: 0.1,
    		fontSize: 14,
    		display: "flex",
    		lineHeight: 20,
    		textAlign: "center",
    		color: "#94a3b8",
    		alignItems: "center",
    		justifyContent: "center",
    		position: "absolute"
  	},
  	textClr: {
    		color: "#0f172a",
    		position: "absolute"
  	},
  	textTypo6: {
    		fontFamily: "Inter-SemiBold",
    		fontWeight: "600",
    		display: "flex",
    		lineHeight: 20,
    		textAlign: "center",
    		alignItems: "center",
    		justifyContent: "center"
  	},
  	textTypo3: {
    		width: 157,
    		fontSize: 16,
    		color: "#0f172a",
    		height: 40,
    		fontFamily: "Inter-SemiBold",
    		fontWeight: "600",
    		display: "flex",
    		lineHeight: 20,
    		letterSpacing: 0.2,
    		textAlign: "center",
    		alignItems: "center",
    		justifyContent: "center",
    		position: "absolute"
  	},
  	groupLayout: {
    		width: 109,
    		height: 40,
    		position: "absolute"
  	},
  	textTypo2: {
    		top: 10,
    		fontSize: 16,
    		fontFamily: "Inter-SemiBold",
    		fontWeight: "600",
    		lineHeight: 20,
    		letterSpacing: 0.2,
    		color: "#6366f1",
    		textAlign: "center",
    		position: "absolute"
  	},
  	textTypo1: {
    		height: 28,
    		top: 6,
    		fontSize: 16,
    		fontFamily: "Inter-SemiBold",
    		fontWeight: "600",
    		display: "flex",
    		lineHeight: 20,
    		letterSpacing: 0.2,
    		textAlign: "center",
    		color: "#94a3b8",
    		alignItems: "center",
    		justifyContent: "center",
    		position: "absolute"
  	},
  	groupViewPosition: {
    		top: 610,
    		width: 109,
    		height: 40,
    		position: "absolute"
  	},
  	androidPosition: {
    		height: 9,
    		borderRadius: 2,
    		left: 36,
    		top: 485,
    		position: "absolute"
  	},
  	textTypo: {
    		height: 14,
    		width: 68,
    		top: 504,
    		fontFamily: "Inter-SemiBold",
    		fontWeight: "600",
    		letterSpacing: 0.1,
    		fontSize: 14,
    		display: "flex",
    		lineHeight: 20,
    		textAlign: "center",
    		color: "#94a3b8",
    		alignItems: "center",
    		justifyContent: "center",
    		position: "absolute"
  	},
  	text17Layout: {
    		height: 17,
    		position: "absolute"
  	},
  	textTypo4: {
    		fontSize: 16,
    		fontFamily: "Inter-SemiBold",
    		fontWeight: "600",
    		display: "flex",
    		lineHeight: 20,
    		letterSpacing: 0.2,
    		textAlign: "center",
    		alignItems: "center",
    		justifyContent: "center"
  	},
  	androidCompact6: {
    		width: "100%",
    		height: 917,
    		backgroundColor: "#fff",
    		overflow: "hidden"
  	},
  	navigationBarVerticalItems: {
    		top: 818,
    		backgroundColor: "#f3edf7",
    		width: 412,
    		alignItems: "flex-end",
    		justifyContent: "center",
    		flexDirection: "row",
    		left: 0,
    		position: "absolute",
    		overflow: "hidden"
  	},
  	navItem01: {
    		flex: 1,
    		paddingVertical: 6,
    		gap: 4,
    		paddingHorizontal: 0,
    		alignItems: "center",
    		alignSelf: "stretch"
  	},
  	iconContainer: {
    		backgroundColor: "rgba(255, 255, 255, 0)"
  	},
  	icon: {
    		opacity: 0,
    		left: "50%",
    		top: "50%",
    		marginLeft: -12,
    		marginTop: -12,
    		position: "absolute"
  	},
  	labelText: {
    		color: "#94a3b8"
  	},
  	iconContainer2: {
    		flexDirection: "row",
    		borderRadius: 16
  	},
  	stateLayer2: {
    		paddingVertical: 4,
    		gap: 10,
    		paddingHorizontal: 0
  	},
  	icon3: {
    		opacity: 0,
    		left: "50%",
    		top: "50%",
    		marginLeft: -12,
    		marginTop: -12,
    		position: "absolute",
    		overflow: "hidden"
  	},
  	icon5: {
    		opacity: 0,
    		left: "50%",
    		top: "50%",
    		marginLeft: -12,
    		marginTop: -12,
    		position: "absolute"
  	},
  	labelText5: {
    		color: "#6366f1"
  	},
  	text: {
    		top: 61,
    		left: 67,
    		fontSize: 24,
    		fontFamily: "Inter-Medium",
    		color: "#000",
    		width: 277,
    		display: "flex",
    		lineHeight: 20,
    		letterSpacing: 0.2,
    		textAlign: "center",
    		fontWeight: "500",
    		height: 32,
    		alignItems: "center",
    		justifyContent: "center",
    		position: "absolute"
  	},
  	text2: {
    		top: 93,
    		left: 147,
    		height: 29,
    		width: 111
  	},
  	text3: {
    		top: 322,
    		left: 151
  	},
  	text4: {
    		top: 530,
    		left: 147,
    		height: 29,
    		width: 111
  	},
  	androidCompact6Child: {
    		top: 132,
    		borderRadius: 12,
    		backgroundColor: "rgba(217, 217, 217, 0)",
    		borderStyle: "solid",
    		borderColor: "#e2e8f0",
    		borderWidth: 1,
    		width: 359,
    		height: 173,
    		left: 26,
    		position: "absolute"
  	},
  	genericAvatar: {
    		top: 148,
    		left: 187,
    		borderRadius: 100,
    		backgroundColor: "#eaddff",
    		width: 40,
    		height: 40,
    		position: "absolute",
    		overflow: "hidden"
  	},
  	avatarPlaceholderIcon: {
    		height: "64%",
    		width: "70.5%",
    		top: "25%",
    		right: "14.73%",
    		bottom: "11%",
    		left: "14.77%",
    		maxWidth: "100%",
    		maxHeight: "100%",
    		position: "absolute",
    		overflow: "hidden"
  	},
  	text5: {
    		top: 205,
    		left: 107,
    		fontSize: 18,
    		width: 200,
    		fontFamily: "Inter-SemiBold",
    		fontWeight: "600",
    		display: "flex",
    		lineHeight: 20,
    		textAlign: "center",
    		alignItems: "center",
    		justifyContent: "center",
    		letterSpacing: 0.2,
    		color: "#0f172a",
    		height: 24
  	},
  	alexemailcom: {
    		top: 229,
    		left: 125,
    		width: 163,
    		height: 23,
    		letterSpacing: 0.1,
    		fontSize: 14,
    		fontWeight: "600",
    		position: "absolute",
    		color: "#94a3b8"
  	},
  	text6: {
    		top: 261,
    		left: 97,
    		width: 220,
    		height: 35,
    		letterSpacing: 0.1,
    		fontSize: 14,
    		fontWeight: "600",
    		position: "absolute",
    		color: "#6366f1"
  	},
  	text7: {
    		top: 351,
    		left: 18
  	},
  	text8: {
    		top: 436,
    		left: 6
  	},
  	rectangleParent: {
    		top: 391,
    		width: 109,
    		left: 18
  	},
  	groupChild: {
    		top: 0,
    		borderRadius: 20,
    		backgroundColor: "#f1f5f9",
    		width: 109,
    		left: 0
  	},
  	text9: {
    		left: 19
  	},
  	rectangleGroup: {
    		left: 140,
    		top: 391,
    		width: 109
  	},
  	text10: {
    		left: 20,
    		width: 63
  	},
  	push: {
    		top: 570,
    		left: 26
  	},
  	text11: {
    		top: 655,
    		left: 8
  	},
  	rectangleContainer: {
    		left: 18
  	},
  	text12: {
    		left: 13
  	},
  	groupView: {
    		left: 140
  	},
  	text13: {
    		width: 98,
    		left: 6
  	},
  	androidCompact6Item: {
    		backgroundColor: "#e2e8f0",
    		width: 334
  	},
  	androidCompact6Inner: {
    		backgroundColor: "#6366f1",
    		width: 167
  	},
  	text14: {
    		left: 12
  	},
  	text15: {
    		left: 336
  	},
  	ellipseIcon: {
    		top: 481,
    		left: 195,
    		boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    		width: 17
  	},
  	text16: {
    		top: 695,
    		left: 14,
    		width: 124,
    		height: 19,
    		color: "#0f172a",
    		position: "absolute"
  	},
  	text17: {
    		top: 696,
    		left: 208,
    		width: 106,
    		fontSize: 16,
    		fontFamily: "Inter-SemiBold",
    		fontWeight: "600",
    		display: "flex",
    		lineHeight: 20,
    		letterSpacing: 0.2,
    		textAlign: "center",
    		alignItems: "center",
    		justifyContent: "center",
    		color: "#6366f1"
  	}
});

export default SettingsScreen;
