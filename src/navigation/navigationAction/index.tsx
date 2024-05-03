import { CommonActions, createNavigationContainerRef } from '@react-navigation/native';

const _navigator = createNavigationContainerRef();

function navigate(screenName: string, params: any) {
  if (_navigator.isReady()) {
    _navigator.dispatch(
      CommonActions.navigate({
        name: screenName,
        params,
      }),
    );
  }
}

function navigateSameScreen(screenName: string, params: any, key: any) {
  if (_navigator.isReady()) {
    _navigator.dispatch(
      CommonActions.navigate({
        name: screenName,
        params,
        key,
      }),
    );
  }
}

function resetNavigation(screenName: string, params: any) {
  if (_navigator.isReady()) {
    if (screenName === "HomeScreen") {
      _navigator.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: screenName , params }],
        })
      );
    } else {
      _navigator.dispatch(
        CommonActions.reset({
          index: 1,
          routes: [{ name: "HomeScreen" }, { name: screenName, params }],
        })
      );
    }
  }
}

function goBack() {
  if (_navigator.isReady()) {
    _navigator.goBack();
  }
}

function forceResetNavigation(screenName: string, params: any) {
  if (_navigator.isReady()) {
      _navigator.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: screenName , params: params }]
        })
      );
  }
}

export default {
  navigate,
  navigateSameScreen,
  resetNavigation,
  goBack,
  forceResetNavigation,
  navigationRef: _navigator
};

