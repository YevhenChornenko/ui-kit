<code

```jsx static
// ...
function App() {
  return (
    <ConfigProvider>
      <AdaptivityProvider>
        <AppRoot>
          <SplitLayout>
            <SplitCol width={280}>
              <SideCol />
            </SplitCol>
            <SplitCol>
              <MainScreens />
            </SplitCol>
          </SplitLayout>
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  )
}

const MainScreens = () => {
  return (
    <View activePanel="profile">
      <Panel id="profile">Profile</Panel>
    </View>
  )
}

const SideCol = () => {
  return <Panel id="nav">Navigation</Panel>
}
```
