## [2.19.0-preprod.1](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.18.2...v2.19.0-preprod.1) (2021-06-11)


### Features

* add modal logic ([66fe215](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/66fe215a29fb1eb1ebfd94ff11f8f0939a949c44))
* filter qualifying questions in contact flow ([683eca1](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/683eca15e2761dc85598bafb1d95d24ad5bae42b))
* mark qualifying question as disabled in account settings ([cece82e](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/cece82eb1184aa879fa4cc7e0152cd9e958377bf))
* **dashboards:** changed permissions to account admin ([01fea24](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/01fea249ea2239e6cafb5190a23bb7aa2b77843a))
* **messaging:** changed logic from single requests to multiple requests with save button ([0c274d2](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/0c274d2f242ec59bc2a875332443160d0e1968f3))
* **messaging:** fix lint errors ([e4a4a3a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e4a4a3abe399a476a812636d802b85141550edac))
* **messaging:** handled duplicate cases ([6b726e0](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/6b726e0f01f67951b04fbdd569c649bf44de2332))
* **messaging:** made common mutate in order to check again the segmentations fields ([81fce1f](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/81fce1f543c29fbb37f28bf7537872d41ce57da0))
* **messaging seg:** [P21-1458](https://bloobirds.atlassian.net/browse/P21-1458) replace search input ([7d298b4](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/7d298b454d0e16c4113316c4712bea264bbae3f0))
* **messaging seg:** adapted contact view with new search and new segmentationValues format. Erased pagination on request ([53ebc2d](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/53ebc2d93e3089c595912dfffc2458f681e330bf))
* **messaging seg:** added hook for messaging templates ([3d0ce42](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/3d0ce421e4b1ef8a97e411fa5e6a462ccd4b3a56))
* **messaging seg:** changed logic of hook to only show available filters ([21d99c2](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/21d99c29d7326a1a11d0986288d6d22f8fcac8dd))
* **messaging seg:** created messaging filters hook and component with the Selects ([0fed90a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/0fed90af75319a5d6689baf511328f4113ad96d9))
* **messaging seg:** erased recoil ([b9ebddc](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/b9ebddc46f6f1309c25183d5a3080c0d895f5df0))
* **messaging seg:** for qq added page and paginationSize ([b53a50f](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/b53a50fcf1d1b90841d4135ce5a24cdc025d3ed6))
* **messaging seg:** request to "show only mine" ([276322e](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/276322e8c4ad8d81e18f5ad3b637603cf68db79e))
* **webapp:** in the list of leads, add a icon to show if these lead has an opp ([a5e417e](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/a5e417ecaaa3fe23cd9a80a0495e1e4feb28139c))
* add duplicate name validation to qualifying questions ([1266141](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/1266141e9949f02e2b82d90cab1f3658bf423dbd))
* added mixpanel with some basic events ([c790e70](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/c790e7043cc7753ac97f73ea9e164d47affe7d00)), closes [P21-1901](https://bloobirds.atlassian.net/browse/P21-1901)
* change response of messaging template and qq ([1a6dec7](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/1a6dec7fb0b56ef5137894dbf0e09d466cec2af3)), closes [P21-1877](https://bloobirds.atlassian.net/browse/P21-1877)
* increased the dates where we fetch the tasks because some users schedule tasks for more than 1 year ([30395d1](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/30395d1b680e7563a305c5c29fa40f86f703764e))
* new hook for checking sales dashboard feature flag ([27d4137](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/27d4137da118eafa60369b97b710cafa317cbea9))
* new route structure ([ac04e84](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/ac04e848952df4794d5b308a8f79216ac71477cd))
* update dashboard sidebar title ([c8cdcb5](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/c8cdcb54ca3af3387e5087f28432ad97d4300918))
* **messaging seg:** enabled clone for messaging and for qqs ([a657af2](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/a657af28cfe4fa49f480df99682685a9364e83e4))
* **messaging seg:** handled "all" ([8cd6b08](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/8cd6b08f25cdbc0135aa97170ead371b2df0cc42))
* **messaging seg:** keeping properly the answers when cloning QQ ([697def2](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/697def2673ca9933a7c9dd2c975a09539a821229))
* **messaging seg:** reset filters each time we mount the component ([c8753e9](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/c8753e92d263169ad0627fbc97811ff4abfe0594))
* **messaging seg:** updated endpoint and request format to search messaging templates and QQs ([36cecfa](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/36cecfad05d0ca2bfff6b3030800a5a750899bd6))
* **messaging seg:** used new filters and new endpoints for messaging templates ([4140c8e](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/4140c8ece525f16e7fc7d23d2a6f540ba076749d))
* **messaging segmentation:** changed side bar position ([b5bb3cc](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/b5bb3cc9755d4700940e720161ab3b6218a5a0a5))
* **messaging segmentation:** changed update to PUT method and reset errors. Changed the filters for the fields ([db78013](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/db7801339c9e31763652151a38f08728caab015a))
* **messaging segmentation:** created hook for segmentation and added sales permissions ([ff76017](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/ff760179d3b230a78b84ed5295cf7b6698c2cc8a))
* **messaging segmentation:** created playbook segmentation page and Prospect and Sales tabs ([512ef04](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/512ef049937fdea3dcc97ccb2611fb326bce6254))
* **messaging segmentation:** now we can delete the segmentations criteria ([2b55ac7](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/2b55ac73d70e73abec6f7556672501fa5e118b6a))
* **webapp:** 26. [FE] Update the filter bar styles to match the new design ([2171eaf](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/2171eaf854d7e53ed7bbdde4c53e05e115080e5b))
* **webapp:** BannerPlaybook component ([f7fbc35](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/f7fbc3531a43826524b914063eeed9d37bca976b))
* **webapp:** change status step ([75038c0](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/75038c0f1eba8bab08788dc4f0d9ccfba980a0c9))
* **webapp:** clean code and fix in company/lead status reasons ([89fd730](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/89fd730374ddc3d7be161f49cd92a0d8cc94cc9f))
* **webapp:** fixes ([62b1e08](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/62b1e081df18a741050b1166b78459e6462d71ee))
* **webapp:** fixes ([99f6886](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/99f68865b8c5f432820fd7b85c4e1d6750ba0c24))
* **webapp:** fixes ([140b9f6](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/140b9f6ea8d883efbecdd723182cdc8f0d8a1de0))
* **webapp:** fixes ([5369eff](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/5369eff3bfeb9eea18298bd580cb1725ec4efe26))
* **webapp:** fixes and schedule next step ([6129004](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/61290048f4bd469bd42331e4c177f36a47b7ef23))
* **webapp:** new component ([e9e0d61](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e9e0d61f17a4c355064fc9a623220aa8d4c61ce0))
* **webapp:** new useContactFlow hook, and adapt the call results step ([087626c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/087626cc01504cc70e385e817ebfacc7ceedf8fe))
* **webapp:** reduce the number of requests and note step ([a38d1e9](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/a38d1e93e7252c21776374bf120494564ccd558a))
* **webapp:** remove console.debug ([e6a3a54](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e6a3a54850ad344e4266ae2ff0e1a491146a10c0))
* **webapp:** remove console.debug and fix note step ([ab0e834](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/ab0e8345aad3255c8051b430fe59744e44b32531))
* **webapp:** remove the copy of useContactFlow ([81f5629](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/81f562915c407ca431e1b1e19f0482b10a1c655a))
* **Webapp:** fixes ([9a44802](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/9a4480259d08fde8186c32552898e07c8166347b))
* add mutations to useMessagingTemplate.js ([83c108c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/83c108cd93085cf51076dbce399b3933ffb82480))
* create useful hooks for messaging templates ([b508ac6](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/b508ac6e9ffa6450df124272403078ca8b930491))
* delete messaing template ([b439164](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/b4391647e1f6cf933bf52da206e38bdf83cfc636))
* extract single qq components and add banner playbook ([0e9a412](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/0e9a412250f4e5f9f63009503b16bfb3a6022652))
* messaging template deletion ([12772ee](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/12772ee927c5d0dd82e4665c7749042a6ce631e0))
* qualifying questions page ([128a5e7](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/128a5e738785c11ccf4e71a3d3c746b2d0d640ee))
* update playbook banner icon ([66c3b5b](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/66c3b5b25ef96fb6db6bf7383f0f35ad3202f0dc))
* use playbook banner filter ([c458444](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/c4584448b4ceeec258d4520083a769b216e90e2c))
* **webapp:** SimpleSelect component ([f28ebab](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/f28ebab65f1b12a82cdba7b0651187790b5e4faf))
* **webapp:** upgrade version of Component library ([44c8d30](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/44c8d300a3b75fe8184ac15508240171cafd00fa))


### Bug Fixes

* changed the query to use On prospection date and not creation date ([19a806d](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/19a806dfbbc1ed71796f5c85e59483ae5d509ff6))
* messaging template card disabled by default ([5cdbfbe](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/5cdbfbef3a1b8c203e0f9b6a5b60f8e20c84a0cc))
* prevent icon buttons from submitting forms ([db83f6c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/db83f6c43b1843a195f63b6dd3f70bcfb274fa9f))
* **dashboards:** fixed inheritance of filters when switching dashboards ([cd7ce27](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/cd7ce275bc8bc62e662a7078cc56272cd10dc3ae))
* added an extra regex to not allow put - between numbers ([3f03b28](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/3f03b284b49366543fe75e62e42db805371d14cf))
* align section properly when small number of qualifying questions ([44ffad2](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/44ffad208ac99cd5e9555fa608245d576b9cf95f))
* all should be the default when no categorization is selected ([77df21f](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/77df21fca717af8fbbd50ab061c43d7657e1f590))
* answer row margin ([fdd142c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/fdd142c472be6c96bf566d3f55f19c21bfd18376))
* company url builder redirects to company if company.id is null ([3682f4c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/3682f4cd4a62ece591e6db71e2ef65b266a7b2dc))
* empty filters on contact flow ([8b7f276](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/8b7f27655670ba6eafe4980fdd99ea76bceed977))
* error when notification is opened outside contact view ([e5bf409](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e5bf409b3b21e2e645838cd7c9e1e4ac2a3040a8))
* hide "None" if segmentation is currently "None" ([69f6c3c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/69f6c3ca02e66eec774835906ef98ca39510ce47))
* hide "none" option for empty segmentation select ([6efa006](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/6efa006469c85a6dcdce670a004e94632e28c867))
* messaging categorization missing space ([fe87f34](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/fe87f3490769b9729a6bcaa2ecade25197b47f85))
* messaging search componennt and refactor visibility switch ([1e1eaa0](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/1e1eaa0a1879d2a997a2cd5829711c76c574f64f))
* prevent qualifying question from updating banner playbook filters ([5aad0e8](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/5aad0e8aa15ee873c8dc60c7d04dea60c90f4aa1))
* qualifying questions infinite request in correct contact flow ([8ad6a3a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/8ad6a3ab7c9ae4c55f3712bfba33d6098fb5c589))
* refetch qualifying question on save ([16c5f7a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/16c5f7a7eb521644799ad172311ddb35a7dd68dc))
* reloading the cached entities after creating a qq ([fe045b2](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/fe045b283b906daa9084075aa39043a2264b6072)), closes [P21-2006](https://bloobirds.atlassian.net/browse/P21-2006)
* remove collapsible from categorization sections ([b3d911d](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/b3d911d940dc5d45440bf22643ba0d28a0dc143c))
* removed the suspense on useEntity and add a spinner while loading assets ([dcb29b0](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/dcb29b0bb44d29e4154610a7be3aa145405cd04d))
* reset form on submit ([89e7f06](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/89e7f06f6677947b83c4be651d607283dcb47fb5))
* **integrationsUI:** changed open modal logic in order to not close on click ([a61f5ba](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/a61f5ba787f8f7176a5a9aa0c27d9113e5067679))
* **integrationsUI:** fixed lint ([1e5068f](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/1e5068fcc41cbce5731346622ed99f20eef5ccd7))
* **webapp:** remove console ([b8213d8](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/b8213d8275d5d1e3e55007bee34849b4f2344e3d))
* the search mode of the search bar should be autocomplete ([ce2b3fc](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/ce2b3fc7687a65bd18eb96bda78f496455ef137b)), closes [P21-2015](https://bloobirds.atlassian.net/browse/P21-2015)
* **messaging:** check undefined ([7bedcdc](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/7bedcdcc2e928759e3e4632657dec3013ac13d08))
* **messaging:** reset the stage each time we change between tabs ([2a48839](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/2a488391cc81f94fe4cbbf57e05d157741ec52f1))
* **messaging seg:** change toast message because it was confusing ([a174770](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/a1747706925b6df1b3b1886539c43afeb29ca8ce))
* **messaging seg:** change toast message because it was confusing ([d74f376](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/d74f376893b61c20d33a798242c9b3302c4e3224))
* **messaging seg:** lint fix ([01c8a3b](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/01c8a3b8b0a2827f8657a742e7cf3c3613ca82ca))
* **messaging seg:** the clone button does not load the data ([7440a20](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/7440a204c6a57b916d08424d12f722ed3c8d2dc4))
* **webapp:** remove eslint error ([9b154e2](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/9b154e2a2ed20d9d3f1cd0ba1c935d3e140b698d))
* **webapp:** revert some data attributes ([53c4351](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/53c4351cc6c0884c75ab1d137db915f4e3f1ae96))
* add qq case to messaging footer actions ([5bf5d05](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/5bf5d0507e1873523460bfc39d7ccdbc77197039))
* banner playbook responsiveness ([86e0748](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/86e0748dabfa41faa36da0c7b5ff32f4729d6c79))
* contact flow and note/qq use new endpoints and hooks ([0a03db8](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/0a03db85bb4d7ffcc1b93ea248f3ae83d6cedf8a))
* default filters to useQualifyingQuestions ([866acfb](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/866acfb00f0c164a0b93004dc061fcfeb8c803ca))
* hide disabled qualifying questions ([c594be2](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/c594be2b93134d8e3df66c8f32075d5f944b2ed8))
* hide update datetime for creation ([65df984](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/65df9849d179f3eac1f8b951b2ada1e437689ecd))
* install missing dependency ([1adbb20](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/1adbb201baf862b9f1ddc76ffcde6a47eb09ad6c))
* limit simple select height ([35744f8](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/35744f8030381c72fa9565310b19b5a46dcb01c2))
* make form compatible with new format ([9521969](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/9521969c91d1020d982dc14ef16fd5b969e91d19))
* memoize useMessagingFilterOptions for banner infinite loop ([5428c68](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/5428c68fb71d9a68228bd2747e9129267778079c))
* messaging template list pagination ([cde1017](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/cde10177ba61d531d815015d05bac9c6743a99d4))
* missing stage for segmentation values hooks ([83503e8](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/83503e8a5f513f426c642e4c05f26cd642db55d7))
* mutation of messaging templates ([65d1d77](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/65d1d7786c7c959c6c38bb4a2f2b487d1d38a9a7))
* null values on filter query ([9ef08e1](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/9ef08e10f7d11ac5e4323948c78d66e689c3476a))
* playbook without fullsales should not have tabs ([2fdb436](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/2fdb436b9bc0fb9140b6889435356d7042f4e9dc))
* reset messaging filters on stage change ([c6c593c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/c6c593c8ef264125552e527890934bf594bcc435))
* reset name search on search input load ([716da47](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/716da4704a8e5cd00ec2b3ab60dd87993166ee1d))
* responsiveness for creation and edition ([f7106b5](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/f7106b515b3ba05edc86a2400f3ec8d292e23432))
* sidebar resetting field arrays incorrectly ([18c5de7](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/18c5de7b4ec113e8edbd669f4e27bfa24a3b599a))
* simple select styles ([1adf8a4](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/1adf8a4840b471dfbc39744889a7db48c41e0b2c))
* sort templates according to parameters ([bb3c8ba](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/bb3c8ba76df6fec6363c3f5e18954c4c996e501f))
* split messaging template collection into two (qqs and mt) ([b4f0920](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/b4f09208d66344dff2e63762dc6ec51182a2cc74))
* update messaging segmentation title ([2dd4567](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/2dd45673a6d34271e5e9deeabdf7d7f1f4214097))
* update stage filter with banner loading ([b88bed1](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/b88bed156dad75f259c2ec851ee1ec68c8febd23))
* use proper feature key ([046f73b](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/046f73b9fd071625d6514de991309ed7ac6c7c8d))
* **messaging seg:** changed to SearchInput component and centered the comp. on account settings ([4bf4797](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/4bf4797bf4dbe2a3650e46fffabb671269e60bad))
* **messaging seg:** fixed permissions to disable tab ([4e46290](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/4e46290ed2d5da7c2afb8bfa0f41495cde6e5b52))
* **messaging seg:** fixed some undefined issues and erase "None" option for 1st criteria Sales ([05d64b5](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/05d64b5cf2434a49dfbb8c8fa440ebf63bc88391))
* **messaging seg:** fixed stage updates and not rendering filters ([6773528](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/6773528705774cc450b8c8494b3ee624843fd476))
* **messaging seg:** fixed weird render on Select component ([b20f405](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/b20f4057705bbaa65a4161284e4976af02b17df7))
* **messaging seg:** included useSegmentation at hooks' index ([7506d0e](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/7506d0e45d13d7b0487d78f0737e23ef1db430fc))
* **messaging seg:** initialised array ([4c93954](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/4c9395459abd21426fafb71b84d76f2fb67479c2))
* **messaging seg:** lint fix ([dc059e7](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/dc059e791427f9ab7a4b3796263672061c8ee25b))
* **messaging seg:** lint fix ([3c78ad0](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/3c78ad0caf6346a289b38e0ec87c1e9e6242c024))
* use recoil async and react suspense ([73d279e](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/73d279e37244076c7153796d0bc8e65ccd2fc524))


### Performance Improvements

* avoid memo of useMessagingFilterOptions ([2ce78be](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/2ce78bea1492a177d0495f4f1b4d5e6fb62bc782))
* reduce the page size for messaging templates ([5830f0e](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/5830f0ecaa84b86ee5d1c965e814b08f5252607a))
* simpler mutate ([3b5b14a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/3b5b14aa047a2fe36e7418ee3a2b14a9c2d7f57e))
* use useMemo ([3dde832](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/3dde83223606de6fa00cc2be2ae662052c1e631b))

## [2.19.0-preprod.1](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.18.2...v2.19.0-preprod.1) (2021-06-10)


### Features

* add modal logic ([66fe215](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/66fe215a29fb1eb1ebfd94ff11f8f0939a949c44))
* filter qualifying questions in contact flow ([683eca1](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/683eca15e2761dc85598bafb1d95d24ad5bae42b))
* mark qualifying question as disabled in account settings ([cece82e](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/cece82eb1184aa879fa4cc7e0152cd9e958377bf))
* **dashboards:** changed permissions to account admin ([01fea24](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/01fea249ea2239e6cafb5190a23bb7aa2b77843a))
* **messaging:** changed logic from single requests to multiple requests with save button ([0c274d2](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/0c274d2f242ec59bc2a875332443160d0e1968f3))
* **messaging:** fix lint errors ([e4a4a3a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e4a4a3abe399a476a812636d802b85141550edac))
* **messaging:** handled duplicate cases ([6b726e0](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/6b726e0f01f67951b04fbdd569c649bf44de2332))
* **messaging:** made common mutate in order to check again the segmentations fields ([81fce1f](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/81fce1f543c29fbb37f28bf7537872d41ce57da0))
* **messaging seg:** added hook for messaging templates ([3d0ce42](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/3d0ce421e4b1ef8a97e411fa5e6a462ccd4b3a56))
* **messaging seg:** enabled clone for messaging and for qqs ([a657af2](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/a657af28cfe4fa49f480df99682685a9364e83e4))
* **messaging seg:** for qq added page and paginationSize ([b53a50f](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/b53a50fcf1d1b90841d4135ce5a24cdc025d3ed6))
* **messaging seg:** keeping properly the answers when cloning QQ ([697def2](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/697def2673ca9933a7c9dd2c975a09539a821229))
* **messaging seg:** request to "show only mine" ([276322e](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/276322e8c4ad8d81e18f5ad3b637603cf68db79e))
* **messaging seg:** reset filters each time we mount the component ([c8753e9](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/c8753e92d263169ad0627fbc97811ff4abfe0594))
* **messaging seg:** updated endpoint and request format to search messaging templates and QQs ([36cecfa](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/36cecfad05d0ca2bfff6b3030800a5a750899bd6))
* **webapp:** in the list of leads, add a icon to show if these lead has an opp ([a5e417e](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/a5e417ecaaa3fe23cd9a80a0495e1e4feb28139c))
* add duplicate name validation to qualifying questions ([1266141](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/1266141e9949f02e2b82d90cab1f3658bf423dbd))
* add mutations to useMessagingTemplate.js ([83c108c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/83c108cd93085cf51076dbce399b3933ffb82480))
* change response of messaging template and qq ([1a6dec7](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/1a6dec7fb0b56ef5137894dbf0e09d466cec2af3)), closes [P21-1877](https://bloobirds.atlassian.net/browse/P21-1877)
* create useful hooks for messaging templates ([b508ac6](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/b508ac6e9ffa6450df124272403078ca8b930491))
* delete messaing template ([b439164](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/b4391647e1f6cf933bf52da206e38bdf83cfc636))
* extract single qq components and add banner playbook ([0e9a412](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/0e9a412250f4e5f9f63009503b16bfb3a6022652))
* increased the dates where we fetch the tasks because some users schedule tasks for more than 1 year ([30395d1](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/30395d1b680e7563a305c5c29fa40f86f703764e))
* messaging template deletion ([12772ee](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/12772ee927c5d0dd82e4665c7749042a6ce631e0))
* new hook for checking sales dashboard feature flag ([27d4137](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/27d4137da118eafa60369b97b710cafa317cbea9))
* new route structure ([ac04e84](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/ac04e848952df4794d5b308a8f79216ac71477cd))
* update dashboard sidebar title ([c8cdcb5](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/c8cdcb54ca3af3387e5087f28432ad97d4300918))
* **messaging seg:** adapted contact view with new search and new segmentationValues format. Erased pagination on request ([53ebc2d](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/53ebc2d93e3089c595912dfffc2458f681e330bf))
* qualifying questions page ([128a5e7](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/128a5e738785c11ccf4e71a3d3c746b2d0d640ee))
* update playbook banner icon ([66c3b5b](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/66c3b5b25ef96fb6db6bf7383f0f35ad3202f0dc))
* use playbook banner filter ([c458444](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/c4584448b4ceeec258d4520083a769b216e90e2c))
* **messaging seg:** [P21-1458](https://bloobirds.atlassian.net/browse/P21-1458) replace search input ([7d298b4](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/7d298b454d0e16c4113316c4712bea264bbae3f0))
* **messaging seg:** changed logic of hook to only show available filters ([21d99c2](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/21d99c29d7326a1a11d0986288d6d22f8fcac8dd))
* **messaging seg:** created messaging filters hook and component with the Selects ([0fed90a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/0fed90af75319a5d6689baf511328f4113ad96d9))
* **messaging seg:** erased recoil ([b9ebddc](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/b9ebddc46f6f1309c25183d5a3080c0d895f5df0))
* **messaging seg:** handled "all" ([8cd6b08](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/8cd6b08f25cdbc0135aa97170ead371b2df0cc42))
* **messaging seg:** used new filters and new endpoints for messaging templates ([4140c8e](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/4140c8ece525f16e7fc7d23d2a6f540ba076749d))
* **messaging segmentation:** changed side bar position ([b5bb3cc](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/b5bb3cc9755d4700940e720161ab3b6218a5a0a5))
* **messaging segmentation:** changed update to PUT method and reset errors. Changed the filters for the fields ([db78013](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/db7801339c9e31763652151a38f08728caab015a))
* **messaging segmentation:** created hook for segmentation and added sales permissions ([ff76017](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/ff760179d3b230a78b84ed5295cf7b6698c2cc8a))
* **messaging segmentation:** created playbook segmentation page and Prospect and Sales tabs ([512ef04](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/512ef049937fdea3dcc97ccb2611fb326bce6254))
* **messaging segmentation:** now we can delete the segmentations criteria ([2b55ac7](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/2b55ac73d70e73abec6f7556672501fa5e118b6a))
* **webapp:** 26. [FE] Update the filter bar styles to match the new design ([2171eaf](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/2171eaf854d7e53ed7bbdde4c53e05e115080e5b))
* **webapp:** BannerPlaybook component ([f7fbc35](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/f7fbc3531a43826524b914063eeed9d37bca976b))
* **webapp:** new component ([e9e0d61](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e9e0d61f17a4c355064fc9a623220aa8d4c61ce0))
* **webapp:** SimpleSelect component ([f28ebab](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/f28ebab65f1b12a82cdba7b0651187790b5e4faf))
* **webapp:** upgrade version of Component library ([44c8d30](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/44c8d300a3b75fe8184ac15508240171cafd00fa))


### Bug Fixes

* add qq case to messaging footer actions ([5bf5d05](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/5bf5d0507e1873523460bfc39d7ccdbc77197039))
* align section properly when small number of qualifying questions ([44ffad2](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/44ffad208ac99cd5e9555fa608245d576b9cf95f))
* all should be the default when no categorization is selected ([77df21f](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/77df21fca717af8fbbd50ab061c43d7657e1f590))
* answer row margin ([fdd142c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/fdd142c472be6c96bf566d3f55f19c21bfd18376))
* company url builder redirects to company if company.id is null ([3682f4c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/3682f4cd4a62ece591e6db71e2ef65b266a7b2dc))
* contact flow and note/qq use new endpoints and hooks ([0a03db8](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/0a03db85bb4d7ffcc1b93ea248f3ae83d6cedf8a))
* default filters to useQualifyingQuestions ([866acfb](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/866acfb00f0c164a0b93004dc061fcfeb8c803ca))
* empty filters on contact flow ([8b7f276](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/8b7f27655670ba6eafe4980fdd99ea76bceed977))
* error when notification is opened outside contact view ([e5bf409](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e5bf409b3b21e2e645838cd7c9e1e4ac2a3040a8))
* hide "None" if segmentation is currently "None" ([69f6c3c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/69f6c3ca02e66eec774835906ef98ca39510ce47))
* hide "none" option for empty segmentation select ([6efa006](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/6efa006469c85a6dcdce670a004e94632e28c867))
* hide disabled qualifying questions ([c594be2](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/c594be2b93134d8e3df66c8f32075d5f944b2ed8))
* hide update datetime for creation ([65df984](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/65df9849d179f3eac1f8b951b2ada1e437689ecd))
* make form compatible with new format ([9521969](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/9521969c91d1020d982dc14ef16fd5b969e91d19))
* memoize useMessagingFilterOptions for banner infinite loop ([5428c68](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/5428c68fb71d9a68228bd2747e9129267778079c))
* messaging categorization missing space ([fe87f34](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/fe87f3490769b9729a6bcaa2ecade25197b47f85))
* messaging search componennt and refactor visibility switch ([1e1eaa0](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/1e1eaa0a1879d2a997a2cd5829711c76c574f64f))
* messaging template card disabled by default ([5cdbfbe](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/5cdbfbef3a1b8c203e0f9b6a5b60f8e20c84a0cc))
* messaging template list pagination ([cde1017](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/cde10177ba61d531d815015d05bac9c6743a99d4))
* missing stage for segmentation values hooks ([83503e8](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/83503e8a5f513f426c642e4c05f26cd642db55d7))
* mutation of messaging templates ([65d1d77](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/65d1d7786c7c959c6c38bb4a2f2b487d1d38a9a7))
* playbook without fullsales should not have tabs ([2fdb436](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/2fdb436b9bc0fb9140b6889435356d7042f4e9dc))
* prevent qualifying question from updating banner playbook filters ([5aad0e8](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/5aad0e8aa15ee873c8dc60c7d04dea60c90f4aa1))
* qualifying questions infinite request in correct contact flow ([8ad6a3a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/8ad6a3ab7c9ae4c55f3712bfba33d6098fb5c589))
* refetch qualifying question on save ([16c5f7a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/16c5f7a7eb521644799ad172311ddb35a7dd68dc))
* reset form on submit ([89e7f06](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/89e7f06f6677947b83c4be651d607283dcb47fb5))
* **integrationsUI:** fixed lint ([1e5068f](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/1e5068fcc41cbce5731346622ed99f20eef5ccd7))
* **webapp:** remove console ([b8213d8](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/b8213d8275d5d1e3e55007bee34849b4f2344e3d))
* remove collapsible from categorization sections ([b3d911d](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/b3d911d940dc5d45440bf22643ba0d28a0dc143c))
* removed the suspense on useEntity and add a spinner while loading assets ([dcb29b0](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/dcb29b0bb44d29e4154610a7be3aa145405cd04d))
* reset messaging filters on stage change ([c6c593c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/c6c593c8ef264125552e527890934bf594bcc435))
* sort templates according to parameters ([bb3c8ba](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/bb3c8ba76df6fec6363c3f5e18954c4c996e501f))
* the search mode of the search bar should be autocomplete ([ce2b3fc](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/ce2b3fc7687a65bd18eb96bda78f496455ef137b)), closes [P21-2015](https://bloobirds.atlassian.net/browse/P21-2015)
* **integrationsUI:** changed open modal logic in order to not close on click ([a61f5ba](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/a61f5ba787f8f7176a5a9aa0c27d9113e5067679))
* **messaging:** check undefined ([7bedcdc](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/7bedcdcc2e928759e3e4632657dec3013ac13d08))
* **messaging:** reset the stage each time we change between tabs ([2a48839](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/2a488391cc81f94fe4cbbf57e05d157741ec52f1))
* **messaging seg:** change toast message because it was confusing ([d74f376](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/d74f376893b61c20d33a798242c9b3302c4e3224))
* **messaging seg:** lint fix ([01c8a3b](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/01c8a3b8b0a2827f8657a742e7cf3c3613ca82ca))
* **messaging seg:** the clone button does not load the data ([7440a20](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/7440a204c6a57b916d08424d12f722ed3c8d2dc4))
* **webapp:** revert some data attributes ([53c4351](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/53c4351cc6c0884c75ab1d137db915f4e3f1ae96))
* banner playbook responsiveness ([86e0748](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/86e0748dabfa41faa36da0c7b5ff32f4729d6c79))
* install missing dependency ([1adbb20](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/1adbb201baf862b9f1ddc76ffcde6a47eb09ad6c))
* limit simple select height ([35744f8](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/35744f8030381c72fa9565310b19b5a46dcb01c2))
* null values on filter query ([9ef08e1](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/9ef08e10f7d11ac5e4323948c78d66e689c3476a))
* reset name search on search input load ([716da47](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/716da4704a8e5cd00ec2b3ab60dd87993166ee1d))
* responsiveness for creation and edition ([f7106b5](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/f7106b515b3ba05edc86a2400f3ec8d292e23432))
* sidebar resetting field arrays incorrectly ([18c5de7](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/18c5de7b4ec113e8edbd669f4e27bfa24a3b599a))
* simple select styles ([1adf8a4](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/1adf8a4840b471dfbc39744889a7db48c41e0b2c))
* split messaging template collection into two (qqs and mt) ([b4f0920](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/b4f09208d66344dff2e63762dc6ec51182a2cc74))
* update messaging segmentation title ([2dd4567](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/2dd45673a6d34271e5e9deeabdf7d7f1f4214097))
* update stage filter with banner loading ([b88bed1](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/b88bed156dad75f259c2ec851ee1ec68c8febd23))
* use proper feature key ([046f73b](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/046f73b9fd071625d6514de991309ed7ac6c7c8d))
* **messaging seg:** change toast message because it was confusing ([a174770](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/a1747706925b6df1b3b1886539c43afeb29ca8ce))
* **messaging seg:** changed to SearchInput component and centered the comp. on account settings ([4bf4797](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/4bf4797bf4dbe2a3650e46fffabb671269e60bad))
* **messaging seg:** fixed permissions to disable tab ([4e46290](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/4e46290ed2d5da7c2afb8bfa0f41495cde6e5b52))
* **messaging seg:** fixed some undefined issues and erase "None" option for 1st criteria Sales ([05d64b5](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/05d64b5cf2434a49dfbb8c8fa440ebf63bc88391))
* **messaging seg:** fixed stage updates and not rendering filters ([6773528](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/6773528705774cc450b8c8494b3ee624843fd476))
* **messaging seg:** fixed weird render on Select component ([b20f405](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/b20f4057705bbaa65a4161284e4976af02b17df7))
* **messaging seg:** included useSegmentation at hooks' index ([7506d0e](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/7506d0e45d13d7b0487d78f0737e23ef1db430fc))
* **messaging seg:** initialised array ([4c93954](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/4c9395459abd21426fafb71b84d76f2fb67479c2))
* **messaging seg:** lint fix ([dc059e7](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/dc059e791427f9ab7a4b3796263672061c8ee25b))
* **messaging seg:** lint fix ([3c78ad0](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/3c78ad0caf6346a289b38e0ec87c1e9e6242c024))
* use recoil async and react suspense ([73d279e](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/73d279e37244076c7153796d0bc8e65ccd2fc524))


### Performance Improvements

* avoid memo of useMessagingFilterOptions ([2ce78be](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/2ce78bea1492a177d0495f4f1b4d5e6fb62bc782))
* reduce the page size for messaging templates ([5830f0e](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/5830f0ecaa84b86ee5d1c965e814b08f5252607a))
* simpler mutate ([3b5b14a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/3b5b14aa047a2fe36e7418ee3a2b14a9c2d7f57e))
* use useMemo ([3dde832](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/3dde83223606de6fa00cc2be2ae662052c1e631b))

### [2.18.2](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.18.1...v2.18.2) (2021-06-08)

### Bug Fixes

- avoid crashing when the a qq can not be found on the fields of the lead ([48e9444](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/48e94446b44abd51e60e451344de96cbd78f94cd)), closes [P21-2011](https://bloobirds.atlassian.net/browse/P21-2011)
- decrement notification count on report call result ([0ae96c2](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/0ae96c2d87fe72c618dcf4d27a8b92f24064ba83))

### [2.18.2-preprod.2](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.18.2-preprod.1...v2.18.2-preprod.2) (2021-06-08)

### Bug Fixes

- avoid crashing when the a qq can not be found on the fields of the lead ([48e9444](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/48e94446b44abd51e60e451344de96cbd78f94cd)), closes [P21-2011](https://bloobirds.atlassian.net/browse/P21-2011)

### [2.18.2-preprod.1](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.18.1...v2.18.2-preprod.1) (2021-06-08)

### Bug Fixes

- decrement notification count on report call result ([0ae96c2](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/0ae96c2d87fe72c618dcf4d27a8b92f24064ba83))

### [2.18.1](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.18.0...v2.18.1) (2021-06-08)

### Bug Fixes

- when select columns in lists all works ([ca2284a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/ca2284a158cff8f4c37a49b06cbe1ada8ca6f3c0)), closes [P21-1990](https://bloobirds.atlassian.net/browse/P21-1990)

### [2.18.1-preprod.1](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.18.0...v2.18.1-preprod.1) (2021-06-07)

### Bug Fixes

- when select columns in lists all works ([ca2284a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/ca2284a158cff8f4c37a49b06cbe1ada8ca6f3c0)), closes [P21-1990](https://bloobirds.atlassian.net/browse/P21-1990)

## [2.18.0](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.17.0...v2.18.0) (2021-06-07)

### Features

- add use to dashboard group by option ([787ed97](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/787ed97b1d0f0d6bb03d2de3332e539bbbcf6a6e))
- display group by field name on panel disclaimer ([3b54fa5](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/3b54fa5f4b845025a0c3c1bf6dc2a3a1798df45e))
- split funnel dashboards into "Delivered" and "Prospection" ([c4f102c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/c4f102c8e42008ddb8aea4756e3aa9dc8ea2934b))

### Bug Fixes

- when filtering by company in company list, now works ([5c99665](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/5c99665f479ad1c3c76da9c9b5d5ccad53a15640)), closes [P21-1990](https://bloobirds.atlassian.net/browse/P21-1990)
- **dashboards:** typo on report name ([dd64e0b](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/dd64e0ba2f22ead2af162684ca12e09297f905d0))

## [2.18.0-preprod.1](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.17.0...v2.18.0-preprod.1) (2021-06-07)

### Features

- add use to dashboard group by option ([787ed97](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/787ed97b1d0f0d6bb03d2de3332e539bbbcf6a6e))
- display group by field name on panel disclaimer ([3b54fa5](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/3b54fa5f4b845025a0c3c1bf6dc2a3a1798df45e))
- split funnel dashboards into "Delivered" and "Prospection" ([c4f102c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/c4f102c8e42008ddb8aea4756e3aa9dc8ea2934b))

### Bug Fixes

- when filtering by company in company list, now works ([5c99665](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/5c99665f479ad1c3c76da9c9b5d5ccad53a15640)), closes [P21-1990](https://bloobirds.atlassian.net/browse/P21-1990)
- **dashboards:** typo on report name ([dd64e0b](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/dd64e0ba2f22ead2af162684ca12e09297f905d0))

## [2.17.0](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.16.1...v2.17.0) (2021-06-05)

### Features

- **data attributes:** Data attributes for several components ([55be65d](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/55be65d3593ecb14f5ff29dfe1894b79efdcf5fb))

### Bug Fixes

- delete notification incorrect mutation ([6455634](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/6455634a99abf555f88197b959c8dad48615253e))
- don't mark as read notification if it is already read ([4a1921c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/4a1921c5bdab55b55170c0d0b7a7706917f139cd))
- **webapp:** create a new useLeads's node to save the leads needed to the BobjectForm ([cb8d799](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/cb8d7994e141fa3a4b4ba35187e2783e8c121898))
- **webapp:** when edit an activity the lead select is empty ([b2818b5](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/b2818b5e00a01d654fa1207a30f5ff051fe36755))
- bobject fields not rerendering task feed ([a1bc6e8](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/a1bc6e812795a09646a3b4759ece0eaaae6c750f))
- lint fixes ([ce5d1b6](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/ce5d1b6433aee550fa9671c3e2fd561cfed85f4e))
- notification event subscription memoization ([07010be](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/07010bee9373088291796a8ca3cfb8fdca9c739d))
- react error ([e7c9f14](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e7c9f1480394afe5ec873dd2e7633fd415770d95))
- remove non-existing entities context provider ([83f5451](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/83f5451ddab3944855bfcaf4f6e79a725c744419))
- unused modules ([541a665](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/541a6651e900e006882b43f4224dd73065d9b369))
- use classnames instead of clsx ([ea13fd4](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/ea13fd434db6910b338c21c69828dfeda694468d))
- **importImprovements:** clear import state before stating a new import ([9ce1401](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/9ce1401e220ad1a74383d4af1e469fcbce012de0))

## [2.17.0-preprod.1](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.16.2-preprod.1...v2.17.0-preprod.1) (2021-06-04)

### Features

- **data attributes:** Data attributes for several components ([55be65d](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/55be65d3593ecb14f5ff29dfe1894b79efdcf5fb))

### Bug Fixes

- delete notification incorrect mutation ([6455634](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/6455634a99abf555f88197b959c8dad48615253e))
- don't mark as read notification if it is already read ([4a1921c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/4a1921c5bdab55b55170c0d0b7a7706917f139cd))

### [2.16.2-preprod.1](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.16.1...v2.16.2-preprod.1) (2021-06-03)

### Bug Fixes

- **webapp:** when edit an activity the lead select is empty ([b2818b5](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/b2818b5e00a01d654fa1207a30f5ff051fe36755))
- bobject fields not rerendering task feed ([a1bc6e8](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/a1bc6e812795a09646a3b4759ece0eaaae6c750f))
- react error ([e7c9f14](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e7c9f1480394afe5ec873dd2e7633fd415770d95))
- **webapp:** create a new useLeads's node to save the leads needed to the BobjectForm ([cb8d799](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/cb8d7994e141fa3a4b4ba35187e2783e8c121898))
- lint fixes ([ce5d1b6](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/ce5d1b6433aee550fa9671c3e2fd561cfed85f4e))
- notification event subscription memoization ([07010be](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/07010bee9373088291796a8ca3cfb8fdca9c739d))
- remove non-existing entities context provider ([83f5451](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/83f5451ddab3944855bfcaf4f6e79a725c744419))
- unused modules ([541a665](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/541a6651e900e006882b43f4224dd73065d9b369))
- use classnames instead of clsx ([ea13fd4](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/ea13fd434db6910b338c21c69828dfeda694468d))
- **importImprovements:** clear import state before stating a new import ([9ce1401](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/9ce1401e220ad1a74383d4af1e469fcbce012de0))

### [2.16.1](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.16.0...v2.16.1) (2021-06-01)

### Bug Fixes

- fix error when we try to start cadence with a lead without ICP ([e4031c0](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e4031c06297c6922fb45d51a3b34d4aa216b474f)), closes [P21-1865](https://bloobirds.atlassian.net/browse/P21-1865)

### [2.16.1-preprod.1](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.16.0...v2.16.1-preprod.1) (2021-06-01)

### Bug Fixes

- fix error when we try to start cadence with a lead without ICP ([e4031c0](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e4031c06297c6922fb45d51a3b34d4aa216b474f)), closes [P21-1865](https://bloobirds.atlassian.net/browse/P21-1865)

## [2.16.0](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.15.0...v2.16.0) (2021-06-01)

### Features

- some amazing new commands for developers ([58d9b7b](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/58d9b7bfca65bf68cdfec8e6e106225a4e47b374))

### Bug Fixes

- **webapp:** company new contact flow ([75c8a9f](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/75c8a9fa30dfea1960e299a5f457b27404892576))
- **webapp:** fix ([ec16482](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/ec164827518ff27fd953ba91eebfaa29267133e6))
- **webapp:** if not exists the lead, dont send the property ([f08f40b](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/f08f40b498851b29ca5a046a33e282cc49074509))
- **webapp:** remove unused variables ([54bd1a9](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/54bd1a9d910b9d3bd2689323ca12320208ca4433))
- **webapp:** report result button dont open the correct step ([44999de](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/44999dedd39825ea13956a86475154e86a36d58b))
- app environment on build ([bdc5529](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/bdc5529031c83b3bcf2dc38383a4aed017ba3723))

## [2.16.0-preprod.1](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.15.0...v2.16.0-preprod.1) (2021-05-31)

### Features

- some amazing new commands for developers ([58d9b7b](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/58d9b7bfca65bf68cdfec8e6e106225a4e47b374))

### Bug Fixes

- **webapp:** company new contact flow ([75c8a9f](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/75c8a9fa30dfea1960e299a5f457b27404892576))
- **webapp:** fix ([ec16482](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/ec164827518ff27fd953ba91eebfaa29267133e6))
- **webapp:** if not exists the lead, dont send the property ([f08f40b](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/f08f40b498851b29ca5a046a33e282cc49074509))
- **webapp:** remove unused variables ([54bd1a9](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/54bd1a9d910b9d3bd2689323ca12320208ca4433))
- **webapp:** report result button dont open the correct step ([44999de](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/44999dedd39825ea13956a86475154e86a36d58b))
- app environment on build ([bdc5529](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/bdc5529031c83b3bcf2dc38383a4aed017ba3723))

## [2.15.0](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.14.1...v2.15.0) (2021-05-30)

### Features

- **webapp:** Create or assign a lead directly from the opportunity view ([9c04609](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/9c04609948c18795e24d6d394edadf144c30ab6b))

### Bug Fixes

- **webapp:** revert [P21-1853](https://bloobirds.atlassian.net/browse/P21-1853) ([c1ef53e](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/c1ef53e3750fece61f4168d75bc0918223a6643d))
- add phone as field to parse for the query ([6a52a08](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/6a52a08a7866f48af35450875796d1fc1f89bfe5))
- added some more suspense fallbacks and removed some of the flickers ([756b498](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/756b4981a18673e0097d3a6181569df4fd6b4687))
- clean state of activities and change the filters ([6faeacd](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/6faeacd75448580c9760706d30fc560d2e243f57))
- cleaning the local storage more aggressively ([577a3ec](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/577a3ec4ef8d8b5f98c3d99c5030f502bc0775b7))
- make a comparison of objects between default and state of form to don't duplicate keys ([80742d9](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/80742d95ae3ff44e7bb6de3469fc02830fc1a90b))
- reverted [P21-1853](https://bloobirds.atlassian.net/browse/P21-1853) and moved changed the logic to work with companies without leads and opportunities ([17f5b64](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/17f5b64df7d04c4eb53d4ff4bc783a5a59885bf3)), closes [P21-1863](https://bloobirds.atlassian.net/browse/P21-1863)
- reverted [P21-1853](https://bloobirds.atlassian.net/browse/P21-1853) and moved changed the logic to work with companies without leads and opportunities ([2363a23](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/2363a237dae99c43d1f58589f5066d3b125d3a7f)), closes [P21-1863](https://bloobirds.atlassian.net/browse/P21-1863)
- **webapp:** count company leads ([600cbb4](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/600cbb4969ff443f152efb4606231362364801f1))
- **webapp:** Screen freezes and notes do not appear on dialer ([a56c8ba](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/a56c8ba363cc71dfac457804529dddaf95efd40c))
- **webapp:** unselect ([1a373e0](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/1a373e0ef7d68beaf325e165a8cb7af6eada3252))

## [2.15.0-preprod.4](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.15.0-preprod.3...v2.15.0-preprod.4) (2021-05-30)

### Bug Fixes

- make a comparison of objects between default and state of form to don't duplicate keys ([80742d9](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/80742d95ae3ff44e7bb6de3469fc02830fc1a90b))
- reverted [P21-1853](https://bloobirds.atlassian.net/browse/P21-1853) and moved changed the logic to work with companies without leads and opportunities ([17f5b64](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/17f5b64df7d04c4eb53d4ff4bc783a5a59885bf3)), closes [P21-1863](https://bloobirds.atlassian.net/browse/P21-1863)
- reverted [P21-1853](https://bloobirds.atlassian.net/browse/P21-1853) and moved changed the logic to work with companies without leads and opportunities ([2363a23](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/2363a237dae99c43d1f58589f5066d3b125d3a7f)), closes [P21-1863](https://bloobirds.atlassian.net/browse/P21-1863)

## [2.15.0-preprod.3](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.15.0-preprod.2...v2.15.0-preprod.3) (2021-05-29)

### Bug Fixes

- **webapp:** revert [P21-1853](https://bloobirds.atlassian.net/browse/P21-1853) ([c1ef53e](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/c1ef53e3750fece61f4168d75bc0918223a6643d))

## [2.15.0-preprod.2](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.15.0-preprod.1...v2.15.0-preprod.2) (2021-05-28)

### Bug Fixes

- **webapp:** Screen freezes and notes do not appear on dialer ([a56c8ba](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/a56c8ba363cc71dfac457804529dddaf95efd40c))
- add phone as field to parse for the query ([6a52a08](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/6a52a08a7866f48af35450875796d1fc1f89bfe5))
- clean state of activities and change the filters ([6faeacd](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/6faeacd75448580c9760706d30fc560d2e243f57))

## [2.15.0-preprod.1](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.14.1...v2.15.0-preprod.1) (2021-05-28)

### Features

- **webapp:** Create or assign a lead directly from the opportunity view ([9c04609](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/9c04609948c18795e24d6d394edadf144c30ab6b))

### Bug Fixes

- added some more suspense fallbacks and removed some of the flickers ([756b498](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/756b4981a18673e0097d3a6181569df4fd6b4687))
- cleaning the local storage more aggressively ([577a3ec](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/577a3ec4ef8d8b5f98c3d99c5030f502bc0775b7))
- **webapp:** count company leads ([600cbb4](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/600cbb4969ff443f152efb4606231362364801f1))
- **webapp:** unselect ([1a373e0](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/1a373e0ef7d68beaf325e165a8cb7af6eada3252))

### [2.14.1](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.14.0...v2.14.1) (2021-05-27)

### Bug Fixes

- **webapp:** upgrade components library ([1934457](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/1934457480519884ea0841ba491ff270c0a59bbb))
- start cadence tasks are not taken into account ([f8d991c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/f8d991c87898f9387bff8317773eed0adeb103c6))

### [2.14.1-preprod.1](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.14.0...v2.14.1-preprod.1) (2021-05-27)

### Bug Fixes

- **webapp:** upgrade components library ([1934457](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/1934457480519884ea0841ba491ff270c0a59bbb))
- start cadence tasks are not taken into account ([f8d991c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/f8d991c87898f9387bff8317773eed0adeb103c6))

## [2.14.0](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.13.2...v2.14.0) (2021-05-26)

### Features

- filters working with default values ([443e57b](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/443e57b6d58c85958c3c1e4215481b6b0011e52c))
- filters working, default values missing ([9a3b70a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/9a3b70a411176f22aee2acd2f5f6807d13245521))
- first investigation of inactive companies ([af2a439](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/af2a439c24734d9d6cd892a34afa6c63f8788e9b))
- ready to start testing! ([8c7e3ce](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/8c7e3ce517a8ea68ae1a7f2c947e60ab353918c1))
- started with text filters ([67467f8](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/67467f8d82fccf5d040201d294fbbf23892ffcde))

### Bug Fixes

- early bug detected ([155fd93](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/155fd93d23a5be85d1d8c5bcf18559d6fb625caa))
- fixed review ([ea16677](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/ea166777e37e432e80420840f1627dd5ff1be8fc))
- fullsales ([80fab3b](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/80fab3bf6a894214a561868f84a012b44c25d782))
- other bug on no fullsales ([cec6add](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/cec6add6ff35cc4926533c1caeb4bb0237a903e9))
- some bugs ([7e5a524](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/7e5a52487399b5dc8ce255bd810f84fd86f30122))
- **webapp:** log call manually, when save a note, not working ([b1c0016](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/b1c0016cf87f01e978b3a79c16c3a04327507560))
- some conclusions after reviewing PR ([e56e4b4](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e56e4b47d18c9b53462a026bbcf970d154d192e8))
- use the same modal to add a qc to lead ([cf80ebe](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/cf80ebefbd944b596da10f548809536051795678))

## [2.14.0-preprod.1](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.13.2...v2.14.0-preprod.1) (2021-05-26)

### Features

- filters working with default values ([443e57b](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/443e57b6d58c85958c3c1e4215481b6b0011e52c))
- filters working, default values missing ([9a3b70a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/9a3b70a411176f22aee2acd2f5f6807d13245521))
- first investigation of inactive companies ([af2a439](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/af2a439c24734d9d6cd892a34afa6c63f8788e9b))
- ready to start testing! ([8c7e3ce](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/8c7e3ce517a8ea68ae1a7f2c947e60ab353918c1))
- started with text filters ([67467f8](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/67467f8d82fccf5d040201d294fbbf23892ffcde))

### Bug Fixes

- early bug detected ([155fd93](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/155fd93d23a5be85d1d8c5bcf18559d6fb625caa))
- fixed review ([ea16677](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/ea166777e37e432e80420840f1627dd5ff1be8fc))
- fullsales ([80fab3b](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/80fab3bf6a894214a561868f84a012b44c25d782))
- other bug on no fullsales ([cec6add](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/cec6add6ff35cc4926533c1caeb4bb0237a903e9))
- some bugs ([7e5a524](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/7e5a52487399b5dc8ce255bd810f84fd86f30122))
- **webapp:** log call manually, when save a note, not working ([b1c0016](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/b1c0016cf87f01e978b3a79c16c3a04327507560))
- some conclusions after reviewing PR ([e56e4b4](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e56e4b47d18c9b53462a026bbcf970d154d192e8))
- use the same modal to add a qc to lead ([cf80ebe](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/cf80ebefbd944b596da10f548809536051795678))

### [2.13.2](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.13.1...v2.13.2) (2021-05-25)

### Bug Fixes

- make a provisional remove of row to avoid wait the subscription to work ([32247f9](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/32247f968ed96cb8240cda3acddd766a31546d7a))
- removed the unnecessary breakline parsing ([e9d9020](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e9d9020dacd64d2deccb4d6e101fa7354bd3241e)), closes [P21-1816](https://bloobirds.atlassian.net/browse/P21-1816)
- removed the unnecessary breakline parsing ([d11cd2b](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/d11cd2b6b2e13c40290ef349c7c9e9aa19d2b6f7)), closes [P21-1816](https://bloobirds.atlassian.net/browse/P21-1816)

### [2.13.2-preprod.1](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.13.1...v2.13.2-preprod.1) (2021-05-25)

### Bug Fixes

- make a provisional remove of row to avoid wait the subscription to work ([32247f9](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/32247f968ed96cb8240cda3acddd766a31546d7a))
- removed the unnecessary breakline parsing ([e9d9020](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e9d9020dacd64d2deccb4d6e101fa7354bd3241e)), closes [P21-1816](https://bloobirds.atlassian.net/browse/P21-1816)
- removed the unnecessary breakline parsing ([d11cd2b](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/d11cd2b6b2e13c40290ef349c7c9e9aa19d2b6f7)), closes [P21-1816](https://bloobirds.atlassian.net/browse/P21-1816)

### [2.13.1](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.13.0...v2.13.1) (2021-05-25)

### Bug Fixes

- **webapp:** Dialer calls from a different phone number ([6aee2dd](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/6aee2dd3803710572b3a4e065d2710b97ae0f352))

### [2.13.1-preprod.1](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.13.0...v2.13.1-preprod.1) (2021-05-25)

### Bug Fixes

- **webapp:** Dialer calls from a different phone number ([6aee2dd](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/6aee2dd3803710572b3a4e065d2710b97ae0f352))

## [2.13.0](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.12.1...v2.13.0) (2021-05-19)

### Features

- **Data attributes:** data attributes for lead status feature ([e133e72](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e133e725a10429bfc378facdbcf05be115437f25))
- **Data attributes:** data attributes for lead status feature ([22ab009](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/22ab00927762445163ced793451c2e0486e135a2))
- **Data attributes:** data attributes for minimizable modal & call result ([8d716b1](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/8d716b1153fe2ffa4710c6fa722b5601d5f74d5a))
- **Data attributes:** data attributes for minimizable modal & call result ([11a16e6](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/11a16e6e7f025ae79bcc08ddb0f13c040777dda1))
- **Data attributes:** data attributes for report result feature ([94ab1d7](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/94ab1d78d6c14016e3380814992d55de0a901f41))
- **log-calls:** get and store dialer default view value ([3f5ce4c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/3f5ce4c072b904feb546146c4dd47a7dd5f4e452))
- **webap:** move onclick ([0cd5764](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/0cd576446f8e10b2e24baaa1c70d7ac8b01de93e))
- **webapp:** add a method to make a patch in a lead ([c4753f0](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/c4753f0a70c12ccc2f2436edd474f3450445b531))
- **webapp:** add field for opportunity id ([7e8561d](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/7e8561d9caa52b952660ac1183ff8be1bc9c434d))
- **webapp:** add handleClose callback and fix the save method ([a3ab3c3](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/a3ab3c3efe0dee7cf7fd7bbe40caa1849e1de861))
- **webapp:** add handleNext after save the cadence configuration ([817a4ed](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/817a4ed7748499a5cd8dda8310089cf6ae2dc721))
- **webapp:** add in user settings the enable Log call tab ([ca58c0f](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/ca58c0fd6a25bc0a53570d0b7e466a60c4a4e22e))
- **webapp:** add md5 library ([565369d](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/565369d7cfd4fda666d6c5734731dbc8b55db985))
- **webapp:** add new prop in the save function ([d773aed](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/d773aed2c2c1a0d547bdc02d6ab8e2d4cf1dcfad))
- **webapp:** add test to CadenceControl machine ([cd96405](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/cd96405bc03ce39e4d359912055454aaf1c73917))
- **webapp:** add the new logic to mark as read a notification ([19d6b0b](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/19d6b0b0cce38d9561f84fb4b1955a7ff9a302c2))
- **webapp:** add the select to select the dialer default view in the user settings page ([d572613](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/d572613b53f070bc1c7648555aa763a8bb407d60))
- **webapp:** call configuration component ([6266871](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/6266871b90e8d4b3c66ecff19613555645ec3134))
- **webapp:** change the toastr text ([85a52da](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/85a52da59ac22372fa73ac04141de0b0961d7c18))
- **webapp:** changes in the style and use the new fetch ([94cad62](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/94cad62fb57608cc50c0c2f3824450ff5835c556))
- **webapp:** data needed to scrapping ([2fe186e](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/2fe186e3dffd85d5736f57900f8e0d5e145c358e))
- **webapp:** fetch leads by opportunity id ([880bb09](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/880bb094a013198d6be0d95d3ea4d0c3d1946540))
- **webapp:** fix lead phone ([5c38c99](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/5c38c99c81afd5b74ba532435996e405d482e7e2))
- **webapp:** fixes in the layout ([8f750c2](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/8f750c27bf486a914373226d4a86bdc3edfd1ad7))
- **webapp:** get all info needed ([fb01590](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/fb01590acec19cb89182037931793528706b8840))
- **webapp:** handle log call ([d29e914](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/d29e9144a0e1a7897e0d788d15049501939cda42))
- **webapp:** has previous step ([20b0017](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/20b00179c52e996ff7c35f3c477fd9dc83fc5f35))
- **webapp:** list of status and opps ([4afa0e3](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/4afa0e3405b0194fb6ce91520bcea8e7a4bacadb))
- **webapp:** merge components ([221c68b](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/221c68bcb49e13728477c377afcc22a2b7500b0b))
- **webapp:** minor changes in the stylesheet ([ecbaa65](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/ecbaa65ae13ad747e8ccb657cd8b49225cae69ce))
- **webapp:** modify the machine and rename the status step ([fb76d68](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/fb76d68b9a30e32f89bbcafa0bc1a108fd62f21f))
- **webapp:** move style and functions ([74f3581](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/74f3581c075775bc85302680696b78da5dc8d83c))
- **webapp:** move the call configuration stylesheet ([ff82369](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/ff8236959d94e6a314dd49f546df3360139b4604))
- **webapp:** move the dialerTab code into dialer.view ([da43998](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/da43998dcf04dfb536ea632d3dc5058956e09dd2))
- **webapp:** move the dialerWeb code into a new component ([54b2c6c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/54b2c6cb976647361c78ce2a7e30dc7d5e9ec35c))
- **webapp:** new constant ([c4c8f1c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/c4c8f1cd6a6c689a702fe8d702377daf79c8d58f))
- **webapp:** new hook to manage the lead reasons for discarded/nurturing status ([0e9e2ba](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/0e9e2baa3077a6d0e82f1760e294bfda82ecc6cb))
- **webapp:** new labels dropdown component ([f742b29](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/f742b2900c00d24e6dbe0a52f2e8572b61e38b81))
- **webapp:** new lead card component ([c354b71](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/c354b71d7b2bb6b63414bbd8a44fe7136aa0b4f0))
- **webapp:** notifications tabs style ([f70f5dc](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/f70f5dc32f7d3e9242ca8f4edc5f6df7db955331))
- **webapp:** remove bck button when there is not previous step ([4906810](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/4906810af326a16e52b9a43608aaef3ca122b1f6))
- **webapp:** remove commented line ([f654237](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/f6542374d44f2c82add95a8ab505cb2ced208b6a))
- **webapp:** remove console ([3dac1e1](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/3dac1e1c993ce8c7ecaf1c8537c5201aac7cefa2))
- **webapp:** remove unused component ([57403a5](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/57403a534971c68421f4d42fbff5935cb245afd7))
- **webapp:** remove unused file ([af7a536](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/af7a536f389aa22fea66b3778e23076c718d7c6c))
- **webapp:** rename dialerWeb component ([bee55ad](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/bee55ad118cad7a4a12926bc8af477c0bae633f6))
- **webapp:** revert some changes ([26f57b2](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/26f57b2d0e045b44fde41b9e4b156a77ae3fc9d4))
- **webapp:** set handleSave callback ([b3eaac1](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/b3eaac1675935636d05eca9a55eb9a8e18c69211))
- **webapp:** split code ([516a0d2](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/516a0d299e08b5f6d4c3e2104114d3bee2f4533a))
- **webapp:** split the stylesheet ([ad037ae](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/ad037ae0549716cd43e3d9e0a263bea2bee0e44e))
- **webapp:** start to use the new component ([f964278](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/f9642789047065c2b16b4bf7c22ace4d262ba9e6))
- **webapp:** style ([c82fe81](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/c82fe81ee5b8231b4b7d85d0bec0be5b8d19029f))
- **webapp:** sync the lead status changes and the lead reasons ([7097415](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/7097415e3c585e11d4dca40c40b3ee6603f9e497))
- **webapp:** toastr ([5431734](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/54317343c128cd00413bcc7ee62d7a4f37dc59b5))
- **webapp:** upgrade components library ([f224a43](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/f224a43ad96d42a7223af5fd69c997baf75e90e7))
- **webapp:** upgrade de components library ([575bfd2](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/575bfd2c64f31658e2a86da1f37f4edf8cdb166c))
- **webapp:** upgrade the version of the components library ([f82fa0e](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/f82fa0e2b1cfdc921b8b8531d3a7a51343a2af93))
- **webapp:** use the library useForm to manage the data and save it ([85bdf9e](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/85bdf9e39c46ba32a5ce5e54201c827c1d1e8617))
- **webapp:** use the new component ([92e8965](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/92e89655d63be479a5d2a549bc6e4f58365fd683))
- **webapp:** use the new component into the status step ([662006c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/662006c36aca668c2271ae53a4905dcdf1ea39d9))
- **webapp:** WIP not show the lead status step if the company/opp dont have leads ([70931ac](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/70931ac19250610def4fdfbc6e9fddefea84c4e3))
- **Webapp:** create utils function related to Lead ([c7f556b](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/c7f556b68a74147456c336c10d3757bab30d6d88))
- **Webapp:** Dialer display features ([aecee03](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/aecee03b24de549a5db5d9874f9bf31f2ae46c9a))
- **Webapp:** Log call css ([1eef72c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/1eef72c37f326faf138713cf98bb5f0b9cb887eb))
- **Webapp:** Tab switch for Dialer ([e0ca3a6](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e0ca3a6bf4c3b986a08c1ab7e26e6d531874e1f3))
- **webpp:** In the Contact page, add in 'More options' menu a new option to 'Update Lead statuses' ([c862ae1](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/c862ae194b0cc613b00f53d2cd5746717b22def1))

### Bug Fixes

- company bad retrieved when creating task ([c19de8d](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/c19de8d2d8ec694a7f6c5ed306f7e55782a45671))
- Fix reschedule cadence in opportunity ([03e5454](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/03e54545dd04694999618b1b0703e79d46cf149e)), closes [P21-1804](https://bloobirds.atlassian.net/browse/P21-1804)
- **webapp:** default tab and default direction ([f89993e](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/f89993e366b84664810cb11724a31de0cceb96df))
- **webapp:** disable link when there is not leads ([745699f](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/745699fc011d8e6cdaecd7f00434a506209f5d93))
- **webapp:** error in open the modal ([41e2731](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/41e27317503ad86bd1f62396c1c0c3496654baab))
- **webapp:** first load reasons ([8e916f6](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/8e916f6e905397197e62794a8fba8741c12272b2))
- **webapp:** if you access a lead without a company, the Update lead status is empty ([b5322cd](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/b5322cd9d8c93fe0a02282c5a8b9c0a854f82863))
- **webapp:** lead opp ([b2a7f42](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/b2a7f42e8d05d66c5f553c647e0dcc92ad86d0e1))
- **webapp:** log call fixes ([8645da1](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/8645da13c1d3697dee80e320b906206b02c7c99c))
- **webapp:** not reset the default tab ([691e43f](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/691e43fc6ecd297562f2922a4d184f49c91f8462))
- **webapp:** order the list statuses by 'ordering' and filtering by enabled statuses ([444e4ba](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/444e4ba94a10f1fc710db81fec9c5656cb4b0140))
- **webapp:** the cursor pointer is shown outside of the label selector ([c52c82c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/c52c82c759934f5347c7ecbff7bb0b5f794a40ca))
- **webapp:** the subscription not update the unread number ([f61a8c7](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/f61a8c7b78503ac271a614913c19be91e44fe94a))
- **webapp:** The update lead status is loading the skeleton before the leads when selecting the button ([e44ef38](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e44ef38253769d1d83c591a40eb99b6cf3e6f00e))
- **webapp:** when is an opportunity the leads are not loaded ([dc96d98](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/dc96d988d012a9c70acbe4b9ac538b41a59f4973))

## [2.13.0-preprod.4](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.13.0-preprod.3...v2.13.0-preprod.4) (2021-05-19)

### Features

- **Data attributes:** data attributes for lead status feature ([e133e72](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e133e725a10429bfc378facdbcf05be115437f25))
- **Data attributes:** data attributes for lead status feature ([22ab009](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/22ab00927762445163ced793451c2e0486e135a2))
- **Data attributes:** data attributes for minimizable modal & call result ([8d716b1](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/8d716b1153fe2ffa4710c6fa722b5601d5f74d5a))
- **Data attributes:** data attributes for minimizable modal & call result ([11a16e6](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/11a16e6e7f025ae79bcc08ddb0f13c040777dda1))
- **Data attributes:** data attributes for report result feature ([94ab1d7](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/94ab1d78d6c14016e3380814992d55de0a901f41))
- **webapp:** add field for opportunity id ([7e8561d](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/7e8561d9caa52b952660ac1183ff8be1bc9c434d))
- **webapp:** data needed to scrapping ([2fe186e](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/2fe186e3dffd85d5736f57900f8e0d5e145c358e))

### Bug Fixes

- company bad retrieved when creating task ([c19de8d](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/c19de8d2d8ec694a7f6c5ed306f7e55782a45671))
- Fix reschedule cadence in opportunity ([03e5454](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/03e54545dd04694999618b1b0703e79d46cf149e)), closes [P21-1804](https://bloobirds.atlassian.net/browse/P21-1804)

## [2.13.0-preprod.3](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.13.0-preprod.2...v2.13.0-preprod.3) (2021-05-19)

### Features

- **log-calls:** get and store dialer default view value ([3f5ce4c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/3f5ce4c072b904feb546146c4dd47a7dd5f4e452))
- **webapp:** add handleClose callback and fix the save method ([a3ab3c3](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/a3ab3c3efe0dee7cf7fd7bbe40caa1849e1de861))
- **webapp:** add in user settings the enable Log call tab ([ca58c0f](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/ca58c0fd6a25bc0a53570d0b7e466a60c4a4e22e))
- **webapp:** add md5 library ([565369d](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/565369d7cfd4fda666d6c5734731dbc8b55db985))
- **webapp:** add new prop in the save function ([d773aed](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/d773aed2c2c1a0d547bdc02d6ab8e2d4cf1dcfad))
- **webapp:** add the select to select the dialer default view in the user settings page ([d572613](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/d572613b53f070bc1c7648555aa763a8bb407d60))
- **webapp:** call configuration component ([6266871](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/6266871b90e8d4b3c66ecff19613555645ec3134))
- **webapp:** fix lead phone ([5c38c99](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/5c38c99c81afd5b74ba532435996e405d482e7e2))
- **webapp:** handle log call ([d29e914](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/d29e9144a0e1a7897e0d788d15049501939cda42))
- **webapp:** merge components ([221c68b](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/221c68bcb49e13728477c377afcc22a2b7500b0b))
- **webapp:** move style and functions ([74f3581](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/74f3581c075775bc85302680696b78da5dc8d83c))
- **webapp:** move the call configuration stylesheet ([ff82369](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/ff8236959d94e6a314dd49f546df3360139b4604))
- **webapp:** move the dialerTab code into dialer.view ([da43998](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/da43998dcf04dfb536ea632d3dc5058956e09dd2))
- **webapp:** move the dialerWeb code into a new component ([54b2c6c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/54b2c6cb976647361c78ce2a7e30dc7d5e9ec35c))
- **webapp:** remove unused component ([57403a5](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/57403a534971c68421f4d42fbff5935cb245afd7))
- **webapp:** rename dialerWeb component ([bee55ad](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/bee55ad118cad7a4a12926bc8af477c0bae633f6))
- **webapp:** revert some changes ([26f57b2](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/26f57b2d0e045b44fde41b9e4b156a77ae3fc9d4))
- **webapp:** split code ([516a0d2](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/516a0d299e08b5f6d4c3e2104114d3bee2f4533a))
- **webapp:** start to use the new component ([f964278](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/f9642789047065c2b16b4bf7c22ace4d262ba9e6))
- **Webapp:** Dialer display features ([aecee03](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/aecee03b24de549a5db5d9874f9bf31f2ae46c9a))
- **Webapp:** Log call css ([1eef72c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/1eef72c37f326faf138713cf98bb5f0b9cb887eb))
- **Webapp:** Tab switch for Dialer ([e0ca3a6](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e0ca3a6bf4c3b986a08c1ab7e26e6d531874e1f3))

### Bug Fixes

- **webapp:** default tab and default direction ([f89993e](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/f89993e366b84664810cb11724a31de0cceb96df))
- **webapp:** log call fixes ([8645da1](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/8645da13c1d3697dee80e320b906206b02c7c99c))
- **webapp:** not reset the default tab ([691e43f](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/691e43fc6ecd297562f2922a4d184f49c91f8462))

## [2.13.0-preprod.2](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.13.0-preprod.1...v2.13.0-preprod.2) (2021-05-18)

### Bug Fixes

- **webapp:** The update lead status is loading the skeleton before the leads when selecting the button ([e44ef38](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e44ef38253769d1d83c591a40eb99b6cf3e6f00e))

## [2.13.0-preprod.1](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.12.1...v2.13.0-preprod.1) (2021-05-18)

### Features

- **webap:** move onclick ([0cd5764](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/0cd576446f8e10b2e24baaa1c70d7ac8b01de93e))
- **webapp:** add a method to make a patch in a lead ([c4753f0](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/c4753f0a70c12ccc2f2436edd474f3450445b531))
- **webapp:** add handleNext after save the cadence configuration ([817a4ed](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/817a4ed7748499a5cd8dda8310089cf6ae2dc721))
- **webapp:** add test to CadenceControl machine ([cd96405](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/cd96405bc03ce39e4d359912055454aaf1c73917))
- **webapp:** add the new logic to mark as read a notification ([19d6b0b](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/19d6b0b0cce38d9561f84fb4b1955a7ff9a302c2))
- **webapp:** change the toastr text ([85a52da](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/85a52da59ac22372fa73ac04141de0b0961d7c18))
- **webapp:** changes in the style and use the new fetch ([94cad62](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/94cad62fb57608cc50c0c2f3824450ff5835c556))
- **webapp:** fetch leads by opportunity id ([880bb09](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/880bb094a013198d6be0d95d3ea4d0c3d1946540))
- **webapp:** fixes in the layout ([8f750c2](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/8f750c27bf486a914373226d4a86bdc3edfd1ad7))
- **webapp:** get all info needed ([fb01590](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/fb01590acec19cb89182037931793528706b8840))
- **webapp:** has previous step ([20b0017](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/20b00179c52e996ff7c35f3c477fd9dc83fc5f35))
- **webapp:** list of status and opps ([4afa0e3](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/4afa0e3405b0194fb6ce91520bcea8e7a4bacadb))
- **webapp:** minor changes in the stylesheet ([ecbaa65](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/ecbaa65ae13ad747e8ccb657cd8b49225cae69ce))
- **webapp:** modify the machine and rename the status step ([fb76d68](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/fb76d68b9a30e32f89bbcafa0bc1a108fd62f21f))
- **webapp:** new constant ([c4c8f1c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/c4c8f1cd6a6c689a702fe8d702377daf79c8d58f))
- **webapp:** new hook to manage the lead reasons for discarded/nurturing status ([0e9e2ba](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/0e9e2baa3077a6d0e82f1760e294bfda82ecc6cb))
- **webapp:** new labels dropdown component ([f742b29](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/f742b2900c00d24e6dbe0a52f2e8572b61e38b81))
- **webapp:** new lead card component ([c354b71](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/c354b71d7b2bb6b63414bbd8a44fe7136aa0b4f0))
- **webapp:** notifications tabs style ([f70f5dc](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/f70f5dc32f7d3e9242ca8f4edc5f6df7db955331))
- **webapp:** remove bck button when there is not previous step ([4906810](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/4906810af326a16e52b9a43608aaef3ca122b1f6))
- **webapp:** remove commented line ([f654237](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/f6542374d44f2c82add95a8ab505cb2ced208b6a))
- **webapp:** remove console ([3dac1e1](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/3dac1e1c993ce8c7ecaf1c8537c5201aac7cefa2))
- **webapp:** remove unused file ([af7a536](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/af7a536f389aa22fea66b3778e23076c718d7c6c))
- **webapp:** set handleSave callback ([b3eaac1](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/b3eaac1675935636d05eca9a55eb9a8e18c69211))
- **webapp:** split the stylesheet ([ad037ae](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/ad037ae0549716cd43e3d9e0a263bea2bee0e44e))
- **webapp:** style ([c82fe81](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/c82fe81ee5b8231b4b7d85d0bec0be5b8d19029f))
- **webapp:** sync the lead status changes and the lead reasons ([7097415](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/7097415e3c585e11d4dca40c40b3ee6603f9e497))
- **webapp:** toastr ([5431734](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/54317343c128cd00413bcc7ee62d7a4f37dc59b5))
- **webapp:** upgrade components library ([f224a43](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/f224a43ad96d42a7223af5fd69c997baf75e90e7))
- **webapp:** upgrade de components library ([575bfd2](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/575bfd2c64f31658e2a86da1f37f4edf8cdb166c))
- **webapp:** upgrade the version of the components library ([f82fa0e](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/f82fa0e2b1cfdc921b8b8531d3a7a51343a2af93))
- **webapp:** use the library useForm to manage the data and save it ([85bdf9e](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/85bdf9e39c46ba32a5ce5e54201c827c1d1e8617))
- **webapp:** use the new component ([92e8965](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/92e89655d63be479a5d2a549bc6e4f58365fd683))
- **webapp:** use the new component into the status step ([662006c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/662006c36aca668c2271ae53a4905dcdf1ea39d9))
- **webapp:** WIP not show the lead status step if the company/opp dont have leads ([70931ac](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/70931ac19250610def4fdfbc6e9fddefea84c4e3))
- **Webapp:** create utils function related to Lead ([c7f556b](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/c7f556b68a74147456c336c10d3757bab30d6d88))
- **webpp:** In the Contact page, add in 'More options' menu a new option to 'Update Lead statuses' ([c862ae1](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/c862ae194b0cc613b00f53d2cd5746717b22def1))

### Bug Fixes

- **webapp:** disable link when there is not leads ([745699f](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/745699fc011d8e6cdaecd7f00434a506209f5d93))
- **webapp:** error in open the modal ([41e2731](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/41e27317503ad86bd1f62396c1c0c3496654baab))
- **webapp:** first load reasons ([8e916f6](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/8e916f6e905397197e62794a8fba8741c12272b2))
- **webapp:** if you access a lead without a company, the Update lead status is empty ([b5322cd](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/b5322cd9d8c93fe0a02282c5a8b9c0a854f82863))
- **webapp:** lead opp ([b2a7f42](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/b2a7f42e8d05d66c5f553c647e0dcc92ad86d0e1))
- **webapp:** order the list statuses by 'ordering' and filtering by enabled statuses ([444e4ba](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/444e4ba94a10f1fc710db81fec9c5656cb4b0140))
- **webapp:** the cursor pointer is shown outside of the label selector ([c52c82c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/c52c82c759934f5347c7ecbff7bb0b5f794a40ca))
- **webapp:** the subscription not update the unread number ([f61a8c7](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/f61a8c7b78503ac271a614913c19be91e44fe94a))
- **webapp:** when is an opportunity the leads are not loaded ([dc96d98](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/dc96d988d012a9c70acbe4b9ac538b41a59f4973))

### [2.12.1](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.12.0...v2.12.1) (2021-05-18)

### Bug Fixes

- changed qq saving to onblur ([cada672](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/cada67216a03316ad3dde61243a134bdc1f862c5))
- fixed the crash when switching accounts ([ba0ad80](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/ba0ad803349e29f684dfd9da6e0e6c9666cd0eed)), closes [P21-1781](https://bloobirds.atlassian.net/browse/P21-1781)
- fixed the crash when switching accounts ([e3980a7](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e3980a7ad7545b6a703413875576c10fbdba1ef9)), closes [P21-1781](https://bloobirds.atlassian.net/browse/P21-1781)
- lint ([49be1ef](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/49be1ef5c21494b89ce171393939d69ef11ce959))
- only saving to the localStorage the cached entities if there is enough space left ([9aec359](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/9aec3596c1cb31ee5b91ea67b21c5067e3b0611e)), closes [P21-1780](https://bloobirds.atlassian.net/browse/P21-1780)
- only saving to the localStorage the cached entities if there is enough space left ([7b9020c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/7b9020c4ae9911bc5fa21b0f65f0342b1cddb781)), closes [P21-1780](https://bloobirds.atlassian.net/browse/P21-1780)
- remove debounce on onBlur ([a8c444d](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/a8c444ddde3955181b404521cd94fe57e6d66dd9))

### [2.12.1-preprod.2](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.12.1-preprod.1...v2.12.1-preprod.2) (2021-05-18)

### Bug Fixes

- changed qq saving to onblur ([cada672](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/cada67216a03316ad3dde61243a134bdc1f862c5))
- lint ([49be1ef](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/49be1ef5c21494b89ce171393939d69ef11ce959))
- remove debounce on onBlur ([a8c444d](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/a8c444ddde3955181b404521cd94fe57e6d66dd9))

### [2.12.1-preprod.1](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.12.0...v2.12.1-preprod.1) (2021-05-17)

### Bug Fixes

- fixed the crash when switching accounts ([ba0ad80](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/ba0ad803349e29f684dfd9da6e0e6c9666cd0eed)), closes [P21-1781](https://bloobirds.atlassian.net/browse/P21-1781)
- fixed the crash when switching accounts ([e3980a7](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e3980a7ad7545b6a703413875576c10fbdba1ef9)), closes [P21-1781](https://bloobirds.atlassian.net/browse/P21-1781)
- only saving to the localStorage the cached entities if there is enough space left ([9aec359](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/9aec3596c1cb31ee5b91ea67b21c5067e3b0611e)), closes [P21-1780](https://bloobirds.atlassian.net/browse/P21-1780)
- only saving to the localStorage the cached entities if there is enough space left ([7b9020c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/7b9020c4ae9911bc5fa21b0f65f0342b1cddb781)), closes [P21-1780](https://bloobirds.atlassian.net/browse/P21-1780)

## [2.12.0](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.11.5...v2.12.0) (2021-05-15)

### Features

- **Data Attributes:** Flow opp data attributes ([00f89d1](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/00f89d16f9a8b47f5f64c7bbaaaffd99b190598d))
- some renaming ([8cfeee7](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/8cfeee7ba226a51d3a47fb1276d91d07643a4265))
- started with starred activities ([0656a2a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/0656a2ac84e676be8dc480c56175286528b6b2c9))

### Bug Fixes

- changed the UI cz product iz to fanzy ([f89f023](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/f89f0233f7b654bb6bf6aac1e4f2334748ee47ef))
- changes requestes by patri ([52aff4a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/52aff4a3761501ee2cb822945a439c851a79d453))
- datepickers not clearning and not selecting a default value on open ([298f874](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/298f874c07fc394524ae1057eded4f01c2635a49))
- debuggger ([55929b9](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/55929b9ffd81d03765d9f667a94cb2a2be118b27))
- don't allow to pause cadences for today ([83fad1a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/83fad1a5b9abb55c1f922e40524289eb9081d393))
- dropdown not fitting on the screen ([53c2d2e](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/53c2d2e57ed51be1c15b48c75e6acb5d92b15c46))
- lint ([cf68f10](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/cf68f10dac09240eec8f8cf0db1ce7c75565915b))
- lint ([9a4dcfe](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/9a4dcfe6e9dcf6b84d4319ee3115ff5e030c6bc5))
- percentage widths not working on date pickers ([0596848](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/0596848f065e2032aff7d068dd63a39eecae5ca2))
- reduced the amount of requests, useEntity version ([ebe0985](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/ebe09856f0fab14b3e1ec6dd416b363a3ec996ab))
- use atom for fecthing email connections ([f047c88](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/f047c881c25ddffa50e17e744f9ff5d20f6422fe))
- use useEntity to fetch phonenumbers ([7037033](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/7037033ca2d5595f48bdd4f5614ec4ee9a4d5a17))
- use useEntity to fetch phonenumbers ([269698b](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/269698b5c1fde01cd37311a8367dbea44ef0efe4))
- use useEntity to fetch phonenumbers and refactor phone numbers connections ([da84065](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/da84065c3d45c665214e520df62a748f583c9cd0))
- **integrationsUI:** fixed reduce to display correctly field mappings by bobject type ([75b07b1](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/75b07b1ed8dbdc081f4933ebe95f88549fb0dcff))

## [2.12.0-preprod.4](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.12.0-preprod.3...v2.12.0-preprod.4) (2021-05-14)

### Bug Fixes

- reduced the amount of requests, useEntity version ([ebe0985](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/ebe09856f0fab14b3e1ec6dd416b363a3ec996ab))

## [2.12.0-preprod.3](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.12.0-preprod.2...v2.12.0-preprod.3) (2021-05-14)

### Bug Fixes

- debuggger ([55929b9](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/55929b9ffd81d03765d9f667a94cb2a2be118b27))
- use atom for fecthing email connections ([f047c88](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/f047c881c25ddffa50e17e744f9ff5d20f6422fe))
- use useEntity to fetch phonenumbers ([7037033](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/7037033ca2d5595f48bdd4f5614ec4ee9a4d5a17))
- use useEntity to fetch phonenumbers ([269698b](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/269698b5c1fde01cd37311a8367dbea44ef0efe4))
- use useEntity to fetch phonenumbers and refactor phone numbers connections ([da84065](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/da84065c3d45c665214e520df62a748f583c9cd0))

## [2.12.0-preprod.2](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.12.0-preprod.1...v2.12.0-preprod.2) (2021-05-14)

### Bug Fixes

- don't allow to pause cadences for today ([83fad1a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/83fad1a5b9abb55c1f922e40524289eb9081d393))

## [2.12.0-preprod.1](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.11.5...v2.12.0-preprod.1) (2021-05-14)

### Features

- **Data Attributes:** Flow opp data attributes ([00f89d1](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/00f89d16f9a8b47f5f64c7bbaaaffd99b190598d))
- some renaming ([8cfeee7](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/8cfeee7ba226a51d3a47fb1276d91d07643a4265))
- started with starred activities ([0656a2a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/0656a2ac84e676be8dc480c56175286528b6b2c9))

### Bug Fixes

- changed the UI cz product iz to fanzy ([f89f023](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/f89f0233f7b654bb6bf6aac1e4f2334748ee47ef))
- changes requestes by patri ([52aff4a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/52aff4a3761501ee2cb822945a439c851a79d453))
- datepickers not clearning and not selecting a default value on open ([298f874](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/298f874c07fc394524ae1057eded4f01c2635a49))
- dropdown not fitting on the screen ([53c2d2e](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/53c2d2e57ed51be1c15b48c75e6acb5d92b15c46))
- lint ([cf68f10](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/cf68f10dac09240eec8f8cf0db1ce7c75565915b))
- lint ([9a4dcfe](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/9a4dcfe6e9dcf6b84d4319ee3115ff5e030c6bc5))
- percentage widths not working on date pickers ([0596848](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/0596848f065e2032aff7d068dd63a39eecae5ca2))
- **integrationsUI:** fixed reduce to display correctly field mappings by bobject type ([75b07b1](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/75b07b1ed8dbdc081f4933ebe95f88549fb0dcff))

### [2.11.5](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.11.4...v2.11.5) (2021-05-14)

### Bug Fixes

- qualifying questions appear as deleted ([b2f72a3](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/b2f72a3af436a3e393cd1ae6be924588648cbd84)), closes [P21-1325](https://bloobirds.atlassian.net/browse/P21-1325)
- **webapp:** the pitches and the lead reasons not loaded ([e3460b3](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e3460b32e7cd62d4f85d8b8b56bde5225664fc05))
- reduced the amount of requests ([a3786c0](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/a3786c0bcea14700a8f02759be27eb2055148b79))
- reduced the amount of requests ([066dc15](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/066dc15554f1f0f1b0ca6f2c1f143638cc2734b7))

### [2.11.5-preprod.3](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.11.5-preprod.2...v2.11.5-preprod.3) (2021-05-13)

### Bug Fixes

- qualifying questions appear as deleted ([b2f72a3](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/b2f72a3af436a3e393cd1ae6be924588648cbd84)), closes [P21-1325](https://bloobirds.atlassian.net/browse/P21-1325)

### [2.11.5-preprod.2](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.11.5-preprod.1...v2.11.5-preprod.2) (2021-05-13)

### Bug Fixes

- **webapp:** the pitches and the lead reasons not loaded ([e3460b3](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e3460b32e7cd62d4f85d8b8b56bde5225664fc05))

### [2.11.5-preprod.1](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.11.4...v2.11.5-preprod.1) (2021-05-13)

### Bug Fixes

- reduced the amount of requests ([a3786c0](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/a3786c0bcea14700a8f02759be27eb2055148b79))
- reduced the amount of requests ([066dc15](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/066dc15554f1f0f1b0ca6f2c1f143638cc2734b7))

### [2.11.4](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.11.3...v2.11.4) (2021-05-12)

### Bug Fixes

- show tab only in qqs ([4d7370d](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/4d7370d5d1111d5ff054aacc316eb10617f2354b))

### [2.11.4-preprod.1](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.11.3...v2.11.4-preprod.1) (2021-05-12)

### Bug Fixes

- show tab only in qqs ([4d7370d](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/4d7370d5d1111d5ff054aacc316eb10617f2354b))

### [2.11.3](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.11.2...v2.11.3) (2021-05-11)

### Bug Fixes

- we were not sending the bobjectType and the calendar modal did not have the guests information ([fa41764](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/fa417644fea72b491e7a045ff4ad4ee32e3fbfc6))

### [2.11.3-preprod.1](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.11.2...v2.11.3-preprod.1) (2021-05-11)

### Bug Fixes

- we were not sending the bobjectType and the calendar modal did not have the guests information ([fa41764](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/fa417644fea72b491e7a045ff4ad4ee32e3fbfc6))

### [2.11.2](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.11.1...v2.11.2) (2021-05-10)

### Bug Fixes

- notes are not saved if lead and company field is not on the form ([3489391](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/34893910f78d78dd8f6bd510a9fede359cf68453))

### [2.11.2-preprod.1](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.11.1...v2.11.2-preprod.1) (2021-05-10)

### Bug Fixes

- notes are not saved if lead and company field is not on the form ([3489391](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/34893910f78d78dd8f6bd510a9fede359cf68453))

### [2.11.1](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.11.0...v2.11.1) (2021-05-10)

### Bug Fixes

- call recording button was not redirecting to anything ([2b8b8d5](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/2b8b8d52c2a907d0be27798fc3ed8f89f2e5b640))

### [2.11.1-preprod.1](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.11.0...v2.11.1-preprod.1) (2021-05-10)

### Bug Fixes

- call recording button was not redirecting to anything ([2b8b8d5](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/2b8b8d52c2a907d0be27798fc3ed8f89f2e5b640))

## [2.11.0](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.10.2...v2.11.0) (2021-05-08)

### Features

- **dashboards:** render evolution charts ([fadf14f](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/fadf14f25e79b1d54f19cc1085afbd87b6ca09f2))
- **integrationsUI:** added filters to integration Sync Logs page ([b8c8bc7](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/b8c8bc758032fdf291469a9164655464acda8c6a))
- **webapp:** [P21-1304](https://bloobirds.atlassian.net/browse/P21-1304) Modify the Notification component the new section ([cfcfff9](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/cfcfff982562180a1e8947936e12b38ddb67f3f7))
- **webapp:** add a new option in Account settings sidebar ([7e947bc](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/7e947bcbb908881121a9ec46900c3ab6b6a6a462))
- **webapp:** add a pair of conditions in the Report result button ([e96e19c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e96e19c9743f958d6e006d4ba38aa8d22123c0e9))
- **webapp:** add behavior for Change status step when is opened by Report result ([4cb8243](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/4cb8243eed917d69b48ebf54e5f0d5c263d1827f))
- **webapp:** add decimals to amount ([caa98a3](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/caa98a31142b1abdac0be72ff07f9ac5e575a79b))
- **webapp:** add in the machine the new status ([395eaa7](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/395eaa74e4818dced5b13712e22d434a687c8a12))
- **webapp:** add lead details in each type of notiication ([a843f7f](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/a843f7ffd38b024cf03eda2940f6a9ed242d34f9))
- **webapp:** Add Meeting Done as filter in the activity feed ([e0efa90](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e0efa909c8305455aef128a0852f7bd406889981))
- **webapp:** add new activity constants ([c02e420](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/c02e420538bf90aa39a72b5dacd758e1c20f100f))
- **webapp:** add new constant for company ([643934c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/643934c3ced41b4927eab6bc20092df6ca0b765d))
- **webapp:** add new styles ([0ad8d05](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/0ad8d0502bd164c52088c87153cd43e8a141dfc5))
- **webapp:** add onProspection status ([37e2209](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/37e2209bd3942e0538b75ba08c208cfbba6e0fcb))
- **webapp:** add opportunity type into Opportunity details ([913a731](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/913a731e744136f727547bb6e8c40a952092478a))
- **webapp:** add the new activity type ([cba3885](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/cba388544d804559eec9d04af1593840eaf16bcb))
- **webapp:** add validation ([9df6db2](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/9df6db29730083d451bcd0f12f9c8e5dea8e7a79))
- **webapp:** body layout ([328ccba](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/328ccbafcc2bba9cdae01268a41dcbf609d21364))
- **webapp:** cadence activity header ([d348b54](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/d348b545f085c8e4aa3c9832bf50536bcca37f95))
- **webapp:** cadence icon ([08ded87](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/08ded875c9727a7728ee132bc632fc5a452d922a))
- **webapp:** change texts for Cadence activities ([2fdf83c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/2fdf83c547dbd98602f753d9d8f50ef9baea56ae))
- **webapp:** Change the Account settings sidebar by the new component ([4b82abb](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/4b82abb5a04bddea00d257c78a35e7a65d0ce575))
- **webapp:** change the text if the activity is reported ([746e458](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/746e4589c492a7c224d3552dd2762cddac5a555f))
- **webapp:** changes in notification card ([4cf7cca](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/4cf7ccae3a9ce3b9ce09f74d8d3cfb5597d8ccda))
- **webapp:** checkbox logic ([8af9653](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/8af96537b35a1826c3266b319f09f6101bb40e57))
- **webapp:** closed card ([ed838cd](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/ed838cdeb3795e8a109c30f6a6145dc8aced8cd0))
- **webapp:** create a new component to ContextMenu ([11ecf97](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/11ecf97fa90d6b1945d504b001e49a99a0e1b5b4))
- **webapp:** create a new constant ([f8e333d](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/f8e333df521f1f915f14961095bf9e42b9badbe7))
- **webapp:** create a new method to report the status ([b721c77](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/b721c77edc721f8d7020dc967027dc5749d6a679))
- **webapp:** create constants for machine steps ([c9d132b](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/c9d132b5f045e24001d629cf9d18887250800178))
- **webapp:** create new hook to manage the userDefault notifications ([d42482a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/d42482a48237fe364485c77dad8a541272240852))
- **webapp:** css fixes ([921ec6f](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/921ec6f789b3c9a1d9b4f0848b259fb33271e322))
- **webapp:** delete the default users for notifications ([3bc7db5](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/3bc7db54614048a04242b8d14ef0431bb57629c6))
- **webapp:** disable the button when there is not changes ([b9ff3d6](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/b9ff3d6c317e2505a3138cf953a6da1cc1c55e2c))
- **webapp:** enable/disable button when has changes ([4526e25](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/4526e25683c304f735c908c5943a9f5b0825613b))
- **webapp:** export the new hook ([ee91544](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/ee915444f2410ec8cacfcb7a8a5b1aae15092621))
- **webapp:** fix in activity header ([9647c27](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/9647c2721306ca164a96682553bcd169798b9ed9))
- **webapp:** fix the text ([9522664](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/9522664bf9fe98add88bf61378664ee26f2b6fe3))
- **webapp:** fixes ([0c3cb22](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/0c3cb22a1c6d4c4e817d6704265801599b19e8e9))
- **webapp:** fixes ([ef973e9](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/ef973e94b407aa4940c04e4fd0efdf9a9a656bd6))
- **webapp:** for Cadence ended, open the Change status step only with Company status ([3323741](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/33237418085eb2ffc0e93d64359e7c9f5afc3cfb))
- **webapp:** glitch ([5ca0a6a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/5ca0a6a83a5fd27ad974b9ab0b49d15e52807b46))
- **webapp:** hide the message if its a company in prospection ([08e207c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/08e207c1aa6a3f5e4ed455f17107e66bb20be930))
- **webapp:** improve the code for Meetings cards ([a1e1fd2](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/a1e1fd205e10a228fbd2afe92ad860bd9863cebd))
- **webapp:** include the new modal ([cb28295](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/cb282957d93c80964752e724398851a38444e1a9))
- **webapp:** move the actionBar actions into a dropdown and add the Report result button ([16b57db](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/16b57db7772cea79b2d9fd409729354aebc82219))
- **webapp:** move the flag openContactFlow to an atom. ([7bf520e](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/7bf520e99a3420c0dd0af99733618686fc5edb99))
- **webapp:** move the replaceVariables function and new header for Inbound activities ([b09d101](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/b09d101e48257b3e24a2a9c1c1a0c9233f8222d2))
- **webapp:** new activity card for Meeting Done ([6e28d6b](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/6e28d6b682518a91f4a29503ebe406150947bed3))
- **webapp:** new activity constant ([ac53086](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/ac53086044ec1b86c65fc224b31c415df4be3394))
- **webapp:** new activity constants ([262e315](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/262e3156e184bbe5ab00f54908cf683075a5640f))
- **webapp:** new constants ([77f113a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/77f113aa7889a6f416803bde5823436506ddae66))
- **webapp:** new hook to manage the Meeting Results modal ([acf57be](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/acf57be429ba0288a2faaad0216b12c7d4fd2e6d))
- **webapp:** new modal to change the meeting results ([009bebe](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/009bebe36e90dc2df0ffd6d999552e8613ab60c6))
- **webapp:** new texts ([c2e3f02](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/c2e3f0231dc5f93ba3ea1f35a3874e081c8ef501))
- **webapp:** open the new modal ([881d5d8](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/881d5d8a5c145b60340791629de0e3d613f6ce91))
- **webapp:** remove console.debug and used file ([55d17a2](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/55d17a22dd582caa56b0fb8cfebb4ea16b1bf056))
- **webapp:** remove direction in Meeting Done header ([718a98b](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/718a98b95540517b69b74aaa99836e768b5b4aea))
- **webapp:** remove duplicate variable ([0da50fc](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/0da50fc918627bc6311d9eb1de2a3674b0d5f3d7))
- **webapp:** remove duplicate variable ([dda94f7](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/dda94f709174cb0e9065b1c1b123be6c918fe6d6))
- **webapp:** remove meeting done activity and move the Report result button to Meeting activity card ([26bb2ba](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/26bb2ba6e8c331387fa1de8c353870ac9a737e08))
- **webapp:** report result for meeting activities ([9d3a37d](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/9d3a37dbcbdb0d2ffd07f56e2d418453457158cb))
- **webapp:** revert ([39a0945](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/39a0945cc7469721993d925e932a2ad2bdda25c5))
- **webapp:** revert three rows ([e3e012d](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e3e012df5b98751c76d38a7cddfc33b9e46cc923))
- **webapp:** set as reported when save the new status ([afe399d](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/afe399d0dc803dfb275bc488ee9f7574a4430cbf))
- **webapp:** show the correct buttons in each case ([58151ed](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/58151eddfa02ab476f1f700c460abe7dceca39ef))
- **webapp:** update test for ChangeStatus machine ([f96e2b9](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/f96e2b9150a6849b0d0b751f009e3596d32d523a))
- added more minimizables and refactored the modals and the modal ([f1f1b7f](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/f1f1b7f605be4209f1e7de93b7af7f26b4522862))
- advancing on filling requiredBeforeMeeting fields ([a468109](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/a468109a676f81467e91a0cdfea4ca4c1064ce80))
- bugs fixed ([6d30ecc](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/6d30ecca7afa98df6c0aa17e549ce31c2c29b459))
- supporting opps ([9e82f93](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/9e82f93fe9e538118373be76a93917120b06d415))
- **webapp:** upgrade components library version ([59e9eba](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/59e9ebad62a749d1c5fa9b6ca915410f7911a7da))
- added the banner and fixed a bug in the signature email setting ([85a64c9](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/85a64c9c78e5571a0b4d7d2f7da8ea6c35fd61c3))
- Modify the Notification in account settings for put the default user of new lead inbound and new activity inbound ([fd2bf20](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/fd2bf20ddbc4fc39acb30043b284e46b52694e70)), closes [P21-1649](https://bloobirds.atlassian.net/browse/P21-1649)
- we support timezones in our pauses MADAFAAKAS! ([55cb337](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/55cb337185be29e9f3073e56f31aa391e8cee2c2))
- **webapp:** only the values related to the oppportunity show the Opportunity header ([4e20f56](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/4e20f567526dbe42aea49f0ecaf2a66f48b66de2))
- **webapp:** remove console.debug ([0ec5bbc](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/0ec5bbcda1bc0446da65fbcb4fcff656e4bdedea))
- **webapp:** replace variables ([92f4297](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/92f42977dd4aa46de13b3a4c74f8f24ebbd55fa0))
- **webapp:** some changes in the account settings page ([889fb11](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/889fb11bdf709585b7f5a0b491e4da1d59a173c7))
- **webapp:** try to get the cadence type ([e1aa591](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e1aa59142273d2ecfcacccd92fb34a2416bf59bf))
- **webapp:** update the activity card to the opportunity activities ([7f97cad](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/7f97cad4aca592c9188a78842a71689d3269c73a))
- **webapp:** update the atom after save the new info ([198431d](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/198431d4936e983cf790b7d3086de7d91bb8e1f9))
- **webapp:** update the Opportunity Details look and feel ([9dab05d](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/9dab05dbb97d1fc24e1ba2153b932f2894b91c3b))
- **webapp:** use the new constants ([fbb8f25](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/fbb8f258a439cfa62dcb478995b38126846fe270))
- **webapp:** use the text with variables ([7a295a6](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/7a295a6c82366cb8de07bd61148c97354f18c166))
- add datapicker and bobject types select ([92e4617](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/92e46176030eb331c1bab12a838aed11f594839c))
- add log api ([731809a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/731809a71e68fee21f4998a33ba37971bf4d890a))
- be able set log status and date range ([e136ec4](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e136ec4995bcdb412949a6faa65223268129df0d))
- change api call ([bf15359](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/bf1535925c697c801d16fe8c4f7cb75951dd5630))
- finished pause periods cards, let's begin with cadence preview ([6d01822](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/6d018228728deb67f921873e52afd088b398c4e9))
- fixed styling issue in card ([cc18165](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/cc18165b17de07916b474315d0f4dfa66bcf15a0))
- getTextByLogicRole and printBobject bobject utils ([3c639f0](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/3c639f0f3cc3f6627d5fda5171fc3c237487d1a5))
- painting the table according to the pauses and changed the hook to get from web api ([56dcb18](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/56dcb181133e7687b734be7749354e7c510d0aaf))
- refactored useBobjectForm to be useful outside ([4a8d729](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/4a8d729e544351cb55d972d3b30e335a98965f77))
- started with delete modal ([bbab175](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/bbab175f4ec0256ea41a999803f7b7ee59553448))

### Bug Fixes

- action bar hover ([cc69c75](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/cc69c75a1ff96bba51a2e4115315eb47fc186a8c))
- avoid start date being past ([8d91517](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/8d915173b8e3fc2938ff05a57b009c5a6fc0a1ad))
- bugs from cadence ([f0c1123](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/f0c112352741a4f3f9be0ef19f5da403559510cf))
- cache user id on periods to avoid make a request everytime we render ([4ed553b](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/4ed553b8febb2b9d12ab9b9c67ed0bb9dc40adce))
- changed endpoint ([975becc](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/975becc38410e9f47210dc6d69d01f665a61e5a5))
- companies are saved :rocket: ([f6c756c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/f6c756c81a5efac15b51fa989dcf1f356489d873))
- corrected victor comments ([5a7c421](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/5a7c421751cb9511f3449ec4662bd742e006b2db))
- date format solved ([f0d84a2](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/f0d84a23e5bff26d833d1cf277f847488d89793b))
- duplicate ([00e8c9b](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/00e8c9bb6647b770d2690bfd0e4852493f83f243))
- fix OPPORTUNITY WITHOUT TASKS for accounts without sales enabled. ([091886a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/091886ae998cd68302b8ac527ee6214ffcd6f437))
- fixed the subscriptions when a subscription query changes ([afb6509](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/afb6509184d454394853271a1e298a476e03e673)), closes [P21-1711](https://bloobirds.atlassian.net/browse/P21-1711)
- fixed the subscriptions when a subscription query changes ([f82188b](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/f82188b66a1c7ecfcf259fee56eb08c08d94cd1d)), closes [P21-1711](https://bloobirds.atlassian.net/browse/P21-1711)
- fixes for mario ([d896558](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/d8965585cce51bb73bef3d53f8377151fdf6ec3d))
- include related values in cached values when fecthing already filled values ([a829667](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/a829667619b06a558bd776536d26eec2649310fe))
- lint ([153a361](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/153a361097308e78ad4b23c1473f8949c05cae43))
- lint errors ([f02b430](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/f02b430d806a9f079d8cecba11dafda40655fea5))
- logs working without any issue :D ([030c58e](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/030c58e3026ceefde62e1743d79db35ed123a24e))
- oops, env things commited ([129e020](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/129e0206cfde2bb8514cbf31fcc4da69aefc695d))
- oops! debugger there ([1146b32](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/1146b32ad658aca0912b5319ed891ac7cfa74250))
- oops! debugger there ([806ac0a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/806ac0ae9bba87972adfffcc732fd99572cda971))
- oops! env was commited ([d865495](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/d865495cf2dd5c5f0e20abb0e9fcf16873751013))
- oops! i did it again ([08f3e20](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/08f3e20a6851bc6a7f97fc0366518935272a5a5c))
- removed the leads logic as we changed the way we will print this ([47324d3](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/47324d3914ae20c1cc88b2201edaf7b78300cfe9))
- required fields were not shown and finally charge the first time the filled QQs ([1ed9f0f](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/1ed9f0f8f51d49adc08006fce88dcc7d0c56eeb6))
- routes ([d6010d9](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/d6010d9cc5dd2971b536db7e7fa01715144facca))
- segi shitty bug ([5427f76](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/5427f76ee0529dd3b257bedfaf4db5643e2e0bc2))
- solving conflicts ([5975dad](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/5975dadd6fcdffa600f70f11de6a7dc5757cb18f))
- solving conflicts part 1 ([db9ddd6](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/db9ddd638a0a0bd4f8952a227f5b6bbe7976ab63))
- UI crashes by 2 cases ([45046f0](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/45046f06e60251d7d5715e03a83424a3413afe09)), closes [P21-1732](https://bloobirds.atlassian.net/browse/P21-1732) [P21-1733](https://bloobirds.atlassian.net/browse/P21-1733)
- **dashboards:** [P21-1702](https://bloobirds.atlassian.net/browse/P21-1702) multipanel dropdown position and ellipsis responsiveness ([73e3834](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/73e383464ad0313971482afc3bd70651a9abdd04))
- **dashboards:** align text with filters ([c501010](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/c5010105f33684aee294f451ae25f47b6f5d7fd7))
- **dashboards:** clean code ([dd47463](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/dd474633e91a4337773c18667faa571763d4b4aa))
- **dashboards:** filters were not merged correctly ([cf9dbad](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/cf9dbad26b5afa327d0e322a22ff8268eb9489c2))
- **dashboards:** fix console errors ([767188a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/767188adf027930d8b4688f298fc37cfa86e89b9))
- **dashboards:** fix lint ([a499239](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/a499239db289c64a719db3abb77fbb0e6cf0fbc9))
- **dashboards:** fix lint ([fffba1d](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/fffba1d6057ad0f8cadba93abd76756762e5ad2a))
- **dashboards:** refactor fetchEvolutionReports function ([b54ac41](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/b54ac41108997b770205607e7042e4900907e3ed))
- **dashboards:** spinner does not appear when loading a filter ([9dcfddc](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/9dcfddc047ca07f7b25d89ee83ccdd30f6fa9534))
- **integrationsUI:** fixed table component ([66eed70](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/66eed7075b7a528373dac8ae9a4c22d2ff49d0f9))
- **webapp:** [P21-1692](https://bloobirds.atlassian.net/browse/P21-1692) Redirecting is not working in the inbound lead without company notifications ([ee14592](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/ee14592d9cd8a0f1bf01f974232aaac02ad1529f))
- **webapp:** add alphabetically order in Opportunity status filter ([679ecde](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/679ecded75dddf7898c9ec500b9675f0d6f377e4))
- **webapp:** add link in context menu for Meeting activity ([ede55d8](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/ede55d84f2d58ac060f834b2ee316175084b113b))
- **webapp:** close the dropdown when open the edit modal ([4d2eae9](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/4d2eae919ffc46714bfd2aaa1070bfd9cfb11d53))
- **webapp:** disable button in Meeting result modal ([d5b49fd](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/d5b49fdf8c3146ac0aeb8381edb537217f8bc7c6))
- **webapp:** error after merge ([acc8718](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/acc8718ff1a4e6efea97720cc27429dd5727dce6))
- **webapp:** error when access the first time to the users ([35cd86c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/35cd86cf2dd8c68127ce269b317e01023e8c8590))
- **webapp:** font size ([e780b83](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e780b8374be060251cabdfea3108f7c0c07f17f6))
- **webapp:** improve the texts ([cd9f5b1](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/cd9f5b12f9d4ec8df82f6963f4e32cec392ccbf5))
- **webapp:** in sales page, the cards show the opportunity last attempt date ([aef2b58](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/aef2b582c1b1994e46928714a4203fa104675dd5))
- **webapp:** remove eslint error ([f0d72d9](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/f0d72d9e0828e2153c455e11dde420861ae75534))
- **webapp:** select the lead / company status in the Change status modal ([1992923](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/199292397307661d00270335cacebb268457193c))
- **webapp:** the permissions not working ([75f870a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/75f870a98e774f90ed7d982cc9ab0765b9287e10))
- **webapp:** variable renaming ([8ffcdf9](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/8ffcdf96d9a641dbcfa07950527209c46ed3dd70))
- **webapp:** When click in Nurturing or Discarded show the lead reasons ([5e085f6](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/5e085f6d3a42527eae1944d70a6ef9b652cad82d))
- requests from victor and a header fix in the modal ([8669e08](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/8669e081eb9ae403338572a6b53191cb17f3d8f3))
- some additional fields were not saved and refactored the modal to use a container ([eb69583](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/eb69583d723dc26bdf293215dd42096f0081123f))
- some bugs from mario ([bb5160d](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/bb5160dd5c0c50875ce0c65234f24dc0e2f78353))
- **webapp:** variable renaiming ([123d5fc](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/123d5fcffe6bf62ae6eb7084c763476b6e3fe0f6))
- **webapp:** when click two times in a company notification, the second time the page not finish to load ([2b500fa](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/2b500fa6502a14e793de91b1df75254169f9a3d3))

### Reverts

- Revert "fix(webapp): add alphabetically order in Opportunity status filter" ([e567918](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e5679186cb6768ae289106cbae3074bc83d31a57))

## [2.11.0-preprod.7](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.11.0-preprod.6...v2.11.0-preprod.7) (2021-05-08)

### Bug Fixes

- fixed the subscriptions when a subscription query changes ([afb6509](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/afb6509184d454394853271a1e298a476e03e673)), closes [P21-1711](https://bloobirds.atlassian.net/browse/P21-1711)
- fixed the subscriptions when a subscription query changes ([f82188b](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/f82188b66a1c7ecfcf259fee56eb08c08d94cd1d)), closes [P21-1711](https://bloobirds.atlassian.net/browse/P21-1711)

## [2.11.0-preprod.6](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.11.0-preprod.5...v2.11.0-preprod.6) (2021-05-08)

### Bug Fixes

- include related values in cached values when fecthing already filled values ([a829667](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/a829667619b06a558bd776536d26eec2649310fe))

## [2.11.0-preprod.5](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.11.0-preprod.4...v2.11.0-preprod.5) (2021-05-08)

### Bug Fixes

- cache user id on periods to avoid make a request everytime we render ([4ed553b](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/4ed553b8febb2b9d12ab9b9c67ed0bb9dc40adce))

## [2.11.0-preprod.4](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.11.0-preprod.3...v2.11.0-preprod.4) (2021-05-07)

### Bug Fixes

- fix OPPORTUNITY WITHOUT TASKS for accounts without sales enabled. ([091886a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/091886ae998cd68302b8ac527ee6214ffcd6f437))

## [2.11.0-preprod.3](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.11.0-preprod.2...v2.11.0-preprod.3) (2021-05-07)

### Features

- **integrationsUI:** added filters to integration Sync Logs page ([b8c8bc7](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/b8c8bc758032fdf291469a9164655464acda8c6a))
- add datapicker and bobject types select ([92e4617](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/92e46176030eb331c1bab12a838aed11f594839c))
- add log api ([731809a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/731809a71e68fee21f4998a33ba37971bf4d890a))
- be able set log status and date range ([e136ec4](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e136ec4995bcdb412949a6faa65223268129df0d))
- change api call ([bf15359](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/bf1535925c697c801d16fe8c4f7cb75951dd5630))

### Bug Fixes

- date format solved ([f0d84a2](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/f0d84a23e5bff26d833d1cf277f847488d89793b))
- lint ([153a361](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/153a361097308e78ad4b23c1473f8949c05cae43))
- logs working without any issue :D ([030c58e](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/030c58e3026ceefde62e1743d79db35ed123a24e))
- oops, env things commited ([129e020](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/129e0206cfde2bb8514cbf31fcc4da69aefc695d))
- solving conflicts part 1 ([db9ddd6](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/db9ddd638a0a0bd4f8952a227f5b6bbe7976ab63))
- **integrationsUI:** fixed table component ([66eed70](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/66eed7075b7a528373dac8ae9a4c22d2ff49d0f9))

## [2.11.0-preprod.2](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.11.0-preprod.1...v2.11.0-preprod.2) (2021-05-06)

### Bug Fixes

- UI crashes by 2 cases ([45046f0](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/45046f06e60251d7d5715e03a83424a3413afe09)), closes [P21-1732](https://bloobirds.atlassian.net/browse/P21-1732) [P21-1733](https://bloobirds.atlassian.net/browse/P21-1733)

## [2.11.0-preprod.1](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.10.2...v2.11.0-preprod.1) (2021-05-06)

### Features

- **dashboards:** render evolution charts ([fadf14f](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/fadf14f25e79b1d54f19cc1085afbd87b6ca09f2))
- **webapp:** [P21-1304](https://bloobirds.atlassian.net/browse/P21-1304) Modify the Notification component the new section ([cfcfff9](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/cfcfff982562180a1e8947936e12b38ddb67f3f7))
- **webapp:** add a new option in Account settings sidebar ([7e947bc](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/7e947bcbb908881121a9ec46900c3ab6b6a6a462))
- **webapp:** add a pair of conditions in the Report result button ([e96e19c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e96e19c9743f958d6e006d4ba38aa8d22123c0e9))
- **webapp:** add behavior for Change status step when is opened by Report result ([4cb8243](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/4cb8243eed917d69b48ebf54e5f0d5c263d1827f))
- **webapp:** add decimals to amount ([caa98a3](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/caa98a31142b1abdac0be72ff07f9ac5e575a79b))
- **webapp:** add in the machine the new status ([395eaa7](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/395eaa74e4818dced5b13712e22d434a687c8a12))
- **webapp:** add lead details in each type of notiication ([a843f7f](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/a843f7ffd38b024cf03eda2940f6a9ed242d34f9))
- **webapp:** Add Meeting Done as filter in the activity feed ([e0efa90](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e0efa909c8305455aef128a0852f7bd406889981))
- **webapp:** add new activity constants ([c02e420](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/c02e420538bf90aa39a72b5dacd758e1c20f100f))
- **webapp:** add new constant for company ([643934c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/643934c3ced41b4927eab6bc20092df6ca0b765d))
- **webapp:** add new styles ([0ad8d05](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/0ad8d0502bd164c52088c87153cd43e8a141dfc5))
- **webapp:** add onProspection status ([37e2209](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/37e2209bd3942e0538b75ba08c208cfbba6e0fcb))
- **webapp:** add opportunity type into Opportunity details ([913a731](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/913a731e744136f727547bb6e8c40a952092478a))
- **webapp:** add the new activity type ([cba3885](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/cba388544d804559eec9d04af1593840eaf16bcb))
- **webapp:** add validation ([9df6db2](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/9df6db29730083d451bcd0f12f9c8e5dea8e7a79))
- **webapp:** body layout ([328ccba](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/328ccbafcc2bba9cdae01268a41dcbf609d21364))
- **webapp:** cadence activity header ([d348b54](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/d348b545f085c8e4aa3c9832bf50536bcca37f95))
- **webapp:** cadence icon ([08ded87](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/08ded875c9727a7728ee132bc632fc5a452d922a))
- **webapp:** change texts for Cadence activities ([2fdf83c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/2fdf83c547dbd98602f753d9d8f50ef9baea56ae))
- **webapp:** Change the Account settings sidebar by the new component ([4b82abb](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/4b82abb5a04bddea00d257c78a35e7a65d0ce575))
- **webapp:** change the text if the activity is reported ([746e458](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/746e4589c492a7c224d3552dd2762cddac5a555f))
- **webapp:** changes in notification card ([4cf7cca](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/4cf7ccae3a9ce3b9ce09f74d8d3cfb5597d8ccda))
- **webapp:** checkbox logic ([8af9653](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/8af96537b35a1826c3266b319f09f6101bb40e57))
- **webapp:** closed card ([ed838cd](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/ed838cdeb3795e8a109c30f6a6145dc8aced8cd0))
- **webapp:** create a new component to ContextMenu ([11ecf97](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/11ecf97fa90d6b1945d504b001e49a99a0e1b5b4))
- **webapp:** create a new constant ([f8e333d](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/f8e333df521f1f915f14961095bf9e42b9badbe7))
- **webapp:** create a new method to report the status ([b721c77](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/b721c77edc721f8d7020dc967027dc5749d6a679))
- **webapp:** create constants for machine steps ([c9d132b](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/c9d132b5f045e24001d629cf9d18887250800178))
- **webapp:** create new hook to manage the userDefault notifications ([d42482a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/d42482a48237fe364485c77dad8a541272240852))
- **webapp:** css fixes ([921ec6f](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/921ec6f789b3c9a1d9b4f0848b259fb33271e322))
- **webapp:** delete the default users for notifications ([3bc7db5](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/3bc7db54614048a04242b8d14ef0431bb57629c6))
- **webapp:** disable the button when there is not changes ([b9ff3d6](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/b9ff3d6c317e2505a3138cf953a6da1cc1c55e2c))
- **webapp:** enable/disable button when has changes ([4526e25](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/4526e25683c304f735c908c5943a9f5b0825613b))
- **webapp:** export the new hook ([ee91544](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/ee915444f2410ec8cacfcb7a8a5b1aae15092621))
- **webapp:** fix in activity header ([9647c27](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/9647c2721306ca164a96682553bcd169798b9ed9))
- **webapp:** fix the text ([9522664](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/9522664bf9fe98add88bf61378664ee26f2b6fe3))
- **webapp:** fixes ([0c3cb22](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/0c3cb22a1c6d4c4e817d6704265801599b19e8e9))
- **webapp:** fixes ([ef973e9](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/ef973e94b407aa4940c04e4fd0efdf9a9a656bd6))
- **webapp:** for Cadence ended, open the Change status step only with Company status ([3323741](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/33237418085eb2ffc0e93d64359e7c9f5afc3cfb))
- **webapp:** glitch ([5ca0a6a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/5ca0a6a83a5fd27ad974b9ab0b49d15e52807b46))
- **webapp:** hide the message if its a company in prospection ([08e207c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/08e207c1aa6a3f5e4ed455f17107e66bb20be930))
- **webapp:** improve the code for Meetings cards ([a1e1fd2](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/a1e1fd205e10a228fbd2afe92ad860bd9863cebd))
- **webapp:** include the new modal ([cb28295](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/cb282957d93c80964752e724398851a38444e1a9))
- **webapp:** move the actionBar actions into a dropdown and add the Report result button ([16b57db](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/16b57db7772cea79b2d9fd409729354aebc82219))
- **webapp:** move the flag openContactFlow to an atom. ([7bf520e](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/7bf520e99a3420c0dd0af99733618686fc5edb99))
- **webapp:** move the replaceVariables function and new header for Inbound activities ([b09d101](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/b09d101e48257b3e24a2a9c1c1a0c9233f8222d2))
- **webapp:** new activity card for Meeting Done ([6e28d6b](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/6e28d6b682518a91f4a29503ebe406150947bed3))
- **webapp:** new activity constant ([ac53086](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/ac53086044ec1b86c65fc224b31c415df4be3394))
- **webapp:** new activity constants ([262e315](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/262e3156e184bbe5ab00f54908cf683075a5640f))
- **webapp:** new hook to manage the Meeting Results modal ([acf57be](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/acf57be429ba0288a2faaad0216b12c7d4fd2e6d))
- **webapp:** new modal to change the meeting results ([009bebe](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/009bebe36e90dc2df0ffd6d999552e8613ab60c6))
- **webapp:** new texts ([c2e3f02](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/c2e3f0231dc5f93ba3ea1f35a3874e081c8ef501))
- **webapp:** open the new modal ([881d5d8](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/881d5d8a5c145b60340791629de0e3d613f6ce91))
- **webapp:** remove direction in Meeting Done header ([718a98b](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/718a98b95540517b69b74aaa99836e768b5b4aea))
- **webapp:** remove duplicate variable ([0da50fc](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/0da50fc918627bc6311d9eb1de2a3674b0d5f3d7))
- **webapp:** remove duplicate variable ([dda94f7](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/dda94f709174cb0e9065b1c1b123be6c918fe6d6))
- **webapp:** remove meeting done activity and move the Report result button to Meeting activity card ([26bb2ba](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/26bb2ba6e8c331387fa1de8c353870ac9a737e08))
- **webapp:** report result for meeting activities ([9d3a37d](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/9d3a37dbcbdb0d2ffd07f56e2d418453457158cb))
- **webapp:** revert ([39a0945](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/39a0945cc7469721993d925e932a2ad2bdda25c5))
- **webapp:** revert three rows ([e3e012d](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e3e012df5b98751c76d38a7cddfc33b9e46cc923))
- **webapp:** set as reported when save the new status ([afe399d](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/afe399d0dc803dfb275bc488ee9f7574a4430cbf))
- **webapp:** show the correct buttons in each case ([58151ed](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/58151eddfa02ab476f1f700c460abe7dceca39ef))
- **webapp:** update test for ChangeStatus machine ([f96e2b9](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/f96e2b9150a6849b0d0b751f009e3596d32d523a))
- added more minimizables and refactored the modals and the modal ([f1f1b7f](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/f1f1b7f605be4209f1e7de93b7af7f26b4522862))
- advancing on filling requiredBeforeMeeting fields ([a468109](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/a468109a676f81467e91a0cdfea4ca4c1064ce80))
- bugs fixed ([6d30ecc](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/6d30ecca7afa98df6c0aa17e549ce31c2c29b459))
- supporting opps ([9e82f93](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/9e82f93fe9e538118373be76a93917120b06d415))
- **webapp:** upgrade components library version ([59e9eba](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/59e9ebad62a749d1c5fa9b6ca915410f7911a7da))
- added the banner and fixed a bug in the signature email setting ([85a64c9](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/85a64c9c78e5571a0b4d7d2f7da8ea6c35fd61c3))
- Modify the Notification in account settings for put the default user of new lead inbound and new activity inbound ([fd2bf20](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/fd2bf20ddbc4fc39acb30043b284e46b52694e70)), closes [P21-1649](https://bloobirds.atlassian.net/browse/P21-1649)
- we support timezones in our pauses MADAFAAKAS! ([55cb337](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/55cb337185be29e9f3073e56f31aa391e8cee2c2))
- **webapp:** new constants ([77f113a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/77f113aa7889a6f416803bde5823436506ddae66))
- **webapp:** only the values related to the oppportunity show the Opportunity header ([4e20f56](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/4e20f567526dbe42aea49f0ecaf2a66f48b66de2))
- **webapp:** remove console.debug ([0ec5bbc](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/0ec5bbcda1bc0446da65fbcb4fcff656e4bdedea))
- **webapp:** remove console.debug and used file ([55d17a2](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/55d17a22dd582caa56b0fb8cfebb4ea16b1bf056))
- **webapp:** replace variables ([92f4297](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/92f42977dd4aa46de13b3a4c74f8f24ebbd55fa0))
- **webapp:** some changes in the account settings page ([889fb11](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/889fb11bdf709585b7f5a0b491e4da1d59a173c7))
- **webapp:** try to get the cadence type ([e1aa591](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e1aa59142273d2ecfcacccd92fb34a2416bf59bf))
- **webapp:** update the activity card to the opportunity activities ([7f97cad](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/7f97cad4aca592c9188a78842a71689d3269c73a))
- **webapp:** update the atom after save the new info ([198431d](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/198431d4936e983cf790b7d3086de7d91bb8e1f9))
- **webapp:** update the Opportunity Details look and feel ([9dab05d](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/9dab05dbb97d1fc24e1ba2153b932f2894b91c3b))
- **webapp:** use the new constants ([fbb8f25](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/fbb8f258a439cfa62dcb478995b38126846fe270))
- **webapp:** use the text with variables ([7a295a6](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/7a295a6c82366cb8de07bd61148c97354f18c166))
- finished pause periods cards, let's begin with cadence preview ([6d01822](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/6d018228728deb67f921873e52afd088b398c4e9))
- fixed styling issue in card ([cc18165](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/cc18165b17de07916b474315d0f4dfa66bcf15a0))
- getTextByLogicRole and printBobject bobject utils ([3c639f0](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/3c639f0f3cc3f6627d5fda5171fc3c237487d1a5))
- painting the table according to the pauses and changed the hook to get from web api ([56dcb18](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/56dcb181133e7687b734be7749354e7c510d0aaf))
- refactored useBobjectForm to be useful outside ([4a8d729](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/4a8d729e544351cb55d972d3b30e335a98965f77))
- started with delete modal ([bbab175](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/bbab175f4ec0256ea41a999803f7b7ee59553448))

### Bug Fixes

- bugs from cadence ([f0c1123](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/f0c112352741a4f3f9be0ef19f5da403559510cf))
- changed endpoint ([975becc](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/975becc38410e9f47210dc6d69d01f665a61e5a5))
- companies are saved :rocket: ([f6c756c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/f6c756c81a5efac15b51fa989dcf1f356489d873))
- duplicate ([00e8c9b](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/00e8c9bb6647b770d2690bfd0e4852493f83f243))
- fixes for mario ([d896558](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/d8965585cce51bb73bef3d53f8377151fdf6ec3d))
- oops! i did it again ([08f3e20](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/08f3e20a6851bc6a7f97fc0366518935272a5a5c))
- routes ([d6010d9](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/d6010d9cc5dd2971b536db7e7fa01715144facca))
- solving conflicts ([5975dad](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/5975dadd6fcdffa600f70f11de6a7dc5757cb18f))
- **dashboards:** [P21-1702](https://bloobirds.atlassian.net/browse/P21-1702) multipanel dropdown position and ellipsis responsiveness ([73e3834](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/73e383464ad0313971482afc3bd70651a9abdd04))
- **dashboards:** align text with filters ([c501010](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/c5010105f33684aee294f451ae25f47b6f5d7fd7))
- **dashboards:** clean code ([dd47463](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/dd474633e91a4337773c18667faa571763d4b4aa))
- **dashboards:** fix console errors ([767188a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/767188adf027930d8b4688f298fc37cfa86e89b9))
- **dashboards:** spinner does not appear when loading a filter ([9dcfddc](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/9dcfddc047ca07f7b25d89ee83ccdd30f6fa9534))
- **webapp:** [P21-1692](https://bloobirds.atlassian.net/browse/P21-1692) Redirecting is not working in the inbound lead without company notifications ([ee14592](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/ee14592d9cd8a0f1bf01f974232aaac02ad1529f))
- **webapp:** add alphabetically order in Opportunity status filter ([679ecde](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/679ecded75dddf7898c9ec500b9675f0d6f377e4))
- **webapp:** add link in context menu for Meeting activity ([ede55d8](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/ede55d84f2d58ac060f834b2ee316175084b113b))
- **webapp:** close the dropdown when open the edit modal ([4d2eae9](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/4d2eae919ffc46714bfd2aaa1070bfd9cfb11d53))
- **webapp:** error after merge ([acc8718](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/acc8718ff1a4e6efea97720cc27429dd5727dce6))
- **webapp:** error when access the first time to the users ([35cd86c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/35cd86cf2dd8c68127ce269b317e01023e8c8590))
- **webapp:** font size ([e780b83](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e780b8374be060251cabdfea3108f7c0c07f17f6))
- **webapp:** improve the texts ([cd9f5b1](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/cd9f5b12f9d4ec8df82f6963f4e32cec392ccbf5))
- **webapp:** in sales page, the cards show the opportunity last attempt date ([aef2b58](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/aef2b582c1b1994e46928714a4203fa104675dd5))
- **webapp:** remove eslint error ([f0d72d9](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/f0d72d9e0828e2153c455e11dde420861ae75534))
- **webapp:** select the lead / company status in the Change status modal ([1992923](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/199292397307661d00270335cacebb268457193c))
- **webapp:** the permissions not working ([75f870a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/75f870a98e774f90ed7d982cc9ab0765b9287e10))
- **webapp:** variable renaming ([8ffcdf9](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/8ffcdf96d9a641dbcfa07950527209c46ed3dd70))
- **webapp:** When click in Nurturing or Discarded show the lead reasons ([5e085f6](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/5e085f6d3a42527eae1944d70a6ef9b652cad82d))
- required fields were not shown and finally charge the first time the filled QQs ([1ed9f0f](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/1ed9f0f8f51d49adc08006fce88dcc7d0c56eeb6))
- segi shitty bug ([5427f76](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/5427f76ee0529dd3b257bedfaf4db5643e2e0bc2))
- **dashboards:** filters were not merged correctly ([cf9dbad](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/cf9dbad26b5afa327d0e322a22ff8268eb9489c2))
- **dashboards:** fix lint ([a499239](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/a499239db289c64a719db3abb77fbb0e6cf0fbc9))
- **dashboards:** fix lint ([fffba1d](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/fffba1d6057ad0f8cadba93abd76756762e5ad2a))
- **dashboards:** refactor fetchEvolutionReports function ([b54ac41](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/b54ac41108997b770205607e7042e4900907e3ed))
- **webapp:** disable button in Meeting result modal ([d5b49fd](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/d5b49fdf8c3146ac0aeb8381edb537217f8bc7c6))
- action bar hover ([cc69c75](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/cc69c75a1ff96bba51a2e4115315eb47fc186a8c))
- avoid start date being past ([8d91517](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/8d915173b8e3fc2938ff05a57b009c5a6fc0a1ad))
- corrected victor comments ([5a7c421](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/5a7c421751cb9511f3449ec4662bd742e006b2db))
- lint errors ([f02b430](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/f02b430d806a9f079d8cecba11dafda40655fea5))
- oops! debugger there ([1146b32](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/1146b32ad658aca0912b5319ed891ac7cfa74250))
- oops! debugger there ([806ac0a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/806ac0ae9bba87972adfffcc732fd99572cda971))
- oops! env was commited ([d865495](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/d865495cf2dd5c5f0e20abb0e9fcf16873751013))
- removed the leads logic as we changed the way we will print this ([47324d3](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/47324d3914ae20c1cc88b2201edaf7b78300cfe9))
- requests from victor and a header fix in the modal ([8669e08](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/8669e081eb9ae403338572a6b53191cb17f3d8f3))
- some additional fields were not saved and refactored the modal to use a container ([eb69583](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/eb69583d723dc26bdf293215dd42096f0081123f))
- some bugs from mario ([bb5160d](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/bb5160dd5c0c50875ce0c65234f24dc0e2f78353))
- **webapp:** variable renaiming ([123d5fc](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/123d5fcffe6bf62ae6eb7084c763476b6e3fe0f6))
- **webapp:** when click two times in a company notification, the second time the page not finish to load ([2b500fa](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/2b500fa6502a14e793de91b1df75254169f9a3d3))

### Reverts

- Revert "fix(webapp): add alphabetically order in Opportunity status filter" ([e567918](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e5679186cb6768ae289106cbae3074bc83d31a57))

### [2.10.2](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.10.1...v2.10.2) (2021-05-05)

### Bug Fixes

- also check feature sales is enabled ([fa45702](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/fa457027d4a88dc3f2462df72aeda3ac929fcffd))

### [2.10.2-preprod.1](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.10.1...v2.10.2-preprod.1) (2021-05-05)

### Bug Fixes

- also check feature sales is enabled ([fa45702](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/fa457027d4a88dc3f2462df72aeda3ac929fcffd))

### [2.10.1](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.10.0...v2.10.1) (2021-05-05)

### Bug Fixes

- added user permission in sales tab ([fbddea8](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/fbddea81bb2ca6cfcc4c0425298d0f77c6d7788d))
- remove feature flag in user settings to use timezone for everyone ([90d8df5](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/90d8df52eb0855cad0034e683fa0301226eeb733))

### [2.10.1-preprod.2](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.10.1-preprod.1...v2.10.1-preprod.2) (2021-05-05)

### Bug Fixes

- added user permission in sales tab ([fbddea8](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/fbddea81bb2ca6cfcc4c0425298d0f77c6d7788d))

### [2.10.1-preprod.1](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.10.0...v2.10.1-preprod.1) (2021-05-04)

### Bug Fixes

- remove feature flag in user settings to use timezone for everyone ([90d8df5](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/90d8df52eb0855cad0034e683fa0301226eeb733))

## [2.10.0](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.9.0...v2.10.0) (2021-05-04)

### Features

- new inbound notifications icons ([921e486](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/921e48636fd4cb144a2c42c4a11a107647ef0492)), closes [P21-1708](https://bloobirds.atlassian.net/browse/P21-1708)

## [2.10.0-preprod.1](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.9.0...v2.10.0-preprod.1) (2021-05-04)

### Features

- new inbound notifications icons ([921e486](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/921e48636fd4cb144a2c42c4a11a107647ef0492)), closes [P21-1708](https://bloobirds.atlassian.net/browse/P21-1708)

## [2.9.0](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.8.1...v2.9.0) (2021-05-01)

### Features

- **dashboards:** [P21-1653](https://bloobirds.atlassian.net/browse/P21-1653) Meetings Channel charts changed to 2nd row ([e262b18](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e262b188149a270f5c80d84a71ff4b4d3005f4c0))
- **dashboards:** [P21-1655](https://bloobirds.atlassian.net/browse/P21-1655) CLEAR button should clear groupby as well ([a252a1f](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/a252a1f67c324fe506e603adf70e5064a4685470))
- **dashboards:** stack custom colors bar chart ([4f622ec](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/4f622ec25df7087627bb4c3371b6763d818c6d44))
- **imports:** allow search by name ([5d89d6a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/5d89d6a5aa330b7e4bfd1e9c227723a07a4a5cd8)), closes [P21-1469](https://bloobirds.atlassian.net/browse/P21-1469)
- add icons for import notifications ([a639a5a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/a639a5ae52f73c8ec638210a45070698b941554b)), closes [P21-1425](https://bloobirds.atlassian.net/browse/P21-1425)
- add missing z for utc-0 ([03123a3](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/03123a3155ac8bc6a04e499b73a71f1c099ff565))
- **Data Attributes:** Added data attributes to several components ([3604601](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/36046018fb3d9446c015409d31f34741e8b75f54))
- **import-improvement:** [[P21-592](https://bloobirds.atlassian.net/browse/P21-592) ([932d505](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/932d505c14409735f134b16a2e1aea8836ed7acb))
- **import-improvement:** [[P21-593](https://bloobirds.atlassian.net/browse/P21-593)] Removed bobjectApi call for bulk insertion. ([39bdc8a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/39bdc8a00169023ee5089249308207de43aab9ce))
- **import-improvements:** [[P21-600](https://bloobirds.atlassian.net/browse/P21-600)](<[6434ada](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/6434ada0f696dcb9452114a3eed3cadc175940f3)>)
- **import-improvements:** [[P21-662](https://bloobirds.atlassian.net/browse/P21-662), [P21-789](https://bloobirds.atlassian.net/browse/P21-789), [P21-790](https://bloobirds.atlassian.net/browse/P21-790), [P21-791](https://bloobirds.atlassian.net/browse/P21-791)](<[7ad7d47](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/7ad7d4794d2fa9ea5af6a3d2bb265bb45ebb4816)>)
- **import-improvements:** [[P21-803](https://bloobirds.atlassian.net/browse/P21-803)] Scroll of validation messages added. ([9902c41](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/9902c417c4a3c2b4f942d3d13c2e5e7cdca9b973))
- **import-improvements:** [[P21-903](https://bloobirds.atlassian.net/browse/P21-903), [P21-661](https://bloobirds.atlassian.net/browse/P21-661), [P21-799](https://bloobirds.atlassian.net/browse/P21-799)]. ([d0cf28d](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/d0cf28d5a6ee9be0ea0e566572a015c2693c3b8f))
- **import-improvements:** [[P21-944](https://bloobirds.atlassian.net/browse/P21-944), [P21-943](https://bloobirds.atlassian.net/browse/P21-943)](<[c2e64fa](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/c2e64fafff4b2fc7f28c909514f5eec5bcbbf90b)>)
- **import-improvements:** [[P21-944](https://bloobirds.atlassian.net/browse/P21-944), [P21-943](https://bloobirds.atlassian.net/browse/P21-943)](<[6214539](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/621453949b57a6214e4614fa068bf7c531f3d242)>)
- **import-improvements:** [[P21-944](https://bloobirds.atlassian.net/browse/P21-944), [P21-943](https://bloobirds.atlassian.net/browse/P21-943)] Spinner and text added on file uploading. ([1831ad4](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/1831ad474ffc322ff008312fb4a252453ec02d9d))
- **import-improvements:** [[P21-944](https://bloobirds.atlassian.net/browse/P21-944), [P21-943](https://bloobirds.atlassian.net/browse/P21-943)] Spinner and text added on file uploading. ([4752080](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/4752080faf1407c15bdd08c0c95511c5724313e0))
- **importimprovement:** Changed import name to bloobirds color ([a803499](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/a80349982233f44e9e83a4e9b9bac35a3b3d1b28))
- **importimprovement:** Now when closing imports Modal it return to the import history table ([5bb903e](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/5bb903efa95f99644475f0356b0229f9f1d17627))
- **ImportImprovements:** [[P21-764](https://bloobirds.atlassian.net/browse/P21-764)] Added multiple options on import. ([29573e0](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/29573e09da57aa827ac79c6c7d1ed9657141a1df))
- **ImportImprovements:** [[P21-764](https://bloobirds.atlassian.net/browse/P21-764)] Corrected params range for endpoint call: ([e15f6a1](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e15f6a1ce0e33a693ce3688a75b9c13d775ef5fe)), closes [P21-662](https://bloobirds.atlassian.net/browse/P21-662)
- **ImportImprovements:** debugger removed ([038f67d](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/038f67d27794dbf73620b08e738f3fa4097403b2))
- **timezones:** [[P21-1161](https://bloobirds.atlassian.net/browse/P21-1161)]: Added control to check if there's imports going on. ([eab57f8](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/eab57f82eae3d992d7e341d7d9e2902f750de51a))
- **weapp:** remove meeting card ([1c6bac7](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/1c6bac779efb63b50e411be083aa833fe4472c85))
- **webapp:** [[P21-665](https://bloobirds.atlassian.net/browse/P21-665)] Hide stop after doble check. ([586b28e](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/586b28e6db0a3e9c97f28235f778ed35dd7b6904))
- **webapp:** add a new option in Account settings sidebar ([e84b4d2](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e84b4d2960896e4bcf6b5bff01154e0881fee2e0))
- **webapp:** add full sales validation ([a6de561](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/a6de561af59d5266dc6a6f551868cf4fb7e615cb))
- **webapp:** add lead new in the meeting task card ([6669fff](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/6669fff36bf80c49da4807e3dd52535a971e09b6))
- **webapp:** add new param in contact to url to open the cadence control ([1e41ce6](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/1e41ce6930654cb25f0e3d8a5b32e3060f0816f9))
- **webapp:** add sort filter in meeting tab ([7eab50e](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/7eab50e00be74af9ef41a521d60bb7dd66dc2d91))
- **webapp:** add the new type in Task card ([99bb823](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/99bb8237dd62c3c449612701e8e72d84452d6c4c))
- **webapp:** add the new url ([8aa1e15](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/8aa1e15e3c58b3281dd41169621fe906f6decc7e))
- **webapp:** add validation in list object ([5a2eae4](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/5a2eae4c82555dc5453622755ace8a0206e5461d))
- **webapp:** added the minimize emails feature ([a7c118d](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/a7c118d3c45580977599f8b21d339f53dfa6511c)), closes [P21-1022](https://bloobirds.atlassian.net/browse/P21-1022)
- **webapp:** added the minimize emails feature ([6acd494](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/6acd494a093eafe4390bc729b3fa635835109d86)), closes [P21-1022](https://bloobirds.atlassian.net/browse/P21-1022)
- **webapp:** change text ([cdf6a8a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/cdf6a8a61807cba38c2144a5e727f3ea9d1d1f9f))
- **webapp:** Change the Account settings sidebar by the new component ([1b20ea0](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/1b20ea0f92f458c1dee22df13717a6a6fe0889f5))
- **webapp:** changes in inactive tab ([373df46](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/373df460011add719c5b352cbce36e1b194ef9d0))
- **webapp:** cleared the recoil root state to change it when changes ([dce173e](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/dce173e78305c5cae5b0cd6d49dc192e5497c286)), closes [P21-1022](https://bloobirds.atlassian.net/browse/P21-1022)
- **webapp:** counter tabs ([5fd7657](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/5fd7657a7548f21555e4150cb4c64f86aaf65f44))
- **webapp:** create a new type of task ([7b083c1](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/7b083c1587d659f9ee10ec07e8a4548f96776924))
- **webapp:** create a new type of task ([e0acf1a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e0acf1ac44478b665bbbbb02a91a1341ba05ba28))
- **webapp:** create the new page ([1fc77ae](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/1fc77aec2f15e859ded49b3b98e1cff4de4957df))
- **webapp:** inject the reference bobjects to opportunities ([f88ee48](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/f88ee487481d6209aaa6848337d2fd1ee79f70ff))
- **webapp:** meeting tab without correct queries ([95e656d](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/95e656de7f1cf0c8cd2d95f42c90dec959fa9ed0))
- **webapp:** modified the header of the email modal ([1f4faba](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/1f4faba331c2d5d2fead653cfec039ce6a5b7746)), closes [P21-1022](https://bloobirds.atlassian.net/browse/P21-1022)
- **webapp:** modified the header of the email modal ([5ea46bb](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/5ea46bb7ccb782a49cb3a1c0ae0f13a48cddd231)), closes [P21-1022](https://bloobirds.atlassian.net/browse/P21-1022)
- **webapp:** modified the header of the email modal ([814aea2](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/814aea2b0e34cd45ab22b632466c824ba38b3ae0)), closes [P21-1022](https://bloobirds.atlassian.net/browse/P21-1022)
- **webapp:** modified the header of the email modal ([3176ff7](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/3176ff793519449cc2f775afacc9d9a3e9e1ba79)), closes [P21-1022](https://bloobirds.atlassian.net/browse/P21-1022)
- **webapp:** new card ([265e353](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/265e353abb6ba3bc870020ecbc92277d9dd6ca77))
- **webapp:** opportunity status now it's a field, so, change the way to access the info ([a1e8ddc](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/a1e8ddccf9fe00d853740a8ae16da4648b3750ed))
- **webapp:** remove commented code ([990180f](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/990180fb64bc1445901734e0a9c0c60d61f82adb))
- **webapp:** remove Preferences section in Account Settings ([414d858](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/414d858f45f17a77457e12d0e602d5f7b5eba558))
- **webapp:** remove tooltip ([d2b961d](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/d2b961d74cc1ef7b39a8f8d1e9c8130eefc2869b))
- **webapp:** remove unnecessary provider ([2378908](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/23789087bc3ca49f6e93f4acd77eef87acc41284))
- **webapp:** select the correcct option in the menu ([ca90086](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/ca900862ef7dc150b0069cd5a37fd50a7561fdfb))
- **webapp:** update the inactive counter ([27c8e9f](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/27c8e9f5b5dda1a22a875e439f64d17337fc97b2))

### Bug Fixes

- hide activity type cadence picklist value ([9d42f6e](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/9d42f6ef9045c083ea96be29349b009ccfad5348)), closes [P21-1698](https://bloobirds.atlassian.net/browse/P21-1698)
- **cadence:** Fix cadence table activities ([13f80fe](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/13f80fea3443239a03c6995d8379034e05663e30)), closes [P21-1639](https://bloobirds.atlassian.net/browse/P21-1639)
- **dashboards:** [P21-1603](https://bloobirds.atlassian.net/browse/P21-1603) and [P21-1583](https://bloobirds.atlassian.net/browse/P21-1583) toggle position ([13a2855](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/13a28552fbe44c6bc1018e647eba8a8abfc9f864))
- **dashboards:** [P21-1629](https://bloobirds.atlassian.net/browse/P21-1629) replace "for" for "→" ([2ed4e85](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/2ed4e85770705bd0cec7e24ae2f8bd0b722bf005))
- **dashboards:** [P21-1640](https://bloobirds.atlassian.net/browse/P21-1640), filters mantain between dashboards ([9c66cf9](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/9c66cf97a4261ce05dd6b2363686379f81eff337))
- **dashboards:** [P21-1652](https://bloobirds.atlassian.net/browse/P21-1652) rollback to old behavior on date ranges ([a2c7f0c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/a2c7f0c1756ad364f7696e215d630ff361874730))
- **dashboards:** [P21-1654](https://bloobirds.atlassian.net/browse/P21-1654) depending on the table we'd like a custom initial column name ([792d977](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/792d97718834ac9f8fd97513efe85d82344bad08))
- **dashboards:** added data test attribute ([35dee62](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/35dee62eafa7aa8fafaff241b6549b5880790301))
- **dashboards:** applied useEffect so it only changes when changing dashboards ([dcf9dd8](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/dcf9dd87bf90f3bd1571b888c0e8a10f1b24cef2))
- **dashboards:** last page we should not reset the vertical scroll ([6631965](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/66319659442cc7a70a3fd54d6edfedba2db7233a))
- **dashboards:** make it rerender with the key ([01779ad](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/01779ad917ef2ce2e4eccf417e177e61b06d448e))
- **dashboards:** missing cross to the drill down title from last commit ([f7f4d2f](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/f7f4d2fc7f68df8317fe4f1b105c7ad8050372fe))
- **dashboards:** named tab as Dashboards ([43a506e](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/43a506ee0a0afeca3cea43cf50fa9d0ccf8d3300))
- **dashboards:** non necessary css property ([760ad66](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/760ad6653069dfc03c30b49f76239a92ed4e4dba))
- **dashboards:** now it scrolls but but also when we apply filters ([50c78c6](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/50c78c6e96f0b19438d7c2827a1424012d22ddab))
- **dashboards:** requested changes fix ([b9313e3](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/b9313e320f434443e15f1617de338686e17f4281))
- **dashboards:** scroll to top of undefined ([1dd6e4d](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/1dd6e4ddb8620ddb8acb2313a67983ecbd404af9))
- **dashboards:** updated component lib ([6147fcc](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/6147fccfee16afe841f5b10b891b31cf7561dd34))
- **dashboards:** using ref for the scroll to top at drilldown modal ([3cfe95d](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/3cfe95d4b2a0e196e768259f97ffaf6b5bd1401f))
- **dashboards:** wrong count on filters ([7c85f05](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/7c85f0503ff7156fc717fb0902a1de355d020a96))
- **importImprovements:** [[P21-1256](https://bloobirds.atlassian.net/browse/P21-1256)] fake stopped imports ([bf7bf02](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/bf7bf020ee39d53bff0ca8e70ebe3a23798c50ea))
- **importImprovements:** [[P21-1288](https://bloobirds.atlassian.net/browse/P21-1288)] changed copy of the warning about the on going imports ([7804ec4](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/7804ec42bbf5f18f39a11b67c3de416cfaf4db66))
- **importImprovements:** [[P21-1466](https://bloobirds.atlassian.net/browse/P21-1466)] [ ([9901db4](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/9901db405d6939bbc86b3a74f562eb2796ace1db))
- **importImprovements:** [[P21-1688](https://bloobirds.atlassian.net/browse/P21-1688)] fixed footer ([d118434](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/d118434e70a499a3a58090374649a81b53876f9c))
- **importImprovements:** [[P21-928](https://bloobirds.atlassian.net/browse/P21-928)] Added ref to div to close navigation menu. ([74d47b4](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/74d47b4e1e3ca65c61057146fcc82f80e4043b92))
- **importImprovements:** fixed codacy error ([bc4d4f2](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/bc4d4f2a0c8481e1bb7343cc6bafef8339ca29a8))
- **importImprovements:** just show opportunity import option to feature sales accounts ([50efcc9](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/50efcc9c87bbe3a26236b6fab0b1868cb64bf50f))
- **importImprovements:** refactor of Pr comments ([17975b2](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/17975b20b2516de622487af1174ceaa7c52e9e27))
- **importImprovements:** removed console.log ([71ee471](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/71ee4714d198420c16b2f1c0839ca33daffc7c2f))
- **importImprovements:** reviewed changes ([107312b](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/107312b6fa12b1dbc37816e9790ff1270fab9fef))
- **importImprovements:** typo error ([bc48b23](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/bc48b23a3029422c6a3c4148f3bf7fe3c21a3942))
- **imports:** [[P21-1233](https://bloobirds.atlassian.net/browse/P21-1233)](<[22c5f2c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/22c5f2c215701c0230edf78cdc7ce02e738353d6)>)
- **imports:** [[P21-1233](https://bloobirds.atlassian.net/browse/P21-1233)](<[2f228fd](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/2f228fdcfad488a072edd1869ea298cf549bf4aa)>)
- **imports:** [[P21-1233](https://bloobirds.atlassian.net/browse/P21-1233)] replaced import colors by var() ([349c991](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/349c991b542180ddb9b7918f7de28713b852ebe1))
- **imports:** [[P21-1276](https://bloobirds.atlassian.net/browse/P21-1276)][[P21-1279](https://bloobirds.atlassian.net/browse/P21-1279)](<[7f7cf9c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/7f7cf9c5c26a5fddf9cf2304227086f9eb973cd2)>)
- **integrationsUI:** small fix logTracingEmail ([84db8e0](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/84db8e00fc93065809eee0807fc7c09cb6b9dd0e)), closes [P21-1690](https://bloobirds.atlassian.net/browse/P21-1690)
- **webapp:** after merge ([3a539ed](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/3a539eddbe160ae91457e9184f03e9a55ab7c07f))
- **webapp:** opp page crash ([c7fae2a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/c7fae2aba679d03c3fc4693ce2b7c9d67adb1159))
- avoid divide in the api calls shown in syncstattus tab ([777b9f1](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/777b9f138381d029dd76430e1747fa6482a36f4c)), closes [P21-1681](https://bloobirds.atlassian.net/browse/P21-1681)
- dont mess around with datetime ([ce2034a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/ce2034a75ecf75bcb1eebe62b295d30887ff01ca)), closes [P21-1286](https://bloobirds.atlassian.net/browse/P21-1286)
- **webapp:** add alphabetically order in Opportunity status filter ([ae39d30](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/ae39d30041af2f329ccfd4d307f60a7a5115e3d3))
- **webapp:** fixes in Meeting tab ([4789bf2](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/4789bf25a6888154b309fcdf90d2e67ee16daacd))
- **webapp:** in sales page, the cards show the opportunity last attempt date ([749f1c5](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/749f1c5fe27e0bb0fd3bf9495bca49fd67be6349))
- **webapp:** minor release bugs ([4774e5c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/4774e5cb7d10c8a692dcb0b7b41e5aeeccbb65c0))
- **webapp:** the permissions not working ([d6e5f41](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/d6e5f41b1a69bc18838e5a01cdff5398d462ad0c))
- show madrid time zone time ([362d07f](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/362d07ffbbab7a2c49ad81dd3c2a07560cfd0d41))

## [2.9.0-preprod.6](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.9.0-preprod.5...v2.9.0-preprod.6) (2021-04-30)

### Bug Fixes

- hide activity type cadence picklist value ([9d42f6e](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/9d42f6ef9045c083ea96be29349b009ccfad5348)), closes [P21-1698](https://bloobirds.atlassian.net/browse/P21-1698)

## [2.9.0-preprod.5](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.9.0-preprod.4...v2.9.0-preprod.5) (2021-04-30)

### Bug Fixes

- **dashboards:** make it rerender with the key ([01779ad](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/01779ad917ef2ce2e4eccf417e177e61b06d448e))
- **dashboards:** scroll to top of undefined ([1dd6e4d](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/1dd6e4ddb8620ddb8acb2313a67983ecbd404af9))
- **dashboards:** wrong count on filters ([7c85f05](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/7c85f0503ff7156fc717fb0902a1de355d020a96))

## [2.9.0-preprod.4](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.9.0-preprod.3...v2.9.0-preprod.4) (2021-04-30)

### Bug Fixes

- **webapp:** opp page crash ([c7fae2a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/c7fae2aba679d03c3fc4693ce2b7c9d67adb1159))

## [2.9.0-preprod.3](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.9.0-preprod.2...v2.9.0-preprod.3) (2021-04-29)

### Features

- **dashboards:** [P21-1653](https://bloobirds.atlassian.net/browse/P21-1653) Meetings Channel charts changed to 2nd row ([e262b18](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e262b188149a270f5c80d84a71ff4b4d3005f4c0))
- **dashboards:** [P21-1655](https://bloobirds.atlassian.net/browse/P21-1655) CLEAR button should clear groupby as well ([a252a1f](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/a252a1f67c324fe506e603adf70e5064a4685470))
- **dashboards:** stack custom colors bar chart ([4f622ec](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/4f622ec25df7087627bb4c3371b6763d818c6d44))

### Bug Fixes

- **dashboards:** [P21-1603](https://bloobirds.atlassian.net/browse/P21-1603) and [P21-1583](https://bloobirds.atlassian.net/browse/P21-1583) toggle position ([13a2855](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/13a28552fbe44c6bc1018e647eba8a8abfc9f864))
- **dashboards:** [P21-1629](https://bloobirds.atlassian.net/browse/P21-1629) replace "for" for "→" ([2ed4e85](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/2ed4e85770705bd0cec7e24ae2f8bd0b722bf005))
- **dashboards:** [P21-1640](https://bloobirds.atlassian.net/browse/P21-1640), filters mantain between dashboards ([9c66cf9](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/9c66cf97a4261ce05dd6b2363686379f81eff337))
- **dashboards:** [P21-1652](https://bloobirds.atlassian.net/browse/P21-1652) rollback to old behavior on date ranges ([a2c7f0c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/a2c7f0c1756ad364f7696e215d630ff361874730))
- **dashboards:** [P21-1654](https://bloobirds.atlassian.net/browse/P21-1654) depending on the table we'd like a custom initial column name ([792d977](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/792d97718834ac9f8fd97513efe85d82344bad08))
- **dashboards:** added data test attribute ([35dee62](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/35dee62eafa7aa8fafaff241b6549b5880790301))
- **dashboards:** applied useEffect so it only changes when changing dashboards ([dcf9dd8](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/dcf9dd87bf90f3bd1571b888c0e8a10f1b24cef2))
- **dashboards:** last page we should not reset the vertical scroll ([6631965](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/66319659442cc7a70a3fd54d6edfedba2db7233a))
- **dashboards:** missing cross to the drill down title from last commit ([f7f4d2f](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/f7f4d2fc7f68df8317fe4f1b105c7ad8050372fe))
- **dashboards:** named tab as Dashboards ([43a506e](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/43a506ee0a0afeca3cea43cf50fa9d0ccf8d3300))
- **dashboards:** non necessary css property ([760ad66](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/760ad6653069dfc03c30b49f76239a92ed4e4dba))
- **dashboards:** now it scrolls but but also when we apply filters ([50c78c6](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/50c78c6e96f0b19438d7c2827a1424012d22ddab))
- **dashboards:** requested changes fix ([b9313e3](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/b9313e320f434443e15f1617de338686e17f4281))
- **dashboards:** updated component lib ([6147fcc](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/6147fccfee16afe841f5b10b891b31cf7561dd34))
- **dashboards:** using ref for the scroll to top at drilldown modal ([3cfe95d](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/3cfe95d4b2a0e196e768259f97ffaf6b5bd1401f))
- **integrationsUI:** small fix logTracingEmail ([84db8e0](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/84db8e00fc93065809eee0807fc7c09cb6b9dd0e)), closes [P21-1690](https://bloobirds.atlassian.net/browse/P21-1690)

## [2.9.0-preprod.2](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.9.0-preprod.1...v2.9.0-preprod.2) (2021-04-29)

### Bug Fixes

- **importImprovements:** [[P21-1688](https://bloobirds.atlassian.net/browse/P21-1688)] fixed footer ([d118434](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/d118434e70a499a3a58090374649a81b53876f9c))

## [2.9.0-preprod.1](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.8.2-preprod.1...v2.9.0-preprod.1) (2021-04-29)

### Features

- **imports:** allow search by name ([5d89d6a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/5d89d6a5aa330b7e4bfd1e9c227723a07a4a5cd8)), closes [P21-1469](https://bloobirds.atlassian.net/browse/P21-1469)
- add icons for import notifications ([a639a5a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/a639a5ae52f73c8ec638210a45070698b941554b)), closes [P21-1425](https://bloobirds.atlassian.net/browse/P21-1425)
- add missing z for utc-0 ([03123a3](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/03123a3155ac8bc6a04e499b73a71f1c099ff565))
- **Data Attributes:** Added data attributes to several components ([3604601](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/36046018fb3d9446c015409d31f34741e8b75f54))
- **import-improvement:** [[P21-592](https://bloobirds.atlassian.net/browse/P21-592) ([932d505](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/932d505c14409735f134b16a2e1aea8836ed7acb))
- **import-improvement:** [[P21-593](https://bloobirds.atlassian.net/browse/P21-593)] Removed bobjectApi call for bulk insertion. ([39bdc8a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/39bdc8a00169023ee5089249308207de43aab9ce))
- **import-improvements:** [[P21-600](https://bloobirds.atlassian.net/browse/P21-600)](<[6434ada](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/6434ada0f696dcb9452114a3eed3cadc175940f3)>)
- **import-improvements:** [[P21-662](https://bloobirds.atlassian.net/browse/P21-662), [P21-789](https://bloobirds.atlassian.net/browse/P21-789), [P21-790](https://bloobirds.atlassian.net/browse/P21-790), [P21-791](https://bloobirds.atlassian.net/browse/P21-791)](<[7ad7d47](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/7ad7d4794d2fa9ea5af6a3d2bb265bb45ebb4816)>)
- **import-improvements:** [[P21-803](https://bloobirds.atlassian.net/browse/P21-803)] Scroll of validation messages added. ([9902c41](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/9902c417c4a3c2b4f942d3d13c2e5e7cdca9b973))
- **import-improvements:** [[P21-903](https://bloobirds.atlassian.net/browse/P21-903), [P21-661](https://bloobirds.atlassian.net/browse/P21-661), [P21-799](https://bloobirds.atlassian.net/browse/P21-799)]. ([d0cf28d](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/d0cf28d5a6ee9be0ea0e566572a015c2693c3b8f))
- **import-improvements:** [[P21-944](https://bloobirds.atlassian.net/browse/P21-944), [P21-943](https://bloobirds.atlassian.net/browse/P21-943)](<[c2e64fa](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/c2e64fafff4b2fc7f28c909514f5eec5bcbbf90b)>)
- **import-improvements:** [[P21-944](https://bloobirds.atlassian.net/browse/P21-944), [P21-943](https://bloobirds.atlassian.net/browse/P21-943)](<[6214539](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/621453949b57a6214e4614fa068bf7c531f3d242)>)
- **import-improvements:** [[P21-944](https://bloobirds.atlassian.net/browse/P21-944), [P21-943](https://bloobirds.atlassian.net/browse/P21-943)] Spinner and text added on file uploading. ([1831ad4](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/1831ad474ffc322ff008312fb4a252453ec02d9d))
- **import-improvements:** [[P21-944](https://bloobirds.atlassian.net/browse/P21-944), [P21-943](https://bloobirds.atlassian.net/browse/P21-943)] Spinner and text added on file uploading. ([4752080](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/4752080faf1407c15bdd08c0c95511c5724313e0))
- **importimprovement:** Changed import name to bloobirds color ([a803499](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/a80349982233f44e9e83a4e9b9bac35a3b3d1b28))
- **importimprovement:** Now when closing imports Modal it return to the import history table ([5bb903e](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/5bb903efa95f99644475f0356b0229f9f1d17627))
- **ImportImprovements:** [[P21-764](https://bloobirds.atlassian.net/browse/P21-764)] Added multiple options on import. ([29573e0](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/29573e09da57aa827ac79c6c7d1ed9657141a1df))
- **ImportImprovements:** [[P21-764](https://bloobirds.atlassian.net/browse/P21-764)] Corrected params range for endpoint call: ([e15f6a1](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e15f6a1ce0e33a693ce3688a75b9c13d775ef5fe)), closes [P21-662](https://bloobirds.atlassian.net/browse/P21-662)
- **ImportImprovements:** debugger removed ([038f67d](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/038f67d27794dbf73620b08e738f3fa4097403b2))
- **timezones:** [[P21-1161](https://bloobirds.atlassian.net/browse/P21-1161)]: Added control to check if there's imports going on. ([eab57f8](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/eab57f82eae3d992d7e341d7d9e2902f750de51a))
- **weapp:** remove meeting card ([1c6bac7](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/1c6bac779efb63b50e411be083aa833fe4472c85))
- **webapp:** [[P21-665](https://bloobirds.atlassian.net/browse/P21-665)] Hide stop after doble check. ([586b28e](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/586b28e6db0a3e9c97f28235f778ed35dd7b6904))
- **webapp:** add a new option in Account settings sidebar ([e84b4d2](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e84b4d2960896e4bcf6b5bff01154e0881fee2e0))
- **webapp:** add full sales validation ([a6de561](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/a6de561af59d5266dc6a6f551868cf4fb7e615cb))
- **webapp:** add lead new in the meeting task card ([6669fff](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/6669fff36bf80c49da4807e3dd52535a971e09b6))
- **webapp:** add new param in contact to url to open the cadence control ([1e41ce6](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/1e41ce6930654cb25f0e3d8a5b32e3060f0816f9))
- **webapp:** add sort filter in meeting tab ([7eab50e](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/7eab50e00be74af9ef41a521d60bb7dd66dc2d91))
- **webapp:** add the new type in Task card ([99bb823](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/99bb8237dd62c3c449612701e8e72d84452d6c4c))
- **webapp:** add the new url ([8aa1e15](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/8aa1e15e3c58b3281dd41169621fe906f6decc7e))
- **webapp:** add validation in list object ([5a2eae4](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/5a2eae4c82555dc5453622755ace8a0206e5461d))
- **webapp:** added the minimize emails feature ([a7c118d](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/a7c118d3c45580977599f8b21d339f53dfa6511c)), closes [P21-1022](https://bloobirds.atlassian.net/browse/P21-1022)
- **webapp:** added the minimize emails feature ([6acd494](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/6acd494a093eafe4390bc729b3fa635835109d86)), closes [P21-1022](https://bloobirds.atlassian.net/browse/P21-1022)
- **webapp:** change text ([cdf6a8a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/cdf6a8a61807cba38c2144a5e727f3ea9d1d1f9f))
- **webapp:** Change the Account settings sidebar by the new component ([1b20ea0](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/1b20ea0f92f458c1dee22df13717a6a6fe0889f5))
- **webapp:** changes in inactive tab ([373df46](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/373df460011add719c5b352cbce36e1b194ef9d0))
- **webapp:** cleared the recoil root state to change it when changes ([dce173e](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/dce173e78305c5cae5b0cd6d49dc192e5497c286)), closes [P21-1022](https://bloobirds.atlassian.net/browse/P21-1022)
- **webapp:** counter tabs ([5fd7657](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/5fd7657a7548f21555e4150cb4c64f86aaf65f44))
- **webapp:** create a new type of task ([7b083c1](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/7b083c1587d659f9ee10ec07e8a4548f96776924))
- **webapp:** create a new type of task ([e0acf1a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e0acf1ac44478b665bbbbb02a91a1341ba05ba28))
- **webapp:** create the new page ([1fc77ae](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/1fc77aec2f15e859ded49b3b98e1cff4de4957df))
- **webapp:** inject the reference bobjects to opportunities ([f88ee48](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/f88ee487481d6209aaa6848337d2fd1ee79f70ff))
- **webapp:** meeting tab without correct queries ([95e656d](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/95e656de7f1cf0c8cd2d95f42c90dec959fa9ed0))
- **webapp:** modified the header of the email modal ([1f4faba](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/1f4faba331c2d5d2fead653cfec039ce6a5b7746)), closes [P21-1022](https://bloobirds.atlassian.net/browse/P21-1022)
- **webapp:** modified the header of the email modal ([5ea46bb](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/5ea46bb7ccb782a49cb3a1c0ae0f13a48cddd231)), closes [P21-1022](https://bloobirds.atlassian.net/browse/P21-1022)
- **webapp:** modified the header of the email modal ([814aea2](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/814aea2b0e34cd45ab22b632466c824ba38b3ae0)), closes [P21-1022](https://bloobirds.atlassian.net/browse/P21-1022)
- **webapp:** modified the header of the email modal ([3176ff7](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/3176ff793519449cc2f775afacc9d9a3e9e1ba79)), closes [P21-1022](https://bloobirds.atlassian.net/browse/P21-1022)
- **webapp:** new card ([265e353](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/265e353abb6ba3bc870020ecbc92277d9dd6ca77))
- **webapp:** opportunity status now it's a field, so, change the way to access the info ([a1e8ddc](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/a1e8ddccf9fe00d853740a8ae16da4648b3750ed))
- **webapp:** remove commented code ([990180f](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/990180fb64bc1445901734e0a9c0c60d61f82adb))
- **webapp:** remove Preferences section in Account Settings ([414d858](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/414d858f45f17a77457e12d0e602d5f7b5eba558))
- **webapp:** remove tooltip ([d2b961d](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/d2b961d74cc1ef7b39a8f8d1e9c8130eefc2869b))
- **webapp:** remove unnecessary provider ([2378908](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/23789087bc3ca49f6e93f4acd77eef87acc41284))
- **webapp:** select the correcct option in the menu ([ca90086](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/ca900862ef7dc150b0069cd5a37fd50a7561fdfb))
- **webapp:** update the inactive counter ([27c8e9f](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/27c8e9f5b5dda1a22a875e439f64d17337fc97b2))

### Bug Fixes

- **cadence:** Fix cadence table activities ([13f80fe](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/13f80fea3443239a03c6995d8379034e05663e30)), closes [P21-1639](https://bloobirds.atlassian.net/browse/P21-1639)
- **importImprovements:** [[P21-1256](https://bloobirds.atlassian.net/browse/P21-1256)] fake stopped imports ([bf7bf02](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/bf7bf020ee39d53bff0ca8e70ebe3a23798c50ea))
- **importImprovements:** [[P21-1466](https://bloobirds.atlassian.net/browse/P21-1466)] [ ([9901db4](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/9901db405d6939bbc86b3a74f562eb2796ace1db))
- **importImprovements:** [[P21-928](https://bloobirds.atlassian.net/browse/P21-928)] Added ref to div to close navigation menu. ([74d47b4](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/74d47b4e1e3ca65c61057146fcc82f80e4043b92))
- **importImprovements:** fixed codacy error ([bc4d4f2](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/bc4d4f2a0c8481e1bb7343cc6bafef8339ca29a8))
- **importImprovements:** just show opportunity import option to feature sales accounts ([50efcc9](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/50efcc9c87bbe3a26236b6fab0b1868cb64bf50f))
- **importImprovements:** refactor of Pr comments ([17975b2](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/17975b20b2516de622487af1174ceaa7c52e9e27))
- **importImprovements:** removed console.log ([71ee471](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/71ee4714d198420c16b2f1c0839ca33daffc7c2f))
- **importImprovements:** reviewed changes ([107312b](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/107312b6fa12b1dbc37816e9790ff1270fab9fef))
- **importImprovements:** typo error ([bc48b23](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/bc48b23a3029422c6a3c4148f3bf7fe3c21a3942))
- dont mess around with datetime ([ce2034a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/ce2034a75ecf75bcb1eebe62b295d30887ff01ca)), closes [P21-1286](https://bloobirds.atlassian.net/browse/P21-1286)
- **importImprovements:** [[P21-1288](https://bloobirds.atlassian.net/browse/P21-1288)] changed copy of the warning about the on going imports ([7804ec4](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/7804ec42bbf5f18f39a11b67c3de416cfaf4db66))
- **imports:** [[P21-1233](https://bloobirds.atlassian.net/browse/P21-1233)](<[22c5f2c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/22c5f2c215701c0230edf78cdc7ce02e738353d6)>)
- **imports:** [[P21-1233](https://bloobirds.atlassian.net/browse/P21-1233)](<[2f228fd](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/2f228fdcfad488a072edd1869ea298cf549bf4aa)>)
- **imports:** [[P21-1233](https://bloobirds.atlassian.net/browse/P21-1233)] replaced import colors by var() ([349c991](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/349c991b542180ddb9b7918f7de28713b852ebe1))
- **imports:** [[P21-1276](https://bloobirds.atlassian.net/browse/P21-1276)][[P21-1279](https://bloobirds.atlassian.net/browse/P21-1279)](<[7f7cf9c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/7f7cf9c5c26a5fddf9cf2304227086f9eb973cd2)>)
- **webapp:** add alphabetically order in Opportunity status filter ([ae39d30](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/ae39d30041af2f329ccfd4d307f60a7a5115e3d3))
- **webapp:** after merge ([3a539ed](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/3a539eddbe160ae91457e9184f03e9a55ab7c07f))
- **webapp:** fixes in Meeting tab ([4789bf2](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/4789bf25a6888154b309fcdf90d2e67ee16daacd))
- **webapp:** in sales page, the cards show the opportunity last attempt date ([749f1c5](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/749f1c5fe27e0bb0fd3bf9495bca49fd67be6349))
- **webapp:** minor release bugs ([4774e5c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/4774e5cb7d10c8a692dcb0b7b41e5aeeccbb65c0))
- **webapp:** the permissions not working ([d6e5f41](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/d6e5f41b1a69bc18838e5a01cdff5398d462ad0c))
- show madrid time zone time ([362d07f](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/362d07ffbbab7a2c49ad81dd3c2a07560cfd0d41))

### [2.8.2-preprod.1](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.8.1...v2.8.2-preprod.1) (2021-04-29)

### Bug Fixes

- avoid divide in the api calls shown in syncstattus tab ([777b9f1](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/777b9f138381d029dd76430e1747fa6482a36f4c)), closes [P21-1681](https://bloobirds.atlassian.net/browse/P21-1681)

### [2.8.1](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.8.0...v2.8.1) (2021-04-28)

### Bug Fixes

- integration logs and mapping table alignment ([e939611](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e93961193b796e7e929bb2a15d65f92c414cb69e)), closes [P21-1663](https://bloobirds.atlassian.net/browse/P21-1663)
- integration logs and mapping table alignment ([9b99214](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/9b99214b93bd47e3d4546d676985e3278d0d17bb))

### [2.8.1-preprod.1](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.8.0...v2.8.1-preprod.1) (2021-04-28)

### Bug Fixes

- integration logs and mapping table alignment ([e939611](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e93961193b796e7e929bb2a15d65f92c414cb69e)), closes [P21-1663](https://bloobirds.atlassian.net/browse/P21-1663)
- integration logs and mapping table alignment ([9b99214](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/9b99214b93bd47e3d4546d676985e3278d0d17bb))

## [2.8.0](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.7.1...v2.8.0) (2021-04-27)

### Features

- **webapp:** add the new step into the modal ([fbe200c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/fbe200c90fa84d0a3101cda602727cf3edbdf2d7))
- **webapp:** add validation ([bc3b691](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/bc3b691338a49c61c1332f1c7f05744fff37a9c7))
- **webapp:** create two new machine state to set the lead id and the new step of the modal ([3bf991f](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/3bf991f2f495c9c4071746afc6ec1ec6456cc48c))
- **webapp:** modify the opportunity control modal to allow that show the selected opprtunity info ([fadda1e](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/fadda1ea9557e01622dc02f3d213b11f3e0e617d))
- **webapp:** new step of the modal ([012bbf3](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/012bbf32c2d58a5201c6b713a3c095f715e79eb3))
- **webapp:** new variables ([a7fb109](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/a7fb1093f791f6465f900e50b2960ca079a1db94))
- **webapp:** remove console ([164860b](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/164860b080b1bb86ca2e979faec06e385bc23995))

### Bug Fixes

### Features

- **dashboards:** added atom track of side bar open ([db6bf0d](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/db6bf0d1b62354d349d8f0f0c0899c220843e681))
- **dashboards:** added first iteration of drill down modal links ([5ea8b75](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/5ea8b75ed5662f129f6c3d51dd9fb1ad8a6f2b72))
- **dashboards:** added null field for Null cases ([c501500](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/c501500fed764d0f9af1b3d4c8ba306de46e15c9))
- **dashboards:** drill down on group by charts enabled ([d666ca6](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/d666ca651d5754de85c1686ae52c1b5d176d0715))
- **dashboards:** updated component library and applied the onClick to the TableRow instead of TableCell ([b4c4f59](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/b4c4f5903c688a040601d49c4175967a4d6cf67f))
- **dashboards:** updated library component version and have vertical scroll + narrower columns ([781adae](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/781adaec5fbf898348290dfeb3f8c91b8744f525))
- **dashboards:** when clicking on a drill down row a new tab opens with the contact view ([712f79a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/712f79af75875e9d5e214d8d407c7c6290bcc77c))

### Bug Fixes

- **dashboards:** [P21-1191](https://bloobirds.atlassian.net/browse/P21-1191) order filters values ([dfe02d3](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/dfe02d31f05ab81777d3f093bca9d99859665521))
- **dashboards:** [P21-1430](https://bloobirds.atlassian.net/browse/P21-1430) Cohorts panel should not have disclaimer from group by ([0dabcf4](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/0dabcf4c7c0a84e247f21051fa1f72ca536777a6))
- **dashboards:** fix handle errors from backend ([22555fd](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/22555fda07d1c255e5f489e24d74f3c7fa3befe6))
- **dashboards:** fix responsiveness for scenario where the side menu is open ([a8d595d](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/a8d595d16b395f468128a73ca16e11d585e10cc5))
- **dashboards:** handled case for Leads without company ([833572e](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/833572e2bbb29fa58a5ed5b4cb0d20f6e40fcdf6))
- **dashboards:** requested changes fix ([4decb90](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/4decb9007fe574867635b8a4f28bedac24f72243))
- **dashboards:** requested changes fix ([368561c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/368561cef1f0cb25f3238952cebf1661ca4ade03))
- **dashboards:** reset from recoil was not working, made own reset ([67034b0](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/67034b0667214f53ce5c4c5b23cc526e94b3fa7a))
- **dashboards:** when we don't have a bobjectfield id, we do not drill down that bar ([31908d5](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/31908d59bba130fc721a1fd2871f8c3020860b60))

### [2.6.4-preprod.1](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.6.3...v2.6.4-preprod.1) (2021-04-22)

### Bug Fixes

- ui crashes when activity type undefined ([b9a0c76](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/b9a0c768c4b92c7d79f162d4d4efb4d6b5881661))

### [2.6.3-preprod.2](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.6.3-preprod.1...v2.6.3-preprod.2) (2021-04-22)

### Bug Fixes

- ui crashes when activity type undefined ([b9a0c76](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/b9a0c768c4b92c7d79f162d4d4efb4d6b5881661))

### [2.6.3-preprod.1](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.6.2...v2.6.3-preprod.1) (2021-04-21)

### Bug Fixes

- **dashboards:** hide delay message from reporting db ([6d0ef63](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/6d0ef63614f952261e5039dcc738d1f5d4eab6ae))
- **webapp:** the Contact flow modal is open when click in Opportunity link ([db71ad2](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/db71ad2598ba1fd28d98e637cd74ef887b288cf8))

### [2.6.2-preprod.4](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.6.2-preprod.3...v2.6.2-preprod.4) (2021-04-21)

### Bug Fixes

- **dashboards:** hide delay message from reporting db ([6d0ef63](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/6d0ef63614f952261e5039dcc738d1f5d4eab6ae))

### [2.6.2-preprod.3](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.6.2-preprod.2...v2.6.2-preprod.3) (2021-04-21)

### Bug Fixes

- **webapp:** the Contact flow modal is open when click in Opportunity link ([db71ad2](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/db71ad2598ba1fd28d98e637cd74ef887b288cf8))

### [2.6.2](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.6.1...v2.6.2) (2021-04-20)

### Bug Fixes

- **importImprovements:** fixed codacy error ([e8354b8](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e8354b8141f29c4df59840cf075f4a6d059ed114))
- **webapp:** A list of leads cannot be downloaded if it has a company field (column) that has been deleted. ([43b6e6e](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/43b6e6ec7a4b6570465deaf2faaea8d10ab2b1df))

### [2.6.2-preprod.2](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.6.2-preprod.1...v2.6.2-preprod.2) (2021-04-20)

### Bug Fixes

- **webapp:** A list of leads cannot be downloaded if it has a company field (column) that has been deleted. ([43b6e6e](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/43b6e6ec7a4b6570465deaf2faaea8d10ab2b1df))

### [2.6.2-preprod.1](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.6.1...v2.6.2-preprod.1) (2021-04-20)

### Bug Fixes

- **importImprovements:** fixed codacy error ([e8354b8](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e8354b8141f29c4df59840cf075f4a6d059ed114))

### [2.6.1](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.6.0...v2.6.1) (2021-04-20)

### Bug Fixes

- Increased number of leads fetched in lead list view from contact layout ([5597c42](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/5597c42d13684377c071ea38fc38287c2c98a2ef)), closes [P21-1586](https://bloobirds.atlassian.net/browse/P21-1586)
- Show error when not finding apiCalls number . ([baafd4e](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/baafd4e0abda5a5e649ae3bf0f6bceeba2a5f3b7)), closes [P21-1471](https://bloobirds.atlassian.net/browse/P21-1471)

### [2.6.1-preprod.1](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.6.0...v2.6.1-preprod.1) (2021-04-20)

### Bug Fixes

- Increased number of leads fetched in lead list view from contact layout ([5597c42](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/5597c42d13684377c071ea38fc38287c2c98a2ef)), closes [P21-1586](https://bloobirds.atlassian.net/browse/P21-1586)
- Show error when not finding apiCalls number . ([baafd4e](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/baafd4e0abda5a5e649ae3bf0f6bceeba2a5f3b7)), closes [P21-1471](https://bloobirds.atlassian.net/browse/P21-1471)

## [2.6.0-preprod.2](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.6.0-preprod.1...v2.6.0-preprod.2) (2021-04-20)

### Bug Fixes

- Increased number of leads fetched in lead list view from contact layout ([5597c42](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/5597c42d13684377c071ea38fc38287c2c98a2ef)), closes [P21-1586](https://bloobirds.atlassian.net/browse/P21-1586)
- Show error when not finding apiCalls number . ([baafd4e](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/baafd4e0abda5a5e649ae3bf0f6bceeba2a5f3b7)), closes [P21-1471](https://bloobirds.atlassian.net/browse/P21-1471)

## [2.6.0-preprod.1](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.5.0...v2.6.0-preprod.1) (2021-04-20)

### Features

- **timeZones:** fixed two bugs [[P21-1462](https://bloobirds.atlassian.net/browse/P21-1462)][[P21-1461](https://bloobirds.atlassian.net/browse/P21-1461)](<[60fcc49](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/60fcc49c955343a4a82f9e942036621dc605fd2e)>)

### Bug Fixes

- **timeZones:** added hook for timeZones feature ([787f072](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/787f0724ac7dc82ed8ebb929557fbfa7a6d1e599))
- **timeZones:** added useTimeZones hook ([02716c6](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/02716c630a210988a73af7410215f59810367453))
- **timeZones:** bugs [P21-1463](https://bloobirds.atlassian.net/browse/P21-1463), [P21-1462](https://bloobirds.atlassian.net/browse/P21-1462), [P21-1461](https://bloobirds.atlassian.net/browse/P21-1461) ([ea631c6](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/ea631c6f309ae35f43de7c8189344bd350cc0d8b))
- **timeZones:** fixed codacy error ([e25d025](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e25d025ae47ea95faa56ea6c7e38e6cd6e45ac8a))
- **timeZones:** fixed handle button disabled ([fc6351d](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/fc6351dd523c2f114492af78fc70bca0ed296fa5))
- **timeZones:** refactor time zones hook ([212b1f2](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/212b1f2dd7125113c795737de843040025de9f2a))

## [2.5.0](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.4.0...v2.5.0) (2021-04-17)

### Features

- **dashboards:** added % unit to all conversion rates charts. Updated component library ([d78d1c6](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/d78d1c6567b92411d43dd572f554eab27ab927b0))
- **dashboards:** added final style to component delay ([3147925](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/3147925290d858269f9d283ae3800980026dd83a))
- **dashboards:** added handle of camel case vs snake case for the URL ([5a16f52](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/5a16f52da30668a9adde8a5a1ecce1f2b63cc87e))
- **dashboards:** added more styling to the delay component and added the visibleWarning to the atom ([05bbe07](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/05bbe074385e294566890770588652ed6219629a))
- **dashboards:** filters at url when navigating no longer required ([1d859cd](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/1d859cd0de76b07253963946872542eecea0dbc8))
- **dashboards:** for conversion rates, there are cases where it is 0% as CR. We handle this ([013bf39](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/013bf3922eaa8d1fd27b2727e77642b00fc365b3))
- **dashboards:** last changes on reporting delay. To know when to show the message ([7a55ccf](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/7a55ccfb521dfa84a7531cef01f54854767491ce))
- **dashboards:** reporting delay added ([903b070](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/903b070ecf20ec43163cf296c5b9e090949e6c72))
- **dashboards:** reporting delay style ([14d7295](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/14d7295444739268b3ae08b605ea3f966bfc4741))
- **dashboards:** side navigation menu added and new dashboard Conversion Rates added ([867646b](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/867646bcdcca66e0346bd2484da07d4bd23af2b5))
- **dashboards:** update component library ([d82c7bc](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/d82c7bcfc55188af80e31df1198bc9b1e470d999))
- **dashboards:** update descriptions ([8f5c352](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/8f5c3524c0d76fb1a07857f4684475c96b18c543))
- **dashboards:** updated descriptions and titles for the new charts ([d6e5a87](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/d6e5a8755517b341cd82849dd269f2f216fe293e))
- **timezones:** [noIssue]: filter field name changed. ([4419077](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/44190776866be1c3ce70353c4801edf133fdfa81))
- **timeZones:** changed cadence table in order to change depending of users timezone ([7f07568](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/7f075684822c44912eaf3f6ca6b641c5861b1abd))

### Bug Fixes

- **dashboards:** [P21-1307](https://bloobirds.atlassian.net/browse/P21-1307) we may have null values coming from backend ([0e9cbb3](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/0e9cbb3663326268e077675ef676936d071de084))
- **dashboards:** [P21-1468](https://bloobirds.atlassian.net/browse/P21-1468) change default time ranges to be as lists ([19967eb](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/19967eb6601ccbc13286161601d0759276649f29))
- **dashboards:** drilldown is not working when initially filtered ([29d415c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/29d415cf6aaa001a693221b37b68817bf12b7e59))
- **dashboards:** evolution charts with 0s were broken ([a01b362](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/a01b3621fe5dd17e1cbe1e4f7e57d843720dcf80))
- **dashboards:** fix issue with param persisting ([f76e93b](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/f76e93b9efbe3832fed4c90653422c736fc3daa0))
- **dashboards:** fix stuck loading state on filters, and handle edge case in setLoadingStateEarly ([3b3d897](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/3b3d8970b6690f90202827d57e390e81e8ea2b61))
- **dashboards:** fix test ([c46ea47](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/c46ea47bec9634f0e2fcfcc3c72eb4d5b7bc9284))
- **dashboards:** fixing padding for cohorts ([ba0a0c2](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/ba0a0c283df407007188b5bf151fb898f76eb193))
- **dashboards:** footer was on wrong place ([5b1d089](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/5b1d089fc65e1bf50c7072caff522115d766d2cd))
- **dashboards:** from backend we receive the real amount of total items without paginating ([89aadf3](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/89aadf3f1b92653d5508e42d3be268383644db08))
- **dashboards:** lint fix ([4a82e4b](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/4a82e4b1f7a1222a0674720afb339488569c5c1c))
- **dashboards:** lint fix ([81b5794](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/81b5794a2cbc954b45e0b2552296880782a7f38f))
- **dashboards:** lint fix ([874d4b5](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/874d4b53c1503b8cd7b5d89228dac84663dfb1a5))
- **dashboards:** lint fix ([90e7c57](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/90e7c5772b5b15a634d577642995fdb7dffdb369))
- **dashboards:** padding in cohorts ([76c9df6](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/76c9df6c1fabef8699e59df1ecae872e42e974d4))
- **dashboards:** pass test fix ([52e4df2](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/52e4df20784bf48c601e75486168afde19a0410e))
- **dashboards:** prevent flashes of stale state ([66e23dd](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/66e23ddb8f7b5e0a7a80bd937a4dbfff2987d0d9))
- **dashboards:** requested changes ([8f3750f](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/8f3750fa221bc030c6a49b71664571f953a94270))
- **dashboards:** test fix ([2936266](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/2936266dd5e7581f3566593e037d01795c391de8))
- **dashboards:** test fix ([b92132a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/b92132ad9eebf6faa7ab0369ec177617ba8c94c7))
- **dashboards:** updated descriptions ([f7340d6](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/f7340d647bd8faa2229e28bfcff8d505de007ad2))
- **importImprovements:** changed variable names ([5286919](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/5286919129f431de95eadc811a8ad1e00d52318b))
- charts styles issues ([9324d88](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/9324d88eab4177b2dd7c55db849cb28a820e2b23)), closes [P21-1179](https://bloobirds.atlassian.net/browse/P21-1179) [P21-1130](https://bloobirds.atlassian.net/browse/P21-1130) [P21-1187](https://bloobirds.atlassian.net/browse/P21-1187) [P21-1369](https://bloobirds.atlassian.net/browse/P21-1369) [P21-1391](https://bloobirds.atlassian.net/browse/P21-1391)
- **timeZones:** fixed lint bugs ([e90f4ed](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e90f4ed53c70c34142b34044c3499289ba916d38))
- **timeZones:** fixed little bugs ([e601c98](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e601c98d75024b1c443df6ca5ffc5194b67e99c5))

## [2.5.0-preprod.4](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.5.0-preprod.3...v2.5.0-preprod.4) (2021-04-16)

### Features

- **dashboards:** filters at url when navigating no longer required ([1d859cd](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/1d859cd0de76b07253963946872542eecea0dbc8))
- **dashboards:** update component library ([d82c7bc](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/d82c7bcfc55188af80e31df1198bc9b1e470d999))
- **dashboards:** update descriptions ([8f5c352](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/8f5c3524c0d76fb1a07857f4684475c96b18c543))

### Bug Fixes

- **dashboards:** [P21-1307](https://bloobirds.atlassian.net/browse/P21-1307) we may have null values coming from backend ([0e9cbb3](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/0e9cbb3663326268e077675ef676936d071de084))
- **dashboards:** [P21-1468](https://bloobirds.atlassian.net/browse/P21-1468) change default time ranges to be as lists ([19967eb](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/19967eb6601ccbc13286161601d0759276649f29))
- **dashboards:** fix issue with param persisting ([f76e93b](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/f76e93b9efbe3832fed4c90653422c736fc3daa0))
- **dashboards:** fix stuck loading state on filters, and handle edge case in setLoadingStateEarly ([3b3d897](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/3b3d8970b6690f90202827d57e390e81e8ea2b61))
- **dashboards:** fix test ([c46ea47](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/c46ea47bec9634f0e2fcfcc3c72eb4d5b7bc9284))
- **dashboards:** fixing padding for cohorts ([ba0a0c2](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/ba0a0c283df407007188b5bf151fb898f76eb193))
- **dashboards:** footer was on wrong place ([5b1d089](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/5b1d089fc65e1bf50c7072caff522115d766d2cd))
- **dashboards:** padding in cohorts ([76c9df6](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/76c9df6c1fabef8699e59df1ecae872e42e974d4))
- **dashboards:** prevent flashes of stale state ([66e23dd](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/66e23ddb8f7b5e0a7a80bd937a4dbfff2987d0d9))

## [2.5.0-preprod.3](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.5.0-preprod.2...v2.5.0-preprod.3) (2021-04-16)

### Features

- **timezones:** [noIssue]: filter field name changed. ([4419077](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/44190776866be1c3ce70353c4801edf133fdfa81))
- **timeZones:** changed cadence table in order to change depending of users timezone ([7f07568](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/7f075684822c44912eaf3f6ca6b641c5861b1abd))

### Bug Fixes

- **importImprovements:** changed variable names ([5286919](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/5286919129f431de95eadc811a8ad1e00d52318b))
- **timeZones:** fixed lint bugs ([e90f4ed](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e90f4ed53c70c34142b34044c3499289ba916d38))
- **timeZones:** fixed little bugs ([e601c98](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e601c98d75024b1c443df6ca5ffc5194b67e99c5))

## [2.5.0-preprod.2](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.5.0-preprod.1...v2.5.0-preprod.2) (2021-04-15)

### Features

- **dashboards:** added % unit to all conversion rates charts. Updated component library ([d78d1c6](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/d78d1c6567b92411d43dd572f554eab27ab927b0))

### Bug Fixes

- **dashboards:** lint fix ([4a82e4b](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/4a82e4b1f7a1222a0674720afb339488569c5c1c))
- **dashboards:** test fix ([2936266](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/2936266dd5e7581f3566593e037d01795c391de8))

## [2.5.0-preprod.1](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.4.0...v2.5.0-preprod.1) (2021-04-15)

### Features

- **dashboards:** added final style to component delay ([3147925](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/3147925290d858269f9d283ae3800980026dd83a))
- **dashboards:** added handle of camel case vs snake case for the URL ([5a16f52](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/5a16f52da30668a9adde8a5a1ecce1f2b63cc87e))
- **dashboards:** added more styling to the delay component and added the visibleWarning to the atom ([05bbe07](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/05bbe074385e294566890770588652ed6219629a))
- **dashboards:** for conversion rates, there are cases where it is 0% as CR. We handle this ([013bf39](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/013bf3922eaa8d1fd27b2727e77642b00fc365b3))
- **dashboards:** last changes on reporting delay. To know when to show the message ([7a55ccf](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/7a55ccfb521dfa84a7531cef01f54854767491ce))
- **dashboards:** reporting delay added ([903b070](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/903b070ecf20ec43163cf296c5b9e090949e6c72))
- **dashboards:** reporting delay style ([14d7295](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/14d7295444739268b3ae08b605ea3f966bfc4741))
- **dashboards:** side navigation menu added and new dashboard Conversion Rates added ([867646b](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/867646bcdcca66e0346bd2484da07d4bd23af2b5))
- **dashboards:** updated descriptions and titles for the new charts ([d6e5a87](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/d6e5a8755517b341cd82849dd269f2f216fe293e))

### Bug Fixes

- **dashboards:** drilldown is not working when initially filtered ([29d415c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/29d415cf6aaa001a693221b37b68817bf12b7e59))
- **dashboards:** evolution charts with 0s were broken ([a01b362](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/a01b3621fe5dd17e1cbe1e4f7e57d843720dcf80))
- **dashboards:** from backend we receive the real amount of total items without paginating ([89aadf3](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/89aadf3f1b92653d5508e42d3be268383644db08))
- **dashboards:** lint fix ([81b5794](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/81b5794a2cbc954b45e0b2552296880782a7f38f))
- **dashboards:** lint fix ([874d4b5](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/874d4b53c1503b8cd7b5d89228dac84663dfb1a5))
- **dashboards:** lint fix ([90e7c57](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/90e7c5772b5b15a634d577642995fdb7dffdb369))
- **dashboards:** pass test fix ([52e4df2](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/52e4df20784bf48c601e75486168afde19a0410e))
- **dashboards:** requested changes ([8f3750f](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/8f3750fa221bc030c6a49b71664571f953a94270))
- **dashboards:** test fix ([b92132a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/b92132ad9eebf6faa7ab0369ec177617ba8c94c7))
- charts styles issues ([9324d88](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/9324d88eab4177b2dd7c55db849cb28a820e2b23)), closes [P21-1179](https://bloobirds.atlassian.net/browse/P21-1179) [P21-1130](https://bloobirds.atlassian.net/browse/P21-1130) [P21-1187](https://bloobirds.atlassian.net/browse/P21-1187) [P21-1369](https://bloobirds.atlassian.net/browse/P21-1369) [P21-1391](https://bloobirds.atlassian.net/browse/P21-1391)
- **dashboards:** updated descriptions ([f7340d6](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/f7340d647bd8faa2229e28bfcff8d505de007ad2))

## [2.4.0](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.3.1...v2.4.0) (2021-04-13)

### Features

- **dashboards:** added pagination ([e4319c1](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e4319c1b50f371ce9c3aea872536c3f2e7ab262e))
- **dashboards:** added pagination up to 10 ([043e036](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/043e036c3e2d09b5370bff1c7afef94485feb395))
- **dashboards:** filtered group by filters with reporting enabled ([d526545](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/d52654564abc48210ea214513ade6b43805ef7b7))
- **dashboards:** more filters now checks if the fields have reporting enabled ([defb5c6](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/defb5c66c918f41615b83e712714c7b15e1ab96b))
- **dashboards:** pagination for drill down modal added. Expects backend response ([03c0fc1](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/03c0fc11baf17ed8b7fe952efb156894e9a4e28a))
- **dashboards:** update charts for overview dashboard ([d65e0f8](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/d65e0f8138969d4852e729370f903628b4b91e27))
- **dashboards:** update component library ([5e4fccb](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/5e4fccbf2057c422f5ddee9c488bbc8a43006086))

### Bug Fixes

- **dashboards:** added meetings channel + sometimes appears error if result is 0 ([a022e57](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/a022e57f57e49478087e734415c2fb304430000e))
- **dashboards:** address responsive problems ([4f49789](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/4f49789033e2be9043488a7793540bc879970b6c))
- **dashboards:** codacy fix ([9c95d16](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/9c95d167d27c104fb17248f99a74d6744d647f20))
- **dashboards:** code review fix ([559291c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/559291c7fb5c08f8bf59a99cbdd549c5ca5c5c34))
- **dashboards:** commented Meetings channel chart and uncommenting Pitch used one ([ed33db5](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/ed33db5f42f9b30f1b3c33850700b600dd83fd5a))
- **dashboards:** deleted menu side bar ([6dc253d](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/6dc253dd9f7ff42d48f6fb7ae249186efa7ade1a))
- **dashboards:** filter fields when using the search box in more filters ([faf2a5e](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/faf2a5effbcbf65392d5faec30ba3c4df9ee1efa))
- **dashboards:** fix codacy and refactor undefined ([9c9fe1b](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/9c9fe1bb8de974af71820731e2fef3f997004609))
- **dashboards:** fix pagination on drill down modal ([3afcdd2](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/3afcdd269cb2d9df254d731e23d7250a10df7156))
- **dashboards:** git review changes ([12b3a52](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/12b3a5252c975dacc132096491c2940be431c36e))
- **dashboards:** lint fix ([b7a4a9b](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/b7a4a9b001682d34ab1b037a4adabcfe71dc32c8))
- **dashboards:** lint fix ([7b8d4fb](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/7b8d4fb960d7e2ae1279a67fa85f9300f0638b4b))
- **dashboards:** responsiveness tweaks ([1338bd0](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/1338bd0382239bacb85ff66ba9395a1f7977cb1a))
- **dashboards:** sometimes lines are white and you cannot see it ([19a6f1c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/19a6f1c1c349511041fdfc8587ffc5ee85e8a11c))
- **dashboards:** sometimes the app crashes if a color does not have a background color defined ([69af7cd](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/69af7cdb7205242c6e25c439fac8fa7f6beab847))
- **dashboards:** When refreshing the dashboards for the first second a sad face appears ([d0836de](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/d0836de4012eb9a6a909200581fba14dbb4a91de))
- **dashboards:** when values information is empty we do not filter the drill down ([08e5971](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/08e597135a9191584c6833ed5abcfc832057a878))
- **webapp:** If you copy the url of an opportunity and then delete it, if you paste the url it takes you to a wrong view ([cff00ed](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/cff00ed989e540b6e44916ffd733d2c7fbea91aa))
- **webapp:** Opportunities dropdown fixes ([002e234](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/002e23456d0c608d6dd279499a7f6e3e92ea9da1))
- **webapp:** revert commit c65e9c83163f099bd5c50d48501f5547fccafb43 ([b8383a0](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/b8383a0a1a2c9006c3ada30f652a6de3575b50ef))
- **webapp:** useCadence was counting all task of an opportunity in this company ([063c5aa](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/063c5aa26450309de056b8db8c14c22988577ca7))

## [2.4.0-preprod.1](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.3.1-preprod.1...v2.4.0-preprod.1) (2021-04-13)

### Features

- **dashboards:** added pagination ([e4319c1](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e4319c1b50f371ce9c3aea872536c3f2e7ab262e))
- **dashboards:** added pagination up to 10 ([043e036](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/043e036c3e2d09b5370bff1c7afef94485feb395))
- **dashboards:** filtered group by filters with reporting enabled ([d526545](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/d52654564abc48210ea214513ade6b43805ef7b7))
- **dashboards:** more filters now checks if the fields have reporting enabled ([defb5c6](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/defb5c66c918f41615b83e712714c7b15e1ab96b))
- **dashboards:** pagination for drill down modal added. Expects backend response ([03c0fc1](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/03c0fc11baf17ed8b7fe952efb156894e9a4e28a))
- **dashboards:** update charts for overview dashboard ([d65e0f8](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/d65e0f8138969d4852e729370f903628b4b91e27))
- **dashboards:** update component library ([5e4fccb](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/5e4fccbf2057c422f5ddee9c488bbc8a43006086))

### Bug Fixes

- **dashboards:** added meetings channel + sometimes appears error if result is 0 ([a022e57](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/a022e57f57e49478087e734415c2fb304430000e))
- **dashboards:** address responsive problems ([4f49789](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/4f49789033e2be9043488a7793540bc879970b6c))
- **dashboards:** codacy fix ([9c95d16](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/9c95d167d27c104fb17248f99a74d6744d647f20))
- **dashboards:** code review fix ([559291c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/559291c7fb5c08f8bf59a99cbdd549c5ca5c5c34))
- **dashboards:** commented Meetings channel chart and uncommenting Pitch used one ([ed33db5](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/ed33db5f42f9b30f1b3c33850700b600dd83fd5a))
- **dashboards:** deleted menu side bar ([6dc253d](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/6dc253dd9f7ff42d48f6fb7ae249186efa7ade1a))
- **dashboards:** filter fields when using the search box in more filters ([faf2a5e](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/faf2a5effbcbf65392d5faec30ba3c4df9ee1efa))
- **dashboards:** fix codacy and refactor undefined ([9c9fe1b](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/9c9fe1bb8de974af71820731e2fef3f997004609))
- **dashboards:** fix pagination on drill down modal ([3afcdd2](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/3afcdd269cb2d9df254d731e23d7250a10df7156))
- **dashboards:** git review changes ([12b3a52](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/12b3a5252c975dacc132096491c2940be431c36e))
- **dashboards:** lint fix ([b7a4a9b](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/b7a4a9b001682d34ab1b037a4adabcfe71dc32c8))
- **dashboards:** lint fix ([7b8d4fb](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/7b8d4fb960d7e2ae1279a67fa85f9300f0638b4b))
- **dashboards:** responsiveness tweaks ([1338bd0](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/1338bd0382239bacb85ff66ba9395a1f7977cb1a))
- **dashboards:** sometimes lines are white and you cannot see it ([19a6f1c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/19a6f1c1c349511041fdfc8587ffc5ee85e8a11c))
- **dashboards:** sometimes the app crashes if a color does not have a background color defined ([69af7cd](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/69af7cdb7205242c6e25c439fac8fa7f6beab847))
- **dashboards:** When refreshing the dashboards for the first second a sad face appears ([d0836de](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/d0836de4012eb9a6a909200581fba14dbb4a91de))
- **dashboards:** when values information is empty we do not filter the drill down ([08e5971](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/08e597135a9191584c6833ed5abcfc832057a878))
- **webapp:** If you copy the url of an opportunity and then delete it, if you paste the url it takes you to a wrong view ([cff00ed](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/cff00ed989e540b6e44916ffd733d2c7fbea91aa))
- **webapp:** Opportunities dropdown fixes ([002e234](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/002e23456d0c608d6dd279499a7f6e3e92ea9da1))
- **webapp:** revert commit c65e9c83163f099bd5c50d48501f5547fccafb43 ([b8383a0](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/b8383a0a1a2c9006c3ada30f652a6de3575b50ef))
- **webapp:** useCadence was counting all task of an opportunity in this company ([063c5aa](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/063c5aa26450309de056b8db8c14c22988577ca7))

## [2.4.0-preprod.1](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.3.1-preprod.1...v2.4.0-preprod.1) (2021-04-13)

### Features

- **dashboards:** added pagination ([e4319c1](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e4319c1b50f371ce9c3aea872536c3f2e7ab262e))
- **dashboards:** added pagination up to 10 ([043e036](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/043e036c3e2d09b5370bff1c7afef94485feb395))
- **dashboards:** filtered group by filters with reporting enabled ([d526545](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/d52654564abc48210ea214513ade6b43805ef7b7))
- **dashboards:** more filters now checks if the fields have reporting enabled ([defb5c6](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/defb5c66c918f41615b83e712714c7b15e1ab96b))
- **dashboards:** pagination for drill down modal added. Expects backend response ([03c0fc1](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/03c0fc11baf17ed8b7fe952efb156894e9a4e28a))
- **dashboards:** update charts for overview dashboard ([d65e0f8](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/d65e0f8138969d4852e729370f903628b4b91e27))
- **dashboards:** update component library ([5e4fccb](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/5e4fccbf2057c422f5ddee9c488bbc8a43006086))

### Bug Fixes

- **dashboards:** added meetings channel + sometimes appears error if result is 0 ([a022e57](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/a022e57f57e49478087e734415c2fb304430000e))
- **dashboards:** address responsive problems ([4f49789](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/4f49789033e2be9043488a7793540bc879970b6c))
- **dashboards:** codacy fix ([9c95d16](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/9c95d167d27c104fb17248f99a74d6744d647f20))
- **dashboards:** code review fix ([559291c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/559291c7fb5c08f8bf59a99cbdd549c5ca5c5c34))
- **dashboards:** commented Meetings channel chart and uncommenting Pitch used one ([ed33db5](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/ed33db5f42f9b30f1b3c33850700b600dd83fd5a))
- **dashboards:** deleted menu side bar ([6dc253d](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/6dc253dd9f7ff42d48f6fb7ae249186efa7ade1a))
- **dashboards:** filter fields when using the search box in more filters ([faf2a5e](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/faf2a5effbcbf65392d5faec30ba3c4df9ee1efa))
- **dashboards:** fix codacy and refactor undefined ([9c9fe1b](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/9c9fe1bb8de974af71820731e2fef3f997004609))
- **dashboards:** fix pagination on drill down modal ([3afcdd2](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/3afcdd269cb2d9df254d731e23d7250a10df7156))
- **dashboards:** git review changes ([12b3a52](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/12b3a5252c975dacc132096491c2940be431c36e))
- **dashboards:** lint fix ([b7a4a9b](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/b7a4a9b001682d34ab1b037a4adabcfe71dc32c8))
- **dashboards:** lint fix ([7b8d4fb](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/7b8d4fb960d7e2ae1279a67fa85f9300f0638b4b))
- **dashboards:** responsiveness tweaks ([1338bd0](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/1338bd0382239bacb85ff66ba9395a1f7977cb1a))
- **dashboards:** sometimes lines are white and you cannot see it ([19a6f1c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/19a6f1c1c349511041fdfc8587ffc5ee85e8a11c))
- **dashboards:** sometimes the app crashes if a color does not have a background color defined ([69af7cd](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/69af7cdb7205242c6e25c439fac8fa7f6beab847))
- **dashboards:** When refreshing the dashboards for the first second a sad face appears ([d0836de](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/d0836de4012eb9a6a909200581fba14dbb4a91de))
- **dashboards:** when values information is empty we do not filter the drill down ([08e5971](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/08e597135a9191584c6833ed5abcfc832057a878))

## [2.4.0-preprod.1](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.3.1-preprod.1...v2.4.0-preprod.1) (2021-04-13)

### Features

- **dashboards:** added pagination ([e4319c1](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e4319c1b50f371ce9c3aea872536c3f2e7ab262e))
- **dashboards:** added pagination up to 10 ([043e036](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/043e036c3e2d09b5370bff1c7afef94485feb395))
- **dashboards:** filtered group by filters with reporting enabled ([d526545](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/d52654564abc48210ea214513ade6b43805ef7b7))
- **dashboards:** more filters now checks if the fields have reporting enabled ([defb5c6](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/defb5c66c918f41615b83e712714c7b15e1ab96b))
- **dashboards:** pagination for drill down modal added. Expects backend response ([03c0fc1](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/03c0fc11baf17ed8b7fe952efb156894e9a4e28a))
- **dashboards:** update charts for overview dashboard ([d65e0f8](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/d65e0f8138969d4852e729370f903628b4b91e27))
- **dashboards:** update component library ([5e4fccb](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/5e4fccbf2057c422f5ddee9c488bbc8a43006086))

### Bug Fixes

- **dashboards:** added meetings channel + sometimes appears error if result is 0 ([a022e57](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/a022e57f57e49478087e734415c2fb304430000e))
- **dashboards:** address responsive problems ([4f49789](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/4f49789033e2be9043488a7793540bc879970b6c))
- **dashboards:** codacy fix ([9c95d16](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/9c95d167d27c104fb17248f99a74d6744d647f20))
- **dashboards:** code review fix ([559291c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/559291c7fb5c08f8bf59a99cbdd549c5ca5c5c34))
- **dashboards:** commented Meetings channel chart and uncommenting Pitch used one ([ed33db5](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/ed33db5f42f9b30f1b3c33850700b600dd83fd5a))
- **dashboards:** deleted menu side bar ([6dc253d](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/6dc253dd9f7ff42d48f6fb7ae249186efa7ade1a))
- **dashboards:** filter fields when using the search box in more filters ([faf2a5e](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/faf2a5effbcbf65392d5faec30ba3c4df9ee1efa))
- **dashboards:** fix codacy and refactor undefined ([9c9fe1b](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/9c9fe1bb8de974af71820731e2fef3f997004609))
- **dashboards:** fix pagination on drill down modal ([3afcdd2](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/3afcdd269cb2d9df254d731e23d7250a10df7156))
- **dashboards:** git review changes ([12b3a52](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/12b3a5252c975dacc132096491c2940be431c36e))
- **dashboards:** lint fix ([b7a4a9b](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/b7a4a9b001682d34ab1b037a4adabcfe71dc32c8))
- **dashboards:** lint fix ([7b8d4fb](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/7b8d4fb960d7e2ae1279a67fa85f9300f0638b4b))
- **dashboards:** responsiveness tweaks ([1338bd0](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/1338bd0382239bacb85ff66ba9395a1f7977cb1a))
- **dashboards:** sometimes lines are white and you cannot see it ([19a6f1c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/19a6f1c1c349511041fdfc8587ffc5ee85e8a11c))
- **dashboards:** sometimes the app crashes if a color does not have a background color defined ([69af7cd](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/69af7cdb7205242c6e25c439fac8fa7f6beab847))
- **dashboards:** When refreshing the dashboards for the first second a sad face appears ([d0836de](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/d0836de4012eb9a6a909200581fba14dbb4a91de))
- **dashboards:** when values information is empty we do not filter the drill down ([08e5971](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/08e597135a9191584c6833ed5abcfc832057a878))

## [2.4.0-preprod.1](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.3.1-preprod.1...v2.4.0-preprod.1) (2021-04-13)

### Features

- **dashboards:** added pagination ([e4319c1](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e4319c1b50f371ce9c3aea872536c3f2e7ab262e))
- **dashboards:** added pagination up to 10 ([043e036](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/043e036c3e2d09b5370bff1c7afef94485feb395))
- **dashboards:** filtered group by filters with reporting enabled ([d526545](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/d52654564abc48210ea214513ade6b43805ef7b7))
- **dashboards:** more filters now checks if the fields have reporting enabled ([defb5c6](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/defb5c66c918f41615b83e712714c7b15e1ab96b))
- **dashboards:** pagination for drill down modal added. Expects backend response ([03c0fc1](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/03c0fc11baf17ed8b7fe952efb156894e9a4e28a))
- **dashboards:** update charts for overview dashboard ([d65e0f8](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/d65e0f8138969d4852e729370f903628b4b91e27))
- **dashboards:** update component library ([5e4fccb](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/5e4fccbf2057c422f5ddee9c488bbc8a43006086))

### Bug Fixes

- **dashboards:** added meetings channel + sometimes appears error if result is 0 ([a022e57](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/a022e57f57e49478087e734415c2fb304430000e))
- **dashboards:** address responsive problems ([4f49789](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/4f49789033e2be9043488a7793540bc879970b6c))
- **dashboards:** codacy fix ([9c95d16](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/9c95d167d27c104fb17248f99a74d6744d647f20))
- **dashboards:** code review fix ([559291c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/559291c7fb5c08f8bf59a99cbdd549c5ca5c5c34))
- **dashboards:** commented Meetings channel chart and uncommenting Pitch used one ([ed33db5](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/ed33db5f42f9b30f1b3c33850700b600dd83fd5a))
- **dashboards:** deleted menu side bar ([6dc253d](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/6dc253dd9f7ff42d48f6fb7ae249186efa7ade1a))
- **dashboards:** filter fields when using the search box in more filters ([faf2a5e](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/faf2a5effbcbf65392d5faec30ba3c4df9ee1efa))
- **dashboards:** fix codacy and refactor undefined ([9c9fe1b](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/9c9fe1bb8de974af71820731e2fef3f997004609))
- **dashboards:** fix pagination on drill down modal ([3afcdd2](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/3afcdd269cb2d9df254d731e23d7250a10df7156))
- **dashboards:** git review changes ([12b3a52](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/12b3a5252c975dacc132096491c2940be431c36e))
- **dashboards:** lint fix ([b7a4a9b](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/b7a4a9b001682d34ab1b037a4adabcfe71dc32c8))
- **dashboards:** lint fix ([7b8d4fb](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/7b8d4fb960d7e2ae1279a67fa85f9300f0638b4b))
- **dashboards:** responsiveness tweaks ([1338bd0](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/1338bd0382239bacb85ff66ba9395a1f7977cb1a))
- **dashboards:** sometimes lines are white and you cannot see it ([19a6f1c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/19a6f1c1c349511041fdfc8587ffc5ee85e8a11c))
- **dashboards:** sometimes the app crashes if a color does not have a background color defined ([69af7cd](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/69af7cdb7205242c6e25c439fac8fa7f6beab847))
- **dashboards:** When refreshing the dashboards for the first second a sad face appears ([d0836de](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/d0836de4012eb9a6a909200581fba14dbb4a91de))
- **dashboards:** when values information is empty we do not filter the drill down ([08e5971](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/08e597135a9191584c6833ed5abcfc832057a878))

### [2.3.1-preprod.1](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.3.0...v2.3.1-preprod.1) (2021-04-12)

### Bug Fixes

- **webapp:** redirect to company page if the lead has company ([f03172e](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/f03172e7c5e706dcd3981bfc1c5afb5c0666168d))
- **webapp:** Url button from company/lead card is not working ([09b4047](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/09b4047a7151e9a0df185fa7510347c9b9cb690f))

## [2.3.0-preprod.5](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.3.0-preprod.4...v2.3.0-preprod.5) (2021-04-12)

### Bug Fixes

- **webapp:** redirect to company page if the lead has company ([f03172e](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/f03172e7c5e706dcd3981bfc1c5afb5c0666168d))

## [2.3.0-preprod.4](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.3.0-preprod.3...v2.3.0-preprod.4) (2021-04-12)

### Bug Fixes

- **webapp:** Url button from company/lead card is not working ([09b4047](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/09b4047a7151e9a0df185fa7510347c9b9cb690f))

## [2.3.0-preprod.3](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.3.0-preprod.2...v2.3.0-preprod.3) (2021-04-09)

### Bug Fixes

- lead url should redirect to company if it has one ([8b7d644](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/8b7d6449a5414889830b17f5639360b0fad7622a)), closes [P21-1393](https://bloobirds.atlassian.net/browse/P21-1393)

## [2.3.0-preprod.2](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.3.0-preprod.1...v2.3.0-preprod.2) (2021-04-09)

### Features

- **data attributes:** Added data attributes to several components ([622b3ed](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/622b3edfa1d37447e2f469ce117f8337d812718c))
- **Data Attributes:** Added data attributes to several components ([90f5de7](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/90f5de77abaa96d4e7c79095d4e803aef7ab39e4))
- **weapp:** new info icon in sales page ([e380ac4](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e380ac4f160cfc614ddf176354ab463c32e13f3f))
- **webapp:** [P21-1025](https://bloobirds.atlassian.net/browse/P21-1025) Update the useTaskNavegation hook to be able to iterate through tasks with opportunities ([ec08b0f](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/ec08b0fc0bbb471a9c273f8f7a1b5da75255bfa2))
- **webapp:** [P21-1135](https://bloobirds.atlassian.net/browse/P21-1135) Update opportunity stats on the sales subhome ([0622bfb](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/0622bfb60a774d7278601c234cdd204a6b3d43dc))
- **webapp:** add ellipsis in tag group ([235bf1b](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/235bf1baecdd222c610a1813ae3e6c130fa92dc6))
- **webapp:** add new page util ([854c7eb](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/854c7eb4f4d15faaebe7be2a456c0a162666b034))
- **webapp:** add new page util ([f234b99](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/f234b994131e5b4946285ad3b9c72df5d3d82d16))
- **webapp:** add new task constants ([0c52001](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/0c520019be42d6b15e4795523045519272afb676))
- **webapp:** add sort filter in InactiveTab ([65fcf72](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/65fcf72262ce8cf9a52539bf8761481d8caceaeb))
- **webapp:** add sort filter in ScheduledTab ([e2032ba](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e2032baab91be4483525646b65a4ebde24849d34))
- **webapp:** calendar queries refactor to use it also in Sales page ([7c0c460](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/7c0c46071ac1c129ea925a885e5b2568086cf150))
- **webapp:** Change numbers style on tabs ([b6aed32](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/b6aed327a4bef62b755dc4dfd576b735c41fb944))
- **webapp:** improve filters in OnCadence tab ([4e9a6f9](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/4e9a6f9f2a7d901b9cec4ae26c5e1a4f41a0a647))
- **webapp:** inactive filters ([3a8c84e](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/3a8c84efa74fda78d9d0da5b0e44a52b4adce045))
- **webapp:** new info icon in prospect page ([996ed64](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/996ed64d95c1b4ef77a8f3aed920fd3801c53172))
- **webapp:** new Prospect/Meetings texts ([6811486](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/68114861a33307c907c8cce23202f1770a13e4c0))
- **webapp:** new Prospect/On cadence texts ([bdddfc1](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/bdddfc1213853348e20d0e3927e9cf6a9e09cd4c))
- **webapp:** new Prospect/Ready to prospect texts ([f449903](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/f449903145e84a610ec898513a9ba406812ed967))
- **webapp:** new Prospect/Scheduled texts ([4fd8a89](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/4fd8a89db06d3aac09caa4aebc48719c980b7ddf))
- **webapp:** new Sales calendar and metrics texts ([16342b0](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/16342b004272edfe1622829fc0d567adbebe19ad))
- **webapp:** new Sales/On Cadence texts ([55d3e8a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/55d3e8acd0a1bb55395aa128a1e9079cee7dc68e))
- **webapp:** new Sales/Scheduled texts ([6b732e4](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/6b732e49608276776191f477adaee0b93d26bd6f))
- **webapp:** onCadece sort filter ([d77e268](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/d77e2689bcd024bdf17a6855f9f823967273dcbe))
- **webapp:** opp status filter ([7b9aa5a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/7b9aa5a7ebcb015a089185593165444b024a4b12))
- **webapp:** opportunity status filter (WIP) ([b9938fc](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/b9938fcb7ec27c4f778a13d2ee42d8ee5f0a4d3d))
- **webapp:** remove console ([944b921](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/944b921aacc45eebac1a96b3aacdb766f9229fdf))
- **webapp:** remove empty file ([de186db](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/de186dbcf0dbc3744d5907be8988eec204f1c85b))
- **webapp:** scheduled tab filters ([a4cc81a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/a4cc81a4b2fdef3176afdc8b74273395558d742c))
- **webapp:** sort filter ([7813b70](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/7813b70bfaf84d80f728ae6cc5a9ea1b4ecc3a8c))
- **webapp:** status filter wokring ([6da9e45](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/6da9e45f70ad920f9e84a16749646c1007470d5f))
- **webapp:** update Task card to adapt to the new design ([c652243](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/c652243b36804ad40759c324e76da5889338d321))

### Bug Fixes

- **webapp:** [P21-1379](https://bloobirds.atlassian.net/browse/P21-1379) By clicking on the configure cadence modal in the opportunities, the status of the cadence changes ([6ce38c7](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/6ce38c73a98396d3b25271fd2e8da81b1009e0ab))
- add dollar as default opp prefix ([57dc5a8](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/57dc5a8f5668800bddd349ee02942cade190f4de))
- simplified the logic of the cadence hook ([28400bb](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/28400bbbd6347d4448be928b1badcedcf1d54547)), closes [P21-1281](https://bloobirds.atlassian.net/browse/P21-1281) [P21-1282](https://bloobirds.atlassian.net/browse/P21-1282)
- use created opp in next step modal ([c65e9c8](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/c65e9c83163f099bd5c50d48501f5547fccafb43))
- **webapp:** feed total count is incorrect ([aaa238a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/aaa238acb6b38edb3ba9431bb8e90fddc14c55aa))
- **webapp:** create the subscription online one time ([66e518e](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/66e518e50b918c31ce054311d6d2622bdc631e66))
- **webapp:** fixed ([589571c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/589571c9b28a6c4e4b8cb7a96afc87eeffd5ae34))
- **webapp:** improve the code ([b331ae5](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/b331ae50b7f8cdfa9ae0ffe0e0deafb34f3111ec))
- **webapp:** remove console and fix a small bug ([bf930a1](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/bf930a18cf11ba2baa27468370fddf62adddeb89))
- **webapp:** remove eslint error ([594555a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/594555a2cd0ef6e93c38be2b9627ac47ed68ae5e))
- **webapp:** remove unused code ([76dfe04](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/76dfe044496a4197d5bf831a3214d53e6722527f))
- **webapp:** remove unused hook ([ee80807](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/ee80807da8af162ef38ddb1a5ec0ca8560af9e4c))
- **webapp:** resolve fix ([63f60b2](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/63f60b260d14b06af1f6ce1ce29bf6c9fcc91f41))
- **webapp:** with the new style in the tabs extra we can see a white line ([3551dda](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/3551dda603b6817c120d5cbefaed9b773933aa3d))

## [2.3.0-preprod.1](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.2.3-preprod.5...v2.3.0-preprod.1) (2021-04-08)

### Features

- **webapp:** add new page util ([2f0c05f](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/2f0c05f2ffb88e1b5e33a7fd11608819d356acf9))

### Bug Fixes

- **webapp:** [P21-1343](https://bloobirds.atlassian.net/browse/P21-1343) If we click in 1 opportunity task from the sales subhome, we are being redirected to the company instead of the opportunity ([6cde7fc](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/6cde7fca207c1145d89a2dff8a34f102d96a0927))
- **webapp:** sales page, white line ([16d4754](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/16d4754ae61af00b635b8a5da8c26f07e975498f))

### [2.2.3-preprod.5](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.2.3-preprod.4...v2.2.3-preprod.5) (2021-04-08)

### Bug Fixes

- **webapp:** When receive an incoming call the dialer is open with incorrectly data ([e709486](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e7094864909c01f982230eab43e0dec3b3ed40a0))

### [2.2.3-preprod.4](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.2.3-preprod.3...v2.2.3-preprod.4) (2021-04-08)

### Bug Fixes

- date filters should impact which tasks are navigated ([7bd5c9a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/7bd5c9ab68397292abcceabc314742d2ab4a77b7)), closes [P21-1365](https://bloobirds.atlassian.net/browse/P21-1365)

### [2.2.3-preprod.3](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.2.3-preprod.2...v2.2.3-preprod.3) (2021-04-08)

### Bug Fixes

- **webapp:** [P21-1270](https://bloobirds.atlassian.net/browse/P21-1270) Incoming call lead's name is mixed up with the current company ([b9fa0a4](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/b9fa0a41059676f3b4e1c54bc7adf8450be22a3a))

### [2.2.3-preprod.2](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.2.3-preprod.1...v2.2.3-preprod.2) (2021-04-07)

### Bug Fixes

- avoid lead card small movement when hovering the name ([045857a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/045857a56a22656540feed8e94a75a7162877cd0))

### [2.2.3-preprod.1](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.2.2...v2.2.3-preprod.1) (2021-04-07)

### Bug Fixes

- **webapp:** [P21-1328](https://bloobirds.atlassian.net/browse/P21-1328). Leads without company are not loading the data. ([8d95c17](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/8d95c17992e2983b81a44c61b61aa281a1f03bc3))
- **webapp:** add the lead as filter ([56519fa](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/56519fad6762098e4d307bfdcece601b201b8b23))

### [2.2.2](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.2.1...v2.2.2) (2021-04-06)

### Bug Fixes

- added the new subscription system ([9205d12](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/9205d1233487e9e716756bcb9b8017e9b462c04b)), closes [P21-1077](https://bloobirds.atlassian.net/browse/P21-1077)
- include all leads in task card edit ([0f93a2b](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/0f93a2bfc3270ddae00bf94b912ae7dfcd2dd3f0)), closes [P21-1298](https://bloobirds.atlassian.net/browse/P21-1298)

### [2.2.2-preprod.1](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.2.1...v2.2.2-preprod.1) (2021-04-06)

### Bug Fixes

- added the new subscription system ([9205d12](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/9205d1233487e9e716756bcb9b8017e9b462c04b)), closes [P21-1077](https://bloobirds.atlassian.net/browse/P21-1077)
- include all leads in task card edit ([0f93a2b](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/0f93a2bfc3270ddae00bf94b912ae7dfcd2dd3f0)), closes [P21-1298](https://bloobirds.atlassian.net/browse/P21-1298)

### [2.2.1-preprod.3](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.2.1-preprod.2...v2.2.1-preprod.3) (2021-04-06)

### Bug Fixes

- include all leads in task card edit ([0f93a2b](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/0f93a2bfc3270ddae00bf94b912ae7dfcd2dd3f0)), closes [P21-1298](https://bloobirds.atlassian.net/browse/P21-1298)

### [2.2.1-preprod.2](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.2.1-preprod.1...v2.2.1-preprod.2) (2021-04-01)

### Bug Fixes

- added the new subscription system ([9205d12](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/9205d1233487e9e716756bcb9b8017e9b462c04b)), closes [P21-1077](https://bloobirds.atlassian.net/browse/P21-1077)

### [2.2.1](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.2.0...v2.2.1) (2021-03-31)

### Bug Fixes

- yarn lock ([5273767](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/5273767e46fa3d265a166e7017fc2cea214bbbdc))

### [2.2.1-preprod.1](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.2.0...v2.2.1-preprod.1) (2021-03-31)

### Bug Fixes

- yarn lock ([5273767](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/5273767e46fa3d265a166e7017fc2cea214bbbdc))

## [2.2.0](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.1.2...v2.2.0) (2021-03-31)

### Features

- **dashboards:** add multi panels to show multiple cohorts ([4a419b9](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/4a419b9b66b9372140070176945a6231c5a63548))
- **dashboards:** added colored labels for picklist at drill down modal ([a9a501d](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/a9a501db53af0a7773f0fbd0dffb27e68eb5dd42))
- **dashboards:** added drill down title ([92f6ee3](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/92f6ee322236051576a17d204a3478b718ce238d))
- **dashboards:** added group by ([bc3782f](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/bc3782fe6959d032bf9ecbcf90521141712ecd51))
- **dashboards:** added new methods at hook for drilldown ([c951620](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/c951620a91997be45489e4b5b8d85557965776a3))
- **dashboards:** added on each panel the info icon, the disclaimer and the group by disclaimer. Erased ACTIVITY_STATUS and ACTIVITY_STATUS_EVOLUTION panels ([8a88e51](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/8a88e519a7548b789b43a2f7c29136219a8db2cc))
- **dashboards:** added reset button for filters and the filters component now is sticky when scrolling down ([42379d2](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/42379d2f585a86d179d6e9fcc3512b80a3a8b34a))
- **dashboards:** changed date intervals logic and now we only display the default date ranges until TODAY ([e4f9509](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e4f9509e064b96c0042efd2f33bbf2b464e003c3))
- **dashboards:** changed group by component and created list of possible fields ([ba9f849](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/ba9f84971863485865fd07e6f7be0ebcaf858d0d))
- **dashboards:** changed name and icon for the reset button ([2aa0472](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/2aa0472cc46e5261707dc9de8a622459ec44999a))
- **dashboards:** changed the header style and filters ([557aca2](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/557aca268dc46a232d641d3a5890addfa09c4c43))
- **dashboards:** created new hook for drill down modal ([67262ed](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/67262edf878ecdabd6cc7a6c4bce71d54bde82ed))
- **dashboards:** drill down when clicking ([ae6dff6](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/ae6dff6ce20afdeb86c79b7738f55367c7046601))
- **dashboards:** fix lint ([de0582b](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/de0582bc42869dfcf77f45d08851e532bb5fa81d))
- **dashboards:** grouped charts display descending order by value amount ([ec1608a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/ec1608a3e1b06addc2c27e787673cf07d41a7ffc))
- **dashboards:** implemented custom colors for bar charts and line charts and updated component library ([468d44f](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/468d44f41e2c389fe9d22cc34cd68930a1355e40))
- **dashboards:** interval-aware range formating ([0f4d545](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/0f4d54520862b86b05edc43d8a6ff72db8b713f5))
- **dashboards:** merge development into feature branch ([be9e458](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/be9e458124e408aecd7b5469429bebfb91e20e30))
- **dashboards:** modal appears and fetches data when clicking a bar chart ([9c9267d](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/9c9267d7d37acf9a94acdfbea6d8986d09bf1cb5))
- advance drilldown component WIP ([5531f89](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/5531f8980e7078064f9a0db9a98cd4a42b762187))
- advance drilldown component WIP ([5f82f12](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/5f82f12fc6f0dc963fc3bcce8517ab326c0f4333))
- drilldown component basis ([7f12c81](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/7f12c81592883f23383ad805b4b2fa02fcceca6f))
- **dashboards:** if the retrieved data has grouped by labels, the charts become stack bar charts with the convenient labels and stacks ([0868026](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/08680267e0511574615d136d7492151dc618dec4))
- **dashboards:** many features and fixes ([702f30d](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/702f30dc15d1350691e7ed5b9cd5d19aa9554070))
- **dashboards:** new component library version! ([8ecc477](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/8ecc477333a8c7109117a8827d53c3e670f2ae90))
- **dashboards:** new group by component added ([06584f5](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/06584f5fe12ce86c79f5ab596c5454a35b07ff25))
- **dashboards:** unify filters and allow dropdown filters to be multiselectable ([95774a8](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/95774a8d5ae2875734294647d991527c0c4c7724))
- **dashboards:** updated component library ([faf85ff](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/faf85ff82744383bd84d512ab52326f4c4547833))
- **dashboards:** updated component library ([1233257](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/12332574f97d4982deb0109c6dbc56c05b73252a))
- **dashboards:** when All time selected, cohorts start from the first non empty data point ([35bd107](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/35bd107f218f9d8d7e088e855788f87a512a5b12))
- **dashboards:** when All time selected, cohorts start from the first non empty data point ([142f4eb](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/142f4eb5c440ee29a3eccf7cddffce5dda320b17))
- **dashboards:** with All time, daily and weekly are disabled ([b415841](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/b4158414e582fe94ca8a1b015439fdfa9059581e))
- **dashboards:** with All time, line charts start from the first non empty data point ([ef4004c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/ef4004c3167ea6473d32043659d8488791f88cf3))

### Bug Fixes

- yarn lock ([c9613c0](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/c9613c0cb90b09c316012e27ca16e4449c1ff91e))
- **searchBar and QQs:** use activeLead from useActiveLeads to send the email to the send from Mail and not the currentIndex ([8dee0d5](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/8dee0d549c3ddf160e41c02d17164df2b1df0c6c)), closes [P21-1268](https://bloobirds.atlassian.net/browse/P21-1268) [P21-1238](https://bloobirds.atlassian.net/browse/P21-1238)
- scroll to field in bobject form ([4b6099e](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/4b6099e0b3752bb97e9cf6307edf2c4eedc459e2)), closes [P21-1266](https://bloobirds.atlassian.net/browse/P21-1266)
- update has cadence logic ([70237f0](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/70237f0f0143ba79f501283cb0f3694469829775))
- **dashboards:** add missing tooltip info for multipanel ([11d7951](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/11d7951640a451398d9ad928d41537f2c5e1f67f))
- **dashboards:** added "hasGrouped" to enable transition from canBeGrouped to hasGrouped with the new backend response ([d237438](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/d2374389eecca6234b213537c9494a78b7d2a412))
- **dashboards:** added ServiceApi import ([4d3b594](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/4d3b594f6b6e3747ccc3b2874603f65ac58d1572))
- **dashboards:** ApiHost was pushed ([c3b4a0a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/c3b4a0a0f527660adb863b7081aba4a3ce62c66f))
- **dashboards:** avoid undefined ([377020a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/377020a5ff63ac296bdba9572f94ff804766df02))
- **dashboards:** changed props format at BarChart ([a733c90](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/a733c908ee362e418e6dcac2472c817ff06d3d04))
- **dashboards:** cohorts should also behave like evolution charts ([60a7ee1](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/60a7ee10e8a2262a1a6553ba7497f79095bef5e0))
- **dashboards:** dates in cohort table ([00b1654](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/00b16549de7fc110bec40f9fe459f81bd07987d1))
- **dashboards:** erased fetch from hook ([15cf4dd](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/15cf4ddde8cdeaca8dcbf940acacc74a2f0b6b34))
- **dashboards:** erased modal from routes page ([c735923](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/c735923777e9ae896d657c1bc34e155b4c3be80a))
- **dashboards:** finally fix for real groupBy url param ([5e39955](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/5e39955fc32bbf303f0cf9a3d5cd2018245c7d31))
- **dashboards:** fix date picker param issues ([daa299e](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/daa299e0c6348b7f627946d2b25238657574ae23))
- **dashboards:** fix lint ([d489f0b](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/d489f0bc049dd3c9a1073ce7dae4712ceda0f626))
- **dashboards:** fix lint ([6cb9ffe](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/6cb9ffe7b74895f0965ef6a6fce497132df4fb3b))
- **dashboards:** fix react keys and useMemo issues in tablecharts/datascope ([08a361a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/08a361ab52ca9dec82ac0cb6ef9ed171fa60730a))
- **dashboards:** fix vertical alignment, get canBeGrouped from API response, and empty state for multipanels ([e9e9f13](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e9e9f13d198ccbdfeb3c719c41472250787d7d9f))
- **dashboards:** fixed empty bars when grouping by ([3b8ea8c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/3b8ea8c21b0cbfe68940b9ef7f6443282f1d92df))
- **dashboards:** floating arrows in datascope ([be37ed5](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/be37ed57a71b19cc5dca47f13d42afcb2a8cfb5d))
- **dashboards:** for all_time the CR cohorts was not being displayed ([e3bc2f8](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e3bc2f8c8e5a508e7c2aaf8a62b5a99c10d4dcdc))
- **dashboards:** for all_time was not painting the colors correctly ([21ec110](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/21ec1104b22fd43766fdd408485f56b84b0853ab))
- **dashboards:** get rid of download button ([de1433d](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/de1433de8b8addc562891757e227f0cb74b0d9c0))
- **dashboards:** group by options were not being displayed ([933e57a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/933e57ae3525e953a9a7cc6239fd5ad800df0551))
- **dashboards:** issues with multiselect and filters url persistence ([7d68a47](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/7d68a474ce997fa0af02659ee5426e898fd99e19))
- **dashboards:** lint fix ([64ea0c0](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/64ea0c0279a49c0ee69894102f90ad9056ee522f))
- **dashboards:** lint fix ([4c3087d](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/4c3087dce45acefe8eca7bc3c3894d707b0a0336))
- **dashboards:** lint fix ([2a19584](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/2a19584628c3717d360e29373c2bad62f1c36023))
- **dashboards:** lint fix ([cd305db](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/cd305dbad2059797c16fed4f659bcbc89306c7c5))
- **dashboards:** lint fix ([d383171](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/d38317177650b4bb5839b3cc99852ab93c1fafb0))
- **dashboards:** now the All time starts from 2018, so BB does not crash ([8816b88](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/8816b8803cd5fa93cd257ea40694d512cbdad85c))
- **dashboards:** really fix groupBy removal from url ([bd46f33](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/bd46f333f046ced44784b583e2ca293c445cddd2))
- **dashboards:** remove unused var from recoil state in useDashboards ([742904e](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/742904e9fb781321bc39169c88415491ef9a6718))
- **dashboards:** sometimes stacked bar charts did not display the tooltip ([ded333c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/ded333c4c9a828f302bafdd701ec9ccf3af8dd04))
- **dashboards:** this year was doing padding to "month" instead of "year". ([b74ddbc](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/b74ddbcbb3e2b6b26f05003b261d8655cdbe05d6))
- **dashboards:** tweak filters background ([73227fd](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/73227fdbae5975a71f55d4c1cbb5a68b5b133eaf))
- **dashboards:** typo fix ([4870dea](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/4870dea43fdc741f0ae8d6ec1f0b0e9c6815f1bd))
- **saveEditModal:** Create toast message after creating or editing a list. One warning also cleared ([dc106f0](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/dc106f0486a71d6a551e5d66588732e57f003f45)), closes [P21-1246](https://bloobirds.atlassian.net/browse/P21-1246)
- **sendFromMail:** use activeLead from useActiveLeads to send the email to the send from Mail and not the currentIndex ([9afa12d](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/9afa12d8894e8668c534d9753e4db1a0f8301332)), closes [P21-1254](https://bloobirds.atlassian.net/browse/P21-1254)
- Assign lead to recently created company from modal of assigning leads ([c870a5c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/c870a5c4ba6aee6d3a64b25bd415ec2c28a6ad3e))
- empty cadence in bobject details should display the same message than in contact view ([a22eb0e](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/a22eb0e8fce275b34c04e24bfed4f61e8fd60113)), closes [P21-1144](https://bloobirds.atlassian.net/browse/P21-1144)
- **dashboards:** review changes, changed var name at css and erased extra dependencies at fetching ([ead74e0](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/ead74e05fc63358cb7df9ea58244832beace75f0))
- **dashboards:** set loading state early when changing filters to prevent UI flashes ([cc8d0a5](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/cc8d0a5fae185545e02203c6b0a979e8d06dd62c))
- **dashboards:** sort table chart data in descending order ([e7bbec4](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e7bbec4f8f59519c19c6211b8d5e5aec4a9c89c6))
- put environment variables as they should be ([b849556](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/b849556540934181ad3d6cb31dc78ca4a957df56))
- **dashboards:** updated component library to fix More filters and let scroll in multi select ([1b04b13](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/1b04b13b8ff6d692eba612985aface15cbda3795))
- **dashbords:** force sad face if user does not have access to dashboards ([5806463](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/58064633624992bc275019b51c703bc7f0962280))
- **test:** added showtooltip ([d218c0b](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/d218c0bb3182fa33dbb446021292340f5d6655ff))

## [2.2.0-preprod.6](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.2.0-preprod.5...v2.2.0-preprod.6) (2021-03-31)

### Bug Fixes

- yarn lock ([c9613c0](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/c9613c0cb90b09c316012e27ca16e4449c1ff91e))
- yarn lock ([bda9ee2](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/bda9ee28c2537a3503240f8fc0f5ac236ba3b060))

## [2.2.0-preprod.5](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.2.0-preprod.4...v2.2.0-preprod.5) (2021-03-31)

### Bug Fixes

- **searchBar and QQs:** use activeLead from useActiveLeads to send the email to the send from Mail and not the currentIndex ([8dee0d5](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/8dee0d549c3ddf160e41c02d17164df2b1df0c6c)), closes [P21-1268](https://bloobirds.atlassian.net/browse/P21-1268) [P21-1238](https://bloobirds.atlassian.net/browse/P21-1238)

## [2.2.0-preprod.4](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.2.0-preprod.3...v2.2.0-preprod.4) (2021-03-31)

### Bug Fixes

- scroll to field in bobject form ([4b6099e](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/4b6099e0b3752bb97e9cf6307edf2c4eedc459e2)), closes [P21-1266](https://bloobirds.atlassian.net/browse/P21-1266)

## [2.2.0-preprod.3](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.2.0-preprod.2...v2.2.0-preprod.3) (2021-03-31)

### Bug Fixes

- empty cadence in bobject details should display the same message than in contact view ([a22eb0e](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/a22eb0e8fce275b34c04e24bfed4f61e8fd60113)), closes [P21-1144](https://bloobirds.atlassian.net/browse/P21-1144)
- update has cadence logic ([70237f0](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/70237f0f0143ba79f501283cb0f3694469829775))

## [2.2.0-preprod.2](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.2.0-preprod.1...v2.2.0-preprod.2) (2021-03-31)

### Bug Fixes

- **sendFromMail:** use activeLead from useActiveLeads to send the email to the send from Mail and not the currentIndex ([9afa12d](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/9afa12d8894e8668c534d9753e4db1a0f8301332)), closes [P21-1254](https://bloobirds.atlassian.net/browse/P21-1254)
- Assign lead to recently created company from modal of assigning leads ([c870a5c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/c870a5c4ba6aee6d3a64b25bd415ec2c28a6ad3e))

## [2.2.0-preprod.1](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.1.1-preprod.1...v2.2.0-preprod.1) (2021-03-31)

### Features

- **dashboards:** add multi panels to show multiple cohorts ([4a419b9](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/4a419b9b66b9372140070176945a6231c5a63548))
- **dashboards:** added colored labels for picklist at drill down modal ([a9a501d](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/a9a501db53af0a7773f0fbd0dffb27e68eb5dd42))
- **dashboards:** added drill down title ([92f6ee3](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/92f6ee322236051576a17d204a3478b718ce238d))
- **dashboards:** added group by ([bc3782f](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/bc3782fe6959d032bf9ecbcf90521141712ecd51))
- **dashboards:** added new methods at hook for drilldown ([c951620](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/c951620a91997be45489e4b5b8d85557965776a3))
- **dashboards:** added on each panel the info icon, the disclaimer and the group by disclaimer. Erased ACTIVITY_STATUS and ACTIVITY_STATUS_EVOLUTION panels ([8a88e51](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/8a88e519a7548b789b43a2f7c29136219a8db2cc))
- **dashboards:** added reset button for filters and the filters component now is sticky when scrolling down ([42379d2](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/42379d2f585a86d179d6e9fcc3512b80a3a8b34a))
- **dashboards:** changed date intervals logic and now we only display the default date ranges until TODAY ([e4f9509](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e4f9509e064b96c0042efd2f33bbf2b464e003c3))
- **dashboards:** changed group by component and created list of possible fields ([ba9f849](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/ba9f84971863485865fd07e6f7be0ebcaf858d0d))
- **dashboards:** changed name and icon for the reset button ([2aa0472](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/2aa0472cc46e5261707dc9de8a622459ec44999a))
- **dashboards:** changed the header style and filters ([557aca2](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/557aca268dc46a232d641d3a5890addfa09c4c43))
- **dashboards:** created new hook for drill down modal ([67262ed](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/67262edf878ecdabd6cc7a6c4bce71d54bde82ed))
- **dashboards:** drill down when clicking ([ae6dff6](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/ae6dff6ce20afdeb86c79b7738f55367c7046601))
- **dashboards:** fix lint ([de0582b](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/de0582bc42869dfcf77f45d08851e532bb5fa81d))
- **dashboards:** grouped charts display descending order by value amount ([ec1608a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/ec1608a3e1b06addc2c27e787673cf07d41a7ffc))
- **dashboards:** implemented custom colors for bar charts and line charts and updated component library ([468d44f](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/468d44f41e2c389fe9d22cc34cd68930a1355e40))
- **dashboards:** interval-aware range formating ([0f4d545](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/0f4d54520862b86b05edc43d8a6ff72db8b713f5))
- **dashboards:** merge development into feature branch ([be9e458](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/be9e458124e408aecd7b5469429bebfb91e20e30))
- **dashboards:** modal appears and fetches data when clicking a bar chart ([9c9267d](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/9c9267d7d37acf9a94acdfbea6d8986d09bf1cb5))
- advance drilldown component WIP ([5531f89](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/5531f8980e7078064f9a0db9a98cd4a42b762187))
- advance drilldown component WIP ([5f82f12](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/5f82f12fc6f0dc963fc3bcce8517ab326c0f4333))
- drilldown component basis ([7f12c81](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/7f12c81592883f23383ad805b4b2fa02fcceca6f))
- **dashboards:** if the retrieved data has grouped by labels, the charts become stack bar charts with the convenient labels and stacks ([0868026](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/08680267e0511574615d136d7492151dc618dec4))
- **dashboards:** many features and fixes ([702f30d](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/702f30dc15d1350691e7ed5b9cd5d19aa9554070))
- **dashboards:** new component library version! ([8ecc477](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/8ecc477333a8c7109117a8827d53c3e670f2ae90))
- **dashboards:** new group by component added ([06584f5](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/06584f5fe12ce86c79f5ab596c5454a35b07ff25))
- **dashboards:** unify filters and allow dropdown filters to be multiselectable ([95774a8](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/95774a8d5ae2875734294647d991527c0c4c7724))
- **dashboards:** updated component library ([faf85ff](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/faf85ff82744383bd84d512ab52326f4c4547833))
- **dashboards:** updated component library ([1233257](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/12332574f97d4982deb0109c6dbc56c05b73252a))
- **dashboards:** when All time selected, cohorts start from the first non empty data point ([35bd107](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/35bd107f218f9d8d7e088e855788f87a512a5b12))
- **dashboards:** when All time selected, cohorts start from the first non empty data point ([142f4eb](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/142f4eb5c440ee29a3eccf7cddffce5dda320b17))
- **dashboards:** with All time, daily and weekly are disabled ([b415841](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/b4158414e582fe94ca8a1b015439fdfa9059581e))
- **dashboards:** with All time, line charts start from the first non empty data point ([ef4004c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/ef4004c3167ea6473d32043659d8488791f88cf3))

### Bug Fixes

- **dashboards:** add missing tooltip info for multipanel ([11d7951](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/11d7951640a451398d9ad928d41537f2c5e1f67f))
- **dashboards:** added "hasGrouped" to enable transition from canBeGrouped to hasGrouped with the new backend response ([d237438](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/d2374389eecca6234b213537c9494a78b7d2a412))
- **dashboards:** added ServiceApi import ([4d3b594](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/4d3b594f6b6e3747ccc3b2874603f65ac58d1572))
- **dashboards:** ApiHost was pushed ([c3b4a0a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/c3b4a0a0f527660adb863b7081aba4a3ce62c66f))
- **dashboards:** avoid undefined ([377020a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/377020a5ff63ac296bdba9572f94ff804766df02))
- **dashboards:** changed props format at BarChart ([a733c90](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/a733c908ee362e418e6dcac2472c817ff06d3d04))
- **dashboards:** cohorts should also behave like evolution charts ([60a7ee1](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/60a7ee10e8a2262a1a6553ba7497f79095bef5e0))
- **dashboards:** dates in cohort table ([00b1654](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/00b16549de7fc110bec40f9fe459f81bd07987d1))
- **dashboards:** erased fetch from hook ([15cf4dd](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/15cf4ddde8cdeaca8dcbf940acacc74a2f0b6b34))
- **dashboards:** erased modal from routes page ([c735923](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/c735923777e9ae896d657c1bc34e155b4c3be80a))
- **dashboards:** finally fix for real groupBy url param ([5e39955](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/5e39955fc32bbf303f0cf9a3d5cd2018245c7d31))
- **dashboards:** fix date picker param issues ([daa299e](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/daa299e0c6348b7f627946d2b25238657574ae23))
- **dashboards:** fix lint ([d489f0b](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/d489f0bc049dd3c9a1073ce7dae4712ceda0f626))
- **dashboards:** fix lint ([6cb9ffe](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/6cb9ffe7b74895f0965ef6a6fce497132df4fb3b))
- **dashboards:** fix react keys and useMemo issues in tablecharts/datascope ([08a361a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/08a361ab52ca9dec82ac0cb6ef9ed171fa60730a))
- **dashboards:** fix vertical alignment, get canBeGrouped from API response, and empty state for multipanels ([e9e9f13](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e9e9f13d198ccbdfeb3c719c41472250787d7d9f))
- **dashboards:** fixed empty bars when grouping by ([3b8ea8c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/3b8ea8c21b0cbfe68940b9ef7f6443282f1d92df))
- **dashboards:** floating arrows in datascope ([be37ed5](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/be37ed57a71b19cc5dca47f13d42afcb2a8cfb5d))
- **dashboards:** for all_time the CR cohorts was not being displayed ([e3bc2f8](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e3bc2f8c8e5a508e7c2aaf8a62b5a99c10d4dcdc))
- **dashboards:** for all_time was not painting the colors correctly ([21ec110](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/21ec1104b22fd43766fdd408485f56b84b0853ab))
- **dashboards:** get rid of download button ([de1433d](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/de1433de8b8addc562891757e227f0cb74b0d9c0))
- **dashboards:** group by options were not being displayed ([933e57a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/933e57ae3525e953a9a7cc6239fd5ad800df0551))
- **dashboards:** issues with multiselect and filters url persistence ([7d68a47](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/7d68a474ce997fa0af02659ee5426e898fd99e19))
- **dashboards:** lint fix ([64ea0c0](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/64ea0c0279a49c0ee69894102f90ad9056ee522f))
- **dashboards:** lint fix ([4c3087d](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/4c3087dce45acefe8eca7bc3c3894d707b0a0336))
- **dashboards:** lint fix ([2a19584](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/2a19584628c3717d360e29373c2bad62f1c36023))
- **dashboards:** lint fix ([cd305db](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/cd305dbad2059797c16fed4f659bcbc89306c7c5))
- **dashboards:** lint fix ([d383171](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/d38317177650b4bb5839b3cc99852ab93c1fafb0))
- **dashboards:** now the All time starts from 2018, so BB does not crash ([8816b88](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/8816b8803cd5fa93cd257ea40694d512cbdad85c))
- **dashboards:** really fix groupBy removal from url ([bd46f33](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/bd46f333f046ced44784b583e2ca293c445cddd2))
- **dashboards:** remove unused var from recoil state in useDashboards ([742904e](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/742904e9fb781321bc39169c88415491ef9a6718))
- **dashboards:** review changes, changed var name at css and erased extra dependencies at fetching ([ead74e0](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/ead74e05fc63358cb7df9ea58244832beace75f0))
- **dashboards:** set loading state early when changing filters to prevent UI flashes ([cc8d0a5](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/cc8d0a5fae185545e02203c6b0a979e8d06dd62c))
- **dashboards:** sometimes stacked bar charts did not display the tooltip ([ded333c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/ded333c4c9a828f302bafdd701ec9ccf3af8dd04))
- **dashboards:** sort table chart data in descending order ([e7bbec4](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e7bbec4f8f59519c19c6211b8d5e5aec4a9c89c6))
- **dashboards:** this year was doing padding to "month" instead of "year". ([b74ddbc](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/b74ddbcbb3e2b6b26f05003b261d8655cdbe05d6))
- **dashboards:** tweak filters background ([73227fd](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/73227fdbae5975a71f55d4c1cbb5a68b5b133eaf))
- **dashboards:** typo fix ([4870dea](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/4870dea43fdc741f0ae8d6ec1f0b0e9c6815f1bd))
- **dashboards:** updated component library to fix More filters and let scroll in multi select ([1b04b13](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/1b04b13b8ff6d692eba612985aface15cbda3795))
- **saveEditModal:** Create toast message after creating or editing a list. One warning also cleared ([dc106f0](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/dc106f0486a71d6a551e5d66588732e57f003f45)), closes [P21-1246](https://bloobirds.atlassian.net/browse/P21-1246)
- put environment variables as they should be ([b849556](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/b849556540934181ad3d6cb31dc78ca4a957df56))
- **dashbords:** force sad face if user does not have access to dashboards ([5806463](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/58064633624992bc275019b51c703bc7f0962280))
- **test:** added showtooltip ([d218c0b](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/d218c0bb3182fa33dbb446021292340f5d6655ff))

### [2.1.1-preprod.1](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.1.0...v2.1.1-preprod.1) (2021-03-30)

### Bug Fixes

- dropdown issues ([259bcf6](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/259bcf65c620cb6ce0e2f624da823ca00f706de8))
- handle bobject form permissions outside contact view ([3ac00e9](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/3ac00e905f7cf10642092ec319f982c1b805500e)), closes [P21-1229](https://bloobirds.atlassian.net/browse/P21-1229)
- if lead has not icp it should show an interrogation symbol ([3887217](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/388721735f13fa3d831dbc85ed36308c1903fc87)), closes [P21-1225](https://bloobirds.atlassian.net/browse/P21-1225)
- number field uses a too new method for some chrome versions ([8855cd1](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/8855cd1d55b9ff475fbde6b0681e5eba4cc60ac0)), closes [P21-1232](https://bloobirds.atlassian.net/browse/P21-1232)

### [2.1.2](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.1.1...v2.1.2) (2021-03-31)

### Bug Fixes

- yarn lock ([bda9ee2](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/bda9ee28c2537a3503240f8fc0f5ac236ba3b060))

### [2.1.1](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.1.0...v2.1.1) (2021-03-30)

### Bug Fixes

- dropdown issues ([259bcf6](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/259bcf65c620cb6ce0e2f624da823ca00f706de8))
- handle bobject form permissions outside contact view ([3ac00e9](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/3ac00e905f7cf10642092ec319f982c1b805500e)), closes [P21-1229](https://bloobirds.atlassian.net/browse/P21-1229)
- if lead has not icp it should show an interrogation symbol ([3887217](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/388721735f13fa3d831dbc85ed36308c1903fc87)), closes [P21-1225](https://bloobirds.atlassian.net/browse/P21-1225)
- number field uses a too new method for some chrome versions ([8855cd1](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/8855cd1d55b9ff475fbde6b0681e5eba4cc60ac0)), closes [P21-1232](https://bloobirds.atlassian.net/browse/P21-1232)

## [2.1.0](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.0.5...v2.1.0) (2021-03-30)

### Features

- **cadence:** Fix start cadence before pause it ([df10d95](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/df10d953e83bd6c97b1769fce2ceb1569311fee4)), closes [P21-1216](https://bloobirds.atlassian.net/browse/P21-1216) [P21-1217](https://bloobirds.atlassian.net/browse/P21-1217) [P21-1219](https://bloobirds.atlassian.net/browse/P21-1219)

### Bug Fixes

- if lead has not icp it should show an interrogation symbol ([3887217](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/388721735f13fa3d831dbc85ed36308c1903fc87)), closes [P21-1225](https://bloobirds.atlassian.net/browse/P21-1225)
- number field uses a too new method for some chrome versions ([8855cd1](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/8855cd1d55b9ff475fbde6b0681e5eba4cc60ac0)), closes [P21-1232](https://bloobirds.atlassian.net/browse/P21-1232)
- display an empty cell if no reference lead exists ([69dea81](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/69dea810a85f89eae06803911396b29e1096bc88)), closes [P21-1203](https://bloobirds.atlassian.net/browse/P21-1203)
- if selected lead exists, do not replace it with query params ([731683f](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/731683fe27e9753eee4932a7df4b384f17c5fa61)), closes [P21-1211](https://bloobirds.atlassian.net/browse/P21-1211)
- navigation from add leads does not load the company card ([a3c8632](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/a3c8632f18defa63675b6b0036989f9cba7e23c2)), closes [P21-1221](https://bloobirds.atlassian.net/browse/P21-1221)
- notification click should not reset the date filter if new date does not change a day ([98e8c13](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/98e8c139123ec555d028252c4efe0902c4bbdc55)), closes [P21-1222](https://bloobirds.atlassian.net/browse/P21-1222)
- **integrations:** fixed pagination on hubspot users ([c48dcc3](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/c48dcc320104e0bedf5b0dea9b3f74cea624f4e1))
- **integrations:** on change page, user values from select also changes ([5a901cf](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/5a901cf6800609df35d5284552ffbe435e0e4ff7))

## [2.1.0-preprod.4](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.1.0-preprod.3...v2.1.0-preprod.4) (2021-03-30)

### Bug Fixes

- handle bobject form permissions outside contact view ([3ac00e9](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/3ac00e905f7cf10642092ec319f982c1b805500e)), closes [P21-1229](https://bloobirds.atlassian.net/browse/P21-1229)

## [2.1.0-preprod.3](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.1.0-preprod.2...v2.1.0-preprod.3) (2021-03-30)

### Bug Fixes

- dropdown issues ([259bcf6](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/259bcf65c620cb6ce0e2f624da823ca00f706de8))

## [2.1.0-preprod.2](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.1.0-preprod.1...v2.1.0-preprod.2) (2021-03-30)

## [2.1.0-preprod.1](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.0.6-preprod.4...v2.1.0-preprod.1) (2021-03-30)

### Features

- **cadence:** Fix start cadence before pause it ([df10d95](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/df10d953e83bd6c97b1769fce2ceb1569311fee4)), closes [P21-1216](https://bloobirds.atlassian.net/browse/P21-1216) [P21-1217](https://bloobirds.atlassian.net/browse/P21-1217) [P21-1219](https://bloobirds.atlassian.net/browse/P21-1219)

### [2.0.6-preprod.4](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.0.6-preprod.3...v2.0.6-preprod.4) (2021-03-30)

### Bug Fixes

- if selected lead exists, do not replace it with query params ([731683f](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/731683fe27e9753eee4932a7df4b384f17c5fa61)), closes [P21-1211](https://bloobirds.atlassian.net/browse/P21-1211)

### [2.0.6-preprod.3](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.0.6-preprod.2...v2.0.6-preprod.3) (2021-03-30)

### Bug Fixes

- **integrations:** fixed pagination on hubspot users ([c48dcc3](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/c48dcc320104e0bedf5b0dea9b3f74cea624f4e1))
- **integrations:** on change page, user values from select also changes ([5a901cf](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/5a901cf6800609df35d5284552ffbe435e0e4ff7))

### [2.0.6-preprod.2](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.0.6-preprod.1...v2.0.6-preprod.2) (2021-03-30)

### Bug Fixes

- display an empty cell if no reference lead exists ([69dea81](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/69dea810a85f89eae06803911396b29e1096bc88)), closes [P21-1203](https://bloobirds.atlassian.net/browse/P21-1203)

### [2.0.6-preprod.1](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.0.5...v2.0.6-preprod.1) (2021-03-30)

### Bug Fixes

- navigation from add leads does not load the company card ([a3c8632](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/a3c8632f18defa63675b6b0036989f9cba7e23c2)), closes [P21-1221](https://bloobirds.atlassian.net/browse/P21-1221)
- notification click should not reset the date filter if new date does not change a day ([98e8c13](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/98e8c139123ec555d028252c4efe0902c4bbdc55)), closes [P21-1222](https://bloobirds.atlassian.net/browse/P21-1222)

### [2.0.5-preprod.1](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.0.4...v2.0.5-preprod.1) (2021-03-30)

### Bug Fixes

- date ([ece5245](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/ece524598656b0d31ae5c4978ac13e694cfb94f7))

### [2.0.4](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.0.3...v2.0.4) (2021-03-29)

### Bug Fixes

- unlink the link with the cadence activity ([8f8fbb0](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/8f8fbb01cf95d6cf36cf1feab4c6c3e58a6b65fa))
- **cadence:** Fix start cadence if we don't have any active cadence ([15df456](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/15df456278fb49036754c9fb55bfe184249f2c81)), closes [P21-1216](https://bloobirds.atlassian.net/browse/P21-1216)
- **contact:** Fix contact view if in url we have a subTab selected ([5d5ace6](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/5d5ace6862619b18d918ff2392b884bf0fb5fd93)), closes [P21-1204](https://bloobirds.atlassian.net/browse/P21-1204)
- Add a new criteria on account stopped nylas to show the notification ([2b9b9c0](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/2b9b9c00d974ec9d74f5aa42ba78f440c210e528))
- added an ellipsis if the linkedin job title is too long ([49bec5c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/49bec5cdb0cc657335e7e8f3e0ef43ea3961a8c9)), closes [P21-2000](https://bloobirds.atlassian.net/browse/P21-2000)
- added the hour to the scheduled and meeting tasks ([5fbd59b](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/5fbd59b1762b236e2fbde52ac85813a0f5a11a04)), closes [P21-1996](https://bloobirds.atlassian.net/browse/P21-1996)
- cadence lead filter should filter out activities ([43c74ca](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/43c74ca2250256a02801b89b9bcc2743cb9fae90)), closes [P21-1215](https://bloobirds.atlassian.net/browse/P21-1215)
- make it instantaneous ([ede334f](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/ede334f69d38b900436fb244b78be6b5c056b024))
- navigate to company from list preserves the scroll ([661ad48](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/661ad48ad8330444f4278aa5359518f943687878)), closes [P21-1207](https://bloobirds.atlassian.net/browse/P21-1207)
- removed console logs and added the scheduled datetime ordering ([588b146](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/588b14698890b6dab533697cf22b22ee2b4320f5))
- removed console logs and added the scheduled datetime ordering ([8bcb073](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/8bcb0736252fcb15d819a571af5d747851cb7b9b))
- removed console logs and added the scheduled datetime ordering ([8f757f2](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/8f757f266b348676568ed3ece2b65f685d2af5b6))
- second start cadence modal open empties the date picker ([b407f98](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/b407f98ec01b4bd525a04bdb10d1a6f433603c67)), closes [P21-1194](https://bloobirds.atlassian.net/browse/P21-1194)
- unlink the link with the cadence activity ([7716c61](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/7716c618fb168de7106717ee205641ebaf3eadde))
- use existing values for new bobject name in duplication modal ([bafc636](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/bafc6366e1d26b35b32212596fbf7de165ab30d0)), closes [P21-1213](https://bloobirds.atlassian.net/browse/P21-1213)
- using datetime instead of date ([6647993](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/66479933eb69ca0c6fd39d43b0c3507f3d3eb8cf))
- **cadence:** Fix keep cadence date if we close and open cadence modal. And fix select any cadence. ([e304668](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e30466870981dae3bf9ff455efb15d51c30ace8f)), closes [P21-1195](https://bloobirds.atlassian.net/browse/P21-1195)

### [2.0.3](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.0.2...v2.0.3) (2021-03-29)

### Bug Fixes

- dropdown menu not showing and replace old styles ([e5dc938](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e5dc93884464b3183d9ee9dc264a9a7a506bc85a)), closes [P21-1201](https://bloobirds.atlassian.net/browse/P21-1201)
- permissions on bobject form ([c1053f2](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/c1053f27aca6e6ed5bed67a81a0fc773dea68262)), closes [P21-1199](https://bloobirds.atlassian.net/browse/P21-1199)

### [2.0.3-preprod.7](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.0.3-preprod.6...v2.0.3-preprod.7) (2021-03-29)

### Bug Fixes

- **cadence:** Fix start cadence if we don't have any active cadence ([15df456](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/15df456278fb49036754c9fb55bfe184249f2c81)), closes [P21-1216](https://bloobirds.atlassian.net/browse/P21-1216)
- Add a new criteria on account stopped nylas to show the notification ([2b9b9c0](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/2b9b9c00d974ec9d74f5aa42ba78f440c210e528))

### [2.0.3-preprod.6](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.0.3-preprod.5...v2.0.3-preprod.6) (2021-03-29)

### Bug Fixes

- **contact:** Fix contact view if in url we have a subTab selected ([5d5ace6](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/5d5ace6862619b18d918ff2392b884bf0fb5fd93)), closes [P21-1204](https://bloobirds.atlassian.net/browse/P21-1204)

### [2.0.3-preprod.5](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.0.3-preprod.4...v2.0.3-preprod.5) (2021-03-29)

### Bug Fixes

- cadence lead filter should filter out activities ([43c74ca](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/43c74ca2250256a02801b89b9bcc2743cb9fae90)), closes [P21-1215](https://bloobirds.atlassian.net/browse/P21-1215)
- unlink the link with the cadence activity ([7716c61](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/7716c618fb168de7106717ee205641ebaf3eadde))
- use existing values for new bobject name in duplication modal ([bafc636](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/bafc6366e1d26b35b32212596fbf7de165ab30d0)), closes [P21-1213](https://bloobirds.atlassian.net/browse/P21-1213)

### [2.0.3-preprod.4](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.0.3-preprod.3...v2.0.3-preprod.4) (2021-03-29)

### Bug Fixes

- make it instantaneous ([ede334f](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/ede334f69d38b900436fb244b78be6b5c056b024))
- navigate to company from list preserves the scroll ([661ad48](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/661ad48ad8330444f4278aa5359518f943687878)), closes [P21-1207](https://bloobirds.atlassian.net/browse/P21-1207)

### [2.0.3-preprod.3](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.0.3-preprod.2...v2.0.3-preprod.3) (2021-03-29)

### Bug Fixes

- second start cadence modal open empties the date picker ([b407f98](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/b407f98ec01b4bd525a04bdb10d1a6f433603c67)), closes [P21-1194](https://bloobirds.atlassian.net/browse/P21-1194)

### [2.0.3-preprod.2](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.0.3-preprod.1...v2.0.3-preprod.2) (2021-03-29)

### Bug Fixes

- using datetime instead of date ([6647993](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/66479933eb69ca0c6fd39d43b0c3507f3d3eb8cf))
- **cadence:** Fix keep cadence date if we close and open cadence modal. And fix select any cadence. ([e304668](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e30466870981dae3bf9ff455efb15d51c30ace8f)), closes [P21-1195](https://bloobirds.atlassian.net/browse/P21-1195)
- removed console logs and added the scheduled datetime ordering ([588b146](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/588b14698890b6dab533697cf22b22ee2b4320f5))
- removed console logs and added the scheduled datetime ordering ([8bcb073](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/8bcb0736252fcb15d819a571af5d747851cb7b9b))
- removed console logs and added the scheduled datetime ordering ([8f757f2](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/8f757f266b348676568ed3ece2b65f685d2af5b6))

### [2.0.3-preprod.1](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.0.2...v2.0.3-preprod.1) (2021-03-29)

### Bug Fixes

- added an ellipsis if the linkedin job title is too long ([49bec5c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/49bec5cdb0cc657335e7e8f3e0ef43ea3961a8c9)), closes [P21-2000](https://bloobirds.atlassian.net/browse/P21-2000)
- added the hour to the scheduled and meeting tasks ([5fbd59b](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/5fbd59b1762b236e2fbde52ac85813a0f5a11a04)), closes [P21-1996](https://bloobirds.atlassian.net/browse/P21-1996)

### [2.0.2](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.0.1...v2.0.2) (2021-03-27)

### Bug Fixes

- **webapp:** minor release bugs ([e63974c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e63974c5a7c9d1e28ef7e8298eec3918c6ac327f))
- **webapp:** with the new style in the tabs extra we can see a white line ([fffa976](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/fffa976b1ead007f650d720244156b2253a74e16))

### [2.0.1](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.0.0...v2.0.1) (2021-03-27)

### Bug Fixes

- **webapp:** length of undefined ([1ba9261](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/1ba926152a5b2786f023ea5a8a9d67e3ffcc7f16))

## [2.0.0](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v1.11.0...v2.0.0) (2021-03-27)

### ⚠ BREAKING CHANGES

- New full sales version

### Features

- **data attributes:** Added data attributes on several components ([cb2ff42](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/cb2ff42547e9818ddb46641adfc8f0c6c6b41b22))
- **data attributes:** Added data attributes on several components ([37c7d6c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/37c7d6c658113ef20929ce1d688b11d990afd511))
- **Data Attributes:** add the dataTest attribute on several components & changed multioption select to BB component ([5860db8](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/5860db8455c802c95d01579b9316f15e860f6402))
- **Data Attributes:** add the dataTest attribute on several components & changed multioption select to BB component ([de8c2b1](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/de8c2b15a98a581653e1ef3f468a013928880b84))
- **Data Attributes:** data attributes for the opportunity cadence control ([0edc99d](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/0edc99d7c9011a5e6539acd6a3291576a3ae5aad))
- **filter input:** changed the MUI text input component for the BB one in the filter modal ([a7615b0](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/a7615b0e1b0b8f3ca06fb9ce0391fd06f88fa0e1))
- **filter input:** changed the MUI text input component for the BB one in the filter modal ([6222009](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/622200947d24a250c7d917313b8c0a6b66f5c084))
- **full sales:** default cadence opportunity ([efa6fa1](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/efa6fa1d833ab383d503a0fc5ef4c23675d68197))
- **Multi-Select component:** changed multioption select to BB component ([e872bc2](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e872bc213ce6792de0fb6b3ade50880b39bc6354))
- **webapp:** [P21-1121](https://bloobirds.atlassian.net/browse/P21-1121) when a company doesn't have a default cadence shows a button to configure the cadence ([249bec0](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/249bec08dc02bf45d156df19e7e8b7f1773873dc))
- **webapp:** add active user as param in showList ([dc8a4ea](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/dc8a4ea9499ca605e9aa4d5bffb3e5907ac71735))
- **webapp:** add some data attributes ([a99129f](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/a99129fe37d36fded6ccb78d02db2e065e8e4a8f))
- **webapp:** add the new styles and the button ([a88581c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/a88581c101d169b6565cb1c37dcf20e8b5d05f35))
- **webapp:** add the possibility to open the Cadence control in a concrete step ([f57d338](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/f57d33830004a1ad1eac65f9b0a8fb9c1ad5cd99))
- **webapp:** add useTaskNavigation to hooks index file ([5ba7269](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/5ba7269a55246f267ddbd95d6ed9f87e8f25081c))
- **webapp:** change the text ([998c521](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/998c52171de021a9ddf83338cc6f8f1d6ff807ab))
- **webapp:** copy the prospect filters in layout folder ([468e91a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/468e91ada45050ef70c2dd8af3af2ac4f284a7b5))
- **webapp:** copy the prospect filters inside the layout ([b8a5a57](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/b8a5a573a7595277a93b708f5abacecf5065414e))
- **webapp:** create a new hook to know if a cadence is started ([e0005b3](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e0005b3825a7153f4478b8ed47caac7da2b5226c))
- **webapp:** export the new hook ([7c17acc](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/7c17acc8b3a352761e3748f39a3ce9552f462253))
- **webapp:** fixes, rename and new onCadence query ([e8cf089](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e8cf089dce69b5396be482470fef0815ef5442dd))
- **webapp:** move the InfoComponent to the layout folder ([41e616e](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/41e616e575e382254f165a436af1384b5c1f47da))
- **webapp:** new info icon in prospect page ([f43da75](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/f43da7582aecd6b9fe6c20a36b47ea77065feb56))
- **webapp:** new Prospect/Meetings texts ([60b9cb7](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/60b9cb7349a546d55a9130024a991d5566be295e))
- **webapp:** new Prospect/On cadence texts ([675e724](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/675e7249b37fc8bfcf380ebc7cf2ac2ef1953409))
- **webapp:** new Prospect/Ready to prospect texts ([ef8b8df](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/ef8b8df0ee23911ad81b29f762a1568f505b476c))
- **webapp:** new Prospect/Scheduled texts ([2448ac1](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/2448ac146b8f8898a88a9cbda01e29d824acce53))
- **webapp:** onCadence tab component ([32c5f27](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/32c5f27aeef34f308c32886616b6c09ef447cd99))
- **webapp:** queries ([9f3110a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/9f3110aac5b2629b00c7784976878d3266d8b6e5))
- **webapp:** remove unused file ([1d91502](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/1d91502769543a27b09ba631355532b44edc134e))
- **webapp:** rename the contant variable ([3b50aba](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/3b50abaf51c23c5907276a067239ad7a5d0cd7bb))
- **webapp:** scheduled tab for Sales page ([765dba6](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/765dba60d9dd95cdd66f56cd4ad3464023415e38))
- **webapp:** the selected task has to be the first one that appears at the task bar ([4c8aaaa](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/4c8aaaabbdafd3ae0bae133f285fb7d391a7b048)), closes [P21-1163](https://bloobirds.atlassian.net/browse/P21-1163) [P21-1122](https://bloobirds.atlassian.net/browse/P21-1122)
- **webapp:** the selected task has to be the first one that appears at the task bar ([9b5b6ef](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/9b5b6ef94ba09c1d07c8f642cd47e2977722044f)), closes [P21-1163](https://bloobirds.atlassian.net/browse/P21-1163) [P21-1122](https://bloobirds.atlassian.net/browse/P21-1122)
- **webapp:** update components library ([ffb11a5](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/ffb11a586351b6d8190b0b2f2f4ccf98cc8809e7))
- **webapp:** update data test ([ae1239d](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/ae1239dfde729de22618d19f7aea0928c3910838))
- **webapp:** use the new hook in the next step ([2c3824e](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/2c3824e075bdcf02464858ef400cebaa9c011cc3))
- **webapp:** WIP ([94badbe](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/94badbe5f133f665e79d50367cffa8c80ebdb8ce))
- use sentry react router integration ([cfabaa5](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/cfabaa55c5e57f370547941d2c769bb8166805b8))
- **Data Attributes:** add the dataTest attribute on several components ([e011cbe](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e011cbee78c6a6de26df34019e4e0c9fa2b05209))
- **Data Attributes:** add the dataTest attribute on several components ([8dfc95b](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/8dfc95bafd90a8372d23e7997325ef28daabd8ea))
- **Data Attributes:** add the dataTest attribute on several components ([0bb3467](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/0bb34675c387505ee752428d87a6d6e064c974b1))
- **Data Attributes:** add the dataTest attribute on several components ([f8a13c1](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/f8a13c1d76be129adfeedf09fab159140ac6f229))
- **Data Attributes:** add the dataTest attribute on several components ([86ef59e](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/86ef59ebeac20ab4e60ae8fab13692e341e0c788))
- **Data Attributes:** add the dataTest attribute on several components ([2ba0917](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/2ba0917bf2541bc645cbcc16413e8deadc0d7f5e))
- **Data Attributes:** add the dataTest attribute on several components & button substitution ([a2f47ef](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/a2f47efab2a8adba5d2077687afc9056553cc8cd))
- **full sales:** In company view cadence table not show tasks of opportunities ([13abef8](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/13abef8ef397c13ba71c333c6c7f8dcb659d5375))
- **full sales:** In opportunity view, show OPP.STATUS ([7828128](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/7828128ef2ac1d3aaae2cdd70b6904ffa5f8cde7))
- **full sales:** removed debuggers, remove qc. status or opp status when it should not show. And other improvements ([4982bc3](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/4982bc3cc90bb29eb05cd0b60d8d5edbb295c8ef))
- **full sales:** When you change the cadence, it action change also the status of the company ([947f9b2](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/947f9b2c59110e388ebbb4053ef6df5b5f33bbd9)), closes [P21-1000](https://bloobirds.atlassian.net/browse/P21-1000)
- **webapp:** A single opportunity I want to CREATE A NEXT STEP task related to it ([3061827](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/3061827c7c30d1389319156541fba7154fea9878))
- **webapp:** [P21-806](https://bloobirds.atlassian.net/browse/P21-806) When clicking on a company name on a list the page crashes ([8edfe5e](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/8edfe5e95f6d4182ba8d29a6729f455ea49d5f9b))
- **webapp:** [P21-929](https://bloobirds.atlassian.net/browse/P21-929) [Opportunity view] Error in opportunity name in task table. ([d4bd450](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/d4bd45024daa792b1d3c52be651fad5073b98b64))
- **webapp:** add default cadence for opp ([534c064](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/534c06428e5aa9dfb1cad96c83fee6427bf3e659))
- **webapp:** create task for company and for Opportunity ([967a6cb](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/967a6cb8b75a0cf89d94919dba1901a5d8ce6d10))
- **webapp:** fixes ([463ef24](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/463ef24290a0231929dab1553cf69a2d2398a80b))
- **webapp:** improve the code and fixes some bugs in Cadence Control modal ([ad42fb2](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/ad42fb2211bfe180fab871166a687c9a623abe0b))
- **webapp:** remove square for Cadence preview ([faf5045](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/faf5045835d83119fdb90d485c8bca6ae54295f5))
- **webapp:** Reorder and rename the tabs inside the prospect and sales tab ([ba7c938](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/ba7c9386e1c0ebac17db26393a38b6354cbe3a76))
- activity item header ([cdc1876](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/cdc1876b26bb4b1eb79c2a8a0049c09f6536ebe6))
- add a "none" option to dropdown field ([203e5d8](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/203e5d8770ae1dedc6ef1500b17bfc9f994f798a))
- add ability to deselect chip groups ([71116e1](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/71116e1c8d05e02cf6974712f0c5ebd14340eec6))
- add error to chip group fields ([6724ac2](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/6724ac22e5fbf6ed64605f839b1928e6492f9cc5))
- add loading state to bobject form ([eccc7e0](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/eccc7e0948300baef52497cc85082af6214e7759))
- add phone prefix to phone field ([84f14d4](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/84f14d4a6611c1eeb3faf131e85906b70d452ca1)), closes [P21-1014](https://bloobirds.atlassian.net/browse/P21-1014)
- add support for logic roles as field names ([d17d354](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/d17d3542f8dad3aca89e222d7adde80460f44d8b))
- add way to hook into bobject form lifecycle ([7fc8b4a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/7fc8b4a4d778237a78745880297d6e052c155981)), closes [P21-852](https://bloobirds.atlassian.net/browse/P21-852)
- bobject edition ([c365f01](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/c365f0191c4f48a13a65b5df8b329f89c7e1d45b))
- connect bobject form and duplicate validation modal ([1b39e4e](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/1b39e4e950931a6ca4d7dc42b1200c5a66cf7efc))
- create bobject form skeleton ([34836d6](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/34836d642abeb577a56942f02b4a8ffa1d7ce9c4))
- field value conditions ([2b8f52c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/2b8f52c475c296da731832d7f366574b93203fdf))
- make logic role act as value for select-like field items ([b456009](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/b4560096a7b385a5a0c98c1774409d3b397d9f47))
- open calendar logic ([31247f2](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/31247f29ead12b69a0159c396b91e532788ab9db))
- open toast after bobject update or creation ([e99636e](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e99636e0383aa29664b5352c7e699e7fab4fc8a6)), closes [P21-839](https://bloobirds.atlassian.net/browse/P21-839)
- recoil value cannot be a function for bobject form onSuccess callback ([29e724d](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/29e724dc08595f5af90514c14aafb0874beaaa77)), closes [P21-973](https://bloobirds.atlassian.net/browse/P21-973)
- simpler bobject form skeleton ([c59d31c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/c59d31c0bbf8063b72b3f0992d6c96234abe047e))
- **webapp:** error default date ([e10f4f7](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e10f4f7d153514db87d530dc268f416151909d69))
- **webapp:** hide the first radio button when we open the Cadence Control modal clicking in Cadence name ([05398b9](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/05398b958bcc737b8d8e5336fc3e2c84b0b3a61a))
- **webapp:** log activity in Opportunity page ([713389b](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/713389bb8659736d0519586eb1c1b6b95ee7929a))
- **webapp:** only save the new status when the bobject is Company ([2dc0090](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/2dc009021fbe98f046ec54abee969b9bb50be751))
- **webapp:** remane CompanyName component and the Opp name in task Card ([50f60f5](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/50f60f55f8b24b51de69d7740054049ca330cfef))
- **webapp:** remove lint error ([85ffc16](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/85ffc16a43333725867deb917d03276b50867a9b))
- **webapp:** remove unused param ([e87a509](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e87a50995bcaea3009969ed0a598fc92f2af935f))
- update add to calendar modal styles ([235dd4f](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/235dd4fa960eeee75d4ce77350e6f77aa11ce311)), closes [P21-887](https://bloobirds.atlassian.net/browse/P21-887)
- **Data Attributes:** add the dataTest attribute on several components ([f2dfd8e](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/f2dfd8e4ed7b492b2e0627dfb443adc7da833025))
- **Data Attributes:** add the dataTest attribute on several components ([ad3e7ab](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/ad3e7abcc49e5d42af14af8d054d454028350084))
- **full sales:** save debuggers ([84900f0](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/84900f03d251ce6c64844341997c6b6125d966f2))
- **webapp:** [P21-555](https://bloobirds.atlassian.net/browse/P21-555) Open the cadence control modal after edit an opportunity ([251c76c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/251c76c20efc630c919e445e9fff057cda67ff17))
- **webapp:** [P21-556](https://bloobirds.atlassian.net/browse/P21-556) Change title of cadence block to 'Sales cadence' ([7d3904c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/7d3904cdbb41c99964b990091849821b499b4501))
- **webapp:** add data to stop cadence step ([0d00c30](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/0d00c30b1bd21a9157b032775e9aa27ac8e81399))
- **webapp:** add functionality in Condfigure step ([131e7ae](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/131e7aeda1a8e2f2529913ce751ad2355942a13b))
- **webapp:** add the Cadences list in useEntity ([d6ddce9](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/d6ddce9141ac3a5e9d6ecf6228210e2a4d6589e4))
- **webapp:** added the basic task navigation ([6b5b9c0](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/6b5b9c0ba4db221531695392c91b89adb85a914c)), closes [P21-854](https://bloobirds.atlassian.net/browse/P21-854)
- **webapp:** added the filters and sorts to the navigation. ([b81427c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/b81427c4fbe67fa800618dcb54d12cae709f7c80)), closes [P21-854](https://bloobirds.atlassian.net/browse/P21-854)
- **webapp:** changes in NextStep to use the view to stop the cadence ([4f4abad](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/4f4abad12d8b641731a061978fa488b66031184d))
- **webapp:** create a new hook to cached the cadence by target market ([f37c3fd](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/f37c3fdf84ca734a9bef5c7ffad6c00a0800c8a8))
- **webapp:** eslint error ([14287da](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/14287dad261440ab170ccf018b9def9e41a2fdb8))
- **webapp:** fill the Select with all possible cadences ([b63869e](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/b63869e5bdf5ce653c64626dccdab789d5bf29dc))
- **webapp:** fix a bug in useTargetMarket ([820a987](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/820a9878ebb96b7bef5dc925dcbc08166766218c))
- **webapp:** Hide the alert when the user changes the cadence ([a6103bc](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/a6103bc4c2499a641717ac5ad08e7c2e4acfe9ee))
- **webapp:** improve code ([fb8b2ab](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/fb8b2ab85439fd9426d3e71a9ea3550bdd2b031c))
- **webapp:** index ([a020b49](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/a020b4952ef6b2714cf261b2ae690d07ba920b0d))
- **webapp:** method to stop the cadence ([3462dc4](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/3462dc41408f865b869aebc87e1069356d2dd2f1))
- **webapp:** open the Cadence Control after opens the Create opportunity ([f87c25d](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/f87c25d7dcd152adac44001461b4b9e11e3e2fb2))
- **webapp:** read of useEntity the cadence list ([a4143c8](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/a4143c83995da1799f118d11890c2d8146ffa9b2))
- **webapp:** remove StopCadence view and add the functionality in NextStep view ([27271e4](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/27271e49a5e0c7d5829fd8f673b12226c32f37eb))
- **webapp:** remove unused code ([27d25f4](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/27d25f4391467d877a422f8cdbd7e1c781cba1ca))
- **webapp:** save the new cadence ([7f4e345](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/7f4e3454900f40937ae4c293f1270ce51980f349))
- add support for dataTest attributes ([57dae7f](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/57dae7f68131777b0afd87fd22d7e29b88ad7160))
- grid styles for bobject form sections ([3627c64](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/3627c64b31345734d69ed10d8f9bba2c26487316))
- make picklist fields more robust ([7f83025](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/7f83025374d2dd103e49a599691f332fd94b6ec0))
- new bobject form hooks ([fd31cfc](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/fd31cfc6285b8a9226155ad8196613d7f299534b))
- on success callback atom ([1293c67](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/1293c673fee6f2546d0b7577fa02542cf6df53a9))
- success callback ([5c4a9fa](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/5c4a9fa797bd2bcad0fbc071e1f9b343a0d50faf))
- **webapp:** new variables ([5548371](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/5548371d8f781a79e86bff828a268896f5482085))
- **webapp:** open the Cadence Control modal in a concrete step ([41d9e43](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/41d9e435e3740fa9371ca1b7f60521bdbdc69877))
- **webapp:** remove console.debug ([d6aed0a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/d6aed0ad2ed344db9c7343d5553a416d1b11eb0b))
- **webapp:** remove unused class ([ca0e694](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/ca0e694fcfb986944d99dbfc2778e5d6b75334ea))
- **webapp:** rename function in useCompany ([0a96e31](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/0a96e31080f05db08611c7cc8679d3118ee960c8))
- **webapp:** rename useCompany function ([3d832e5](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/3d832e515db809a70f5116a695583e046a61b009))
- **webapp:** reset cadence control info ([00cc28d](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/00cc28d43bda2c48bac3f412b418f7e92fea38b7))
- **webapp:** show the cadence and the start date ([47dfcf6](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/47dfcf6395554bf6101ec38852bfee6a9e2e08b6))
- **webapp:** use useResetRecoilState to reset the atom ([446d440](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/446d44068da9179b0b9d576300a58017d3d7db4d))
- **webapp:** WIP, use the actual lists ([272467e](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/272467ed0daef5eb98d5dd4c17475bd6acdeb066))
- support for default values ([958ebe8](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/958ebe8237de973142436e9ffc4807e25e2ae2a5))
- **full sales:** Cadence table ([72e9a86](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/72e9a867f2fa8a34170542fc22041878bb9de54b))
- **full sales:** Cadence table ([c7892a0](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/c7892a057f777e1ad511718872a66311e88cac74))
- **full sales:** Show opportunity next tasks in opp. view. ([8bb779c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/8bb779cf9c468f1b77b4f457a5dcbb8179f365b8))
- **full sales:** Show opportunity tasks in opp. view. ([1ab5b91](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/1ab5b91da2bbc11864aaf8012e6f305f33b5e07a))
- **webapp:** add CadenceIcon ([d38c0cb](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/d38c0cb9c35746e68c0c47de86874e32fcefa737))
- **webapp:** add the company/opportunity in the Cadence Control Modal ([2b85e03](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/2b85e032211be12122370759f268f86d061191e8))
- **webapp:** cadence icon ([11683e7](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/11683e7caa76f74bfe76ff2a2cd69c657b9c78da))
- **webapp:** change Table component by custom stylesheet ([fc3870c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/fc3870ce34558e174db9b3b3c7a56af13ded16f0))
- **webapp:** change the flow. Remove the last step ([ad4e13a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/ad4e13afd8cf480cfa5b4b3d5326c5b16375b9f3))
- **webapp:** new Callout version ([c744265](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/c744265983f73132a0835b7b9130002f7ed07720))
- **webapp:** open the Create task modal ([fa9a3e2](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/fa9a3e2d4573776c8a0b740cc66d643d468545ae))
- **webapp:** show anything radio only when is need it ([10a4636](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/10a4636b0491c7a2ecb1d725012021a70a372df3))
- disable buttons while submitting ([64310bf](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/64310bf7c8dda53a04c730b2760413bcf91729c4))
- improver phone field with more stricter validation ([7c5293a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/7c5293af22b8bfc96846faca77f1858b976629d2))
- update confirm delete modal styles ([f38e8ac](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/f38e8acbcec57c34cb95f38c108f655c15d61adc))
- useForm for bobject form ([08ee226](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/08ee226d4b599ce65f5e1eddf54901eb02f946e5))
- **webapp:** cadence control machine ([ff4414f](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/ff4414f894a40badc53e438d286d12742b980cb2))
- **webapp:** some changes in Update Lead statuses step ([0a66312](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/0a66312717416889ad32cb261627938b5b20376d))
- use new confirm delete modal ([d7c62e6](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/d7c62e6a87a4eadfe287062c112bd6dd00cd366b))
- **full sales:** Count of sales button, with its own query ([50c8b57](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/50c8b57460f5acbfdad2a0b67d49c6e69660f88e))
- **full sales:** Meeting and Next step tab in prospect page, show tasks overdue ([e011555](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e0115553010df2ef5c8bb89bf410c818238b62a0))
- **full sales:** Open opportunity views ([d75784d](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/d75784d88ab2522bc933ed6d187a93424a9b9b50))
- **full sales:** Show opportunity activities in opp. view. ([e2dd0aa](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e2dd0aa50eba95ba5e3c0596f004a13a66ffc583))
- **weapp:** add new fields for opportunity ([973a6af](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/973a6af31d0be7332eed49f03d0026793513fdf2))
- **webapp:** add a new dropdown to the LeadCard to allow assign a lead to QC ([a6cb05b](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/a6cb05bd6a764faf2ef0e6b869fda4057beb9357))
- **webapp:** add next step when close a bobjectForm modal ([dad2c72](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/dad2c7242c1f4fef938c8505cb44e0656df6cb5a))
- **webapp:** add pending functionalities in the Lead without company page. WIP ([a769a62](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/a769a629719869d5f6f3fa3f0c2e810e6738e09b))
- **webapp:** add two new actions in the bobjectForm reducer to set and clear the nextStep ([46e2674](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/46e26743932e2ed6ce4110f637028e481cf7426d))
- **webapp:** added the disabled chip at the edit opportunity if there are none ([efac8a4](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/efac8a439940c5cb6df5df4c9febd820631dd282)), closes [P21-443](https://bloobirds.atlassian.net/browse/P21-443)
- **webapp:** added the first tests to the correct contact steps machine ([c71098b](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/c71098b2a73c951eff0b0d16e3a8933e643b94c2)), closes [P21-394](https://bloobirds.atlassian.net/browse/P21-394)
- **webapp:** added the new statuses to the company and lead call results ([b6231ef](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/b6231effeb6781cb4edde7c5c79ecfb19feb5d96)), closes [P21-383](https://bloobirds.atlassian.net/browse/P21-383) [P21-385](https://bloobirds.atlassian.net/browse/P21-385)
- **webapp:** added the opportunity modals on the contact flow ([7213d47](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/7213d4742c17dcebcbf3a02de3ff1e9f48a4c4bc)), closes [P21-386](https://bloobirds.atlassian.net/browse/P21-386) [P21-388](https://bloobirds.atlassian.net/browse/P21-388) [P21-389](https://bloobirds.atlassian.net/browse/P21-389) [P21-391](https://bloobirds.atlassian.net/browse/P21-391) [P21-401](https://bloobirds.atlassian.net/browse/P21-401)
- **webapp:** added the sales subhome tab if the user has the proper permissions ([627d8b6](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/627d8b6596f26be2545cdff387bc3fba2b363103)), closes [P21-376](https://bloobirds.atlassian.net/browse/P21-376)
- **webapp:** added the sales subhome tab if the user has the proper permissions ([11f32ee](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/11f32ee927645e5923750822d2c39e18fd549138)), closes [P21-376](https://bloobirds.atlassian.net/browse/P21-376)
- **webapp:** added the task skeleton ([0348256](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/034825657d565bbd65f84013ac7fae0d46733c7c))
- **webapp:** added the task skeleton ([fafec83](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/fafec8382e1c044ceee9cb269fd907ad0d842212))
- **webapp:** create a new hook to manage the Cadence control modal visibility ([536d74c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/536d74cb29093e8b28d6db8e548c75410d9e076c))
- **webapp:** import the Cadence Control Modal ([acac80c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/acac80cbac6572d4ee3875f9e17175746a5c4d88))
- **webapp:** improve the stylesheet in cadence header ([436f1fe](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/436f1fe9cdfd07c1823d29bf4080098db2ff649f))
- **webapp:** mock CadenceControlModal ([02adadd](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/02adaddf336b85c6faaf47b3755c76dc46f7242b))
- **webapp:** move the 'Add QC to Lead' component of the location ([7765565](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/77655657f69da0ca9cbe047dbc0a7ee5c56d8c29))
- **webapp:** move the cadence image to assets folder ([53ba76b](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/53ba76bbbf59a02cf30d3576b16cd4b262ef1597))
- **webapp:** new action to set the next step action in the BobjectForm ([b4d8a53](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/b4d8a53ba85ef66aaee866f37c49fb3a8b67699f))
- **webapp:** remove eslint errors ([c33c575](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/c33c5756a27a6c456f31dd0db4005c192b9c8f24))
- **webapp:** stylesheet for Cadence control modal ([03ee169](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/03ee169bb29c37dbd3ec6975d0f8fe30e58743ac))
- **webapp:** use the hook to open the Cadence Control Modal ([9b41b36](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/9b41b3691035e7ccd057f7aa22586827630946ea))
- **webapp:** use the new BobjectForm action ([eb1f743](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/eb1f743c54b906787206d21041e86bf4f1f3b36b))
- activities placeholder skeleton ([f98eb20](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/f98eb20b402ac45dce6ac69e5be87494dd217d09))
- add support for empty list with default filters ([45a5986](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/45a5986afb86c1a79b0e7158279e9ce8cc1856c3))
- easy scroll to activity section on cadence item click ([5e7aaa1](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/5e7aaa1c1575d79c6c7595f8c1fc2742323f5fd8))
- infinite scrolling ([2add98f](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/2add98fbc870afcd3e01edef6af022491eab910a)), closes [P21-635](https://bloobirds.atlassian.net/browse/P21-635)
- navigate to activity tab on notification card click ([4a4fc1a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/4a4fc1a9d5abd5291d3d1e6c50a12e827fe9453a))
- skeleton on loading ([339ba50](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/339ba504305e728449df7f282b18465cd472c3f1))
- update company status filter label to update ([f785888](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/f785888786811f7b41b38b3730e4738e170443a7))
- use activity hook with date filter ([8964818](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/89648187ade08550fb1003c6eb66b87cc26f29bd)), closes [P21-631](https://bloobirds.atlassian.net/browse/P21-631)
- **full sales:** When delete opp. go to company. ([f29aa08](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/f29aa08b473cc8a695d10c77bdfb0a60d8a9c708))
- **webapp:** -CORRECTED - Counting only returns todays next steps and meetings. ([1da0b23](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/1da0b2311c1d7fdda6b54c24ee702aa5f4331c56)), closes [P21-324](https://bloobirds.atlassian.net/browse/P21-324)
- **webapp:** Access to the oportunity list ([b335b20](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/b335b20f4acdd53a598ee0c8cdc181321b7309be))
- **webapp:** add a field constants ([6300ed5](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/6300ed54bdbd4807696b49a7b50165041e30cb84))
- **webapp:** add a margin to InfoCard component ([bf519dd](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/bf519dd96caca54bd60ee705e666c929e9e3b675))
- **webapp:** add edit company modal ([6d31032](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/6d31032c23f277d5655c548dbd01e3edf6b1b7e9))
- **webapp:** add import button ([ed93783](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/ed937834e95aadcca990497daa71db805c9a83c8))
- **webapp:** add lead action ([c5e92a0](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/c5e92a010b40947599e2e128ceaa74c0bfd4e301))
- **webapp:** add new company constants ([49edfad](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/49edfad067d7d2aff288d42a5109cc593bd1989e))
- **webapp:** Add opportunity button to the header dropdown ([c0e0dcc](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/c0e0dcc48f12ad09ac59aa362f749bfd3c8f14ab)), closes [P21-86](https://bloobirds.atlassian.net/browse/P21-86)
- **webapp:** add search and input elements in the opportunity list ([0be8be8](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/0be8be874994ee8d953a26bc2232f6ca0a071d8c))
- **webapp:** Add the opportunity creation button under the feature flag ([bf89f4c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/bf89f4c0709f062605c6d450c997bd4f46ffff90)), closes [P21-94](https://bloobirds.atlassian.net/browse/P21-94)
- **webapp:** add the target market of the related componay in theopportunity quick info modal ([71bb55c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/71bb55c5a6a98de0d52d62d3f6ccb0baf9e3cfd2))
- **webapp:** added antialiasing to the cadence nonworking days ([1b6e554](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/1b6e554bde720f4db62989e6f986237e5630c0c2)), closes [P21-198](https://bloobirds.atlassian.net/browse/P21-198)
- **webapp:** Added counter for the new tabs on the prospect view. ([d4cb364](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/d4cb36467b4075c3a60ea572ad3d410a65c8be50)), closes [P21-324](https://bloobirds.atlassian.net/browse/P21-324)
- **webapp:** added the add lead button ([adcd3a0](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/adcd3a057438c32e7d8bd24927ad82bf111e4cd0)), closes [P21-198](https://bloobirds.atlassian.net/browse/P21-198)
- **webapp:** added the add lead button ([343949f](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/343949f000b5e75f0778d694f092300a3003ff5e)), closes [P21-198](https://bloobirds.atlassian.net/browse/P21-198)
- **webapp:** added the contact tabs and fixed the open/closed opportunities at the dropdown ([72c95ed](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/72c95ed6389c1cc0b079b0b1812d6266f3c24582)), closes [P21-198](https://bloobirds.atlassian.net/browse/P21-198)
- **webapp:** added the selected lead ([2419a2b](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/2419a2b548eb5c3d35ca31ea2ca6c422b905b4d4))
- **webapp:** addeed the active company to the nav bar ([c31a265](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/c31a26542ea19cd786cfd0a8aefd13669fdf8cf9)), closes [P21-204](https://bloobirds.atlassian.net/browse/P21-204) [P21-201](https://bloobirds.atlassian.net/browse/P21-201)
- **webapp:** change the order in the menu list ([55a310a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/55a310a171db007d4f042c2d70e85ef8fb93056b))
- **webapp:** change to the Activity tab when open the dialer ([ee036b7](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/ee036b73b818963f37068fdbb0d00055c1e6c3c3))
- **webapp:** Company card ([da1c8a6](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/da1c8a630a37317a325bf81646bc9d15e6e9dce3))
- **webapp:** contact view, cleaning ([994842a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/994842a63df694dcd7f2799ee13f927b84d7b67f)), closes [P21-198](https://bloobirds.atlassian.net/browse/P21-198)
- **webapp:** contact view, now with cadence! ([d0a8e66](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/d0a8e66e9edde95db6d2b4f2af15b44e92cac6ee)), closes [P21-198](https://bloobirds.atlassian.net/browse/P21-198)
- **webapp:** control to acceso some properties ([cad6a5a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/cad6a5a77b71c0d587e50e8e2e005c410dfbeeac))
- **webapp:** Create a hook to manage the Bobject details modal and changes to use it ([a5106f8](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/a5106f89f600cc74b2567acebe6a6df24af9f9e9))
- **webapp:** created the new two tabs at the prospection subhome ([7981871](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/79818713151495652dd0348a8a8f840a315bd84b)), closes [P21-198](https://bloobirds.atlassian.net/browse/P21-198)
- **webapp:** dont show the opportunity button in the contact view when is a lead page ([4eb9b3a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/4eb9b3a95b9ffe8ee4983e36fd6a0749f25cd411))
- **webapp:** EmptyCard component ([d8fb752](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/d8fb752d46bb74decbe26694ae116df5876c3148))
- **webapp:** eslint errors ([e46def6](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e46def699e5178b542398031317d49961ebeef1e))
- **webapp:** export InfoCardTemplateSkeleton component ([4d7aa2d](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/4d7aa2d2f988ccb5427d10d510c3dfc1a1c6782c))
- **webapp:** export useEtity hooks ([72bac61](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/72bac6147f3ec585782e6b24c9abd36907188ac8))
- **webapp:** fix in the destructuring ([edd5e1b](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/edd5e1bb913b177f081cd901295eae20f74c8ff7))
- **webapp:** fix the url path in the quick info modal for Opportunity ([fc196a7](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/fc196a741d305ec20cb9f8bfa1e424bc1bba1440))
- **webapp:** fixed some of the sizing ([61674b7](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/61674b7acce4aace05fc3d59f0480fe7ce34eb0c)), closes [P21-198](https://bloobirds.atlassian.net/browse/P21-198)
- **webapp:** fixed the candence width ([11240c9](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/11240c96954603379db41cac10ca1bede4c06529)), closes [P21-204](https://bloobirds.atlassian.net/browse/P21-204) [P21-201](https://bloobirds.atlassian.net/browse/P21-201)
- **webapp:** fixes in the InfoCard style ([9c2aeb0](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/9c2aeb08560cf0e77dc63c2a87c85329cc07f752))
- **webapp:** improvements in InfoCardTemplate and new component to CompanyCard ([e17fbe1](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e17fbe11ecc422cff69893ce5ccb26daf3999379))
- **webapp:** InfoCardTemplate ([0d98dcf](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/0d98dcf5c372602bc7c4076c05bb831eb5e8e11e))
- **webapp:** new utils function to returns all fields from a bobject by its logic role ([475b8a9](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/475b8a9d0696112859ed80757f774a2df1850877))
- new InfoCard component WIP ([37c02ef](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/37c02efe47c9f7ab5dcb4b91d84d3325a9536f05))
- **webapp:** hide the opportunity button if the feature is disabled ([782afb6](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/782afb6a85fab7adead5f951a134af668cdb5876))
- **webapp:** improve the code ([b93e8d1](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/b93e8d13ad6c13b1e956cf663a670ce31a2a5a0a))
- **webapp:** improved the state handling ([73064de](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/73064de4b4cb3bc828e7198f5f463571825e07a1)), closes [P21-195](https://bloobirds.atlassian.net/browse/P21-195)
- **webapp:** improved the state handling ([49bdd63](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/49bdd63e1e8ef2b46496b57d546b498664da5d1f)), closes [P21-195](https://bloobirds.atlassian.net/browse/P21-195)
- **webapp:** improvements and fix the opportunities list in the edit lead modal ([1705a4e](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/1705a4ebb910ec91ba04fcb13c068d1c34114c1a))
- **webapp:** improvements in the Company Card ([8396fda](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/8396fdab17e96d045b85a77d97fd6d1426bd245e))
- **webapp:** improvements in the InfoCard for Opportunities ([0474308](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/04743082d41947da78ca864d7bb4fd4c0e85770e))
- **webapp:** improvements in the InfoCardTemplate ([f9299e8](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/f9299e8eb88cf19c466be14e924e19f1585767ea))
- **webapp:** layout responsive ([7b6b729](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/7b6b729f138b75c8341551f8de32c5e5064a2c57))
- **webapp:** lead list button ([57e5ade](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/57e5ade8f6fad7d0da4cbfe8ecdcc6879bd6b854)), closes [P21-196](https://bloobirds.atlassian.net/browse/P21-196)
- **webapp:** lead with and without company integration with the new Contact pages ([d177b5a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/d177b5a24c09c1d72da4970652f6653b4d0a74dd))
- **webapp:** LeadWithoutPage ([a00da63](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/a00da6325a4500715644208ea0caf862f6048ccd))
- **webapp:** manage of the tab and subtab in the Contact Page ([7b18d05](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/7b18d0577535a07f147f911211e5aa5e1d6d6e32))
- **webapp:** nav bar navegation active tabs ([597cdba](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/597cdbafaa509d2c5c212e842f0d8683adff42af)), closes [P21-201](https://bloobirds.atlassian.net/browse/P21-201)
- **webapp:** New entry on create list for opportunities. ([1117cb9](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/1117cb9ee8f0db7c3af291f3eebf7410e77967ad)), closes [P21-253](https://bloobirds.atlassian.net/browse/P21-253)
- **webapp:** new hook to manage the account users ([f0364d7](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/f0364d7dbe0134bd3e51a6b00ec23f9cb31413cf))
- **webapp:** new routes ([c95b1ac](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/c95b1ac6f830f3bdae3ee0b6a7d3b10d87573b33))
- **webapp:** open the Contact Flow modal after make a call ([8dfef10](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/8dfef105b82920647754e07c572ab1ad8a9533c9))
- **webapp:** open the quick info modal when click in the opportunity name ([8815f55](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/8815f55a59bc172326b0ed1f74a6a372396a2a60))
- **webapp:** open the quick info when click in company field ([d91afab](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/d91afaba4af4dee2258e5b1f128f093d6a5f7dbd))
- **webapp:** opportunities dropdown and opportunity page ([11d6ca6](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/11d6ca6e3e2539a0a09e186bfc52b7a45a4ad58c)), closes [P21-198](https://bloobirds.atlassian.net/browse/P21-198) [P21-201](https://bloobirds.atlassian.net/browse/P21-201) [P21-200](https://bloobirds.atlassian.net/browse/P21-200) [P21-205](https://bloobirds.atlassian.net/browse/P21-205)
- **webapp:** opportunities dropdown and opportunity page ([8361d76](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/8361d76240755c6f2ac3e46857562391baaeab0c)), closes [P21-198](https://bloobirds.atlassian.net/browse/P21-198) [P21-201](https://bloobirds.atlassian.net/browse/P21-201) [P21-200](https://bloobirds.atlassian.net/browse/P21-200) [P21-205](https://bloobirds.atlassian.net/browse/P21-205)
- **webapp:** Opportunity Card ([c88ebb4](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/c88ebb48880f97f8d80409fcd3be3bb2cde72c6d))
- **webapp:** opportunity constants ([e7a475d](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e7a475d4b8c619cdf14a5c64c23982d74579ba56))
- **webapp:** opportunity page and routes.js ([356732e](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/356732e673e8bb686d4d463d9114e31ccb87fb35)), closes [P21-198](https://bloobirds.atlassian.net/browse/P21-198) [P21-202](https://bloobirds.atlassian.net/browse/P21-202) [P21-203](https://bloobirds.atlassian.net/browse/P21-203)
- **webapp:** opportunity page and routes.js ([f77be94](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/f77be943c5a30eea124e67c8642e04b0d724b6a9)), closes [P21-198](https://bloobirds.atlassian.net/browse/P21-198) [P21-202](https://bloobirds.atlassian.net/browse/P21-202) [P21-203](https://bloobirds.atlassian.net/browse/P21-203)
- **webapp:** remove an imported hook that for the moment we don't need it ([f9324dd](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/f9324dd510faa1d38f229f59f1a467a444bebdb6))
- **webapp:** remove an unused file ([8853e47](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/8853e4711bb57f67d58a8fda2f2b5b4d01a2a55c))
- **webapp:** remove commented code ([10e0fc8](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/10e0fc82b2ce382f12306961c1be0ea6b4f09cfb))
- **webapp:** remove console.debug ([5c53b31](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/5c53b31b1d8e827bf25d25f1da4e9ed490909a48))
- **webapp:** remove console.debug ([6717976](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/67179761e57e4cc229e2b15575cca0bf7d4eccaf))
- **webapp:** remove empty component ([cbe373d](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/cbe373d79c365c87575668cb2966dca178e5b128))
- **webapp:** remove eslint error ([3e5fd10](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/3e5fd106056aa78ad913de3658b1a0ceb4f320d2))
- **webapp:** remove hardcode value for active the Sales cycle feature ([4e486ce](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/4e486ce13fc23a1b9b58cd9e8104c97999bde131))
- **webapp:** remove old files related to ContactTask ([40812ba](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/40812ba860964b5d48028c58e2d058a1bfec1c38))
- **webapp:** remove old page of Contact Task and its reducer ([8d2455d](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/8d2455d28da8ab6afcb1b7561bcf1fa0a90bcd52))
- **webapp:** remove Schedule and Meeting button of the feed bar ([eb781a3](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/eb781a335419e1092b8a23592046c74c9b2c6600))
- **webapp:** remove unused code of CallResult ([11c6413](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/11c6413876a033cbdd94ed74ab227a5a9b384497))
- **webapp:** remove unused code of old Dialer ([3d98b99](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/3d98b993396eb4c0575c9270cba3eb3bc2050b9e))
- **webapp:** remove unused component called LaunchEmailButton ([2a86337](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/2a863372a65c0562049c707bead981333c912d90))
- **webapp:** remove unused component called LeadCardDropdown ([96abc20](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/96abc20adc0efdd9c893fb83d8e9a91e1dece49e))
- **webapp:** remove unused component called styledTextField ([ebc8b5f](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/ebc8b5f23628cbd31e149620a6bdd9903f7dfd79))
- **webapp:** remove unused component goBackButton ([e609284](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e6092845fe8562e5068515509fdc1eb36a23ddc1))
- **webapp:** remove unused component MessagingTab ([1c66d68](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/1c66d68ce6001a9650a40b793929d12b1755dbd4))
- **webapp:** remove unused file ([e95dfe7](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e95dfe7af9da75b83df47209bab4bef50a5e4437))
- **webapp:** remove unused function ([f6ea575](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/f6ea575a378e72d78e81c020dca12ed4b73a6c35))
- **webapp:** remove unused import ([b48d3f8](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/b48d3f86b197c36657fe0fbf26cd6a1564cb8f23))
- **webapp:** rename and move the Contact Flow modal ([e29b218](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e29b21886e09ba7775ced6bff331f1f9e181e494))
- **webapp:** rename the account setting prop ([867a04a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/867a04a00e918671c4c3a5fd2606bfea86cf1be3))
- **webapp:** restart cadence modal ([72cd927](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/72cd927e04c5e8087c1c607135e800b72ae63fed))
- **webapp:** sales page and minor fixes ([e627e00](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e627e001af9622669de2253efa3f9685b215fe30)), closes [P21-368](https://bloobirds.atlassian.net/browse/P21-368) [P21-369](https://bloobirds.atlassian.net/browse/P21-369) [P21-370](https://bloobirds.atlassian.net/browse/P21-370) [P21-374](https://bloobirds.atlassian.net/browse/P21-374)
- **webapp:** Show the button only when the feature is enabled. ([392056e](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/392056e1c9135191c2ff529a1eb387c3370d98de))
- **webapp:** showing untitled bobject at the bobject name ([225bbb2](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/225bbb26047fd825179d5fbfda004f47ae71f25e)), closes [P21-276](https://bloobirds.atlassian.net/browse/P21-276)
- **webapp:** split the Cadence Control modal in componentes - Configure cadence ([b05d02b](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/b05d02b9dc9c7eaa738028d2e9d0588bdf60245e))
- **webapp:** split the Cadence Control modal in componentes - Next step ([be5c945](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/be5c94505097b5e95adc6df5a409c25be1ce71a0))
- **webapp:** split the Cadence Control modal in componentes - Stop Cadence ([4ffcc22](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/4ffcc22d6f1e4d7c92e5be96197deaac59a31398))
- **webapp:** split the Cadence Control modal in componentes - Update Lead statuses ([209b5ac](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/209b5ac10c7ae52205c342dc59a5c8c9dbb8a82f))
- **webapp:** the task bar is always rendered ([7429421](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/7429421e43cbf5cf5f17fcecf8108c85f2dc1479)), closes [P21-195](https://bloobirds.atlassian.net/browse/P21-195)
- **webapp:** Update search input so it uses opportunity name as a filter ([1763734](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/17637349e5de5f63da4edd4702cb092fd1cbf4e8))
- **webapp:** upgrade the components library ([339b19a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/339b19aedea40c9a53d3d1bc85e20de01d85e14a))
- **webapp:** upgrade the components library ([adc0d9c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/adc0d9cb21aa30ba91e2ea642ea58d26ecefcbe8))
- **webapp:** use the hook to edit the Company and the Opportunity ([93e4e4e](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/93e4e4ed3fb114f0bf71c4da2927bc9cd3ed2494))
- **webapp:** useBobjectForm ([148ab25](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/148ab259c60a7fa58a3700a856966dfd0b25c423))
- **webapp:** User has no the feature enabled ([f28c813](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/f28c813acd60459b90d84960748046e2b4045500))
- **webapp:** when click in a row in the opportunity list, redirect to Opportunity page ([861d66b](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/861d66b663ba2af1feb3a9c24890ece5ccf0384b))
- **webapp:** when click in Email or Linkedin action in addition to change the tab we made scroll to the tabs section ([23b07cf](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/23b07cf31a1653128d391992e9ee9d2fdd5f1ce1))
- **webapp:** when click ina opportunity row is redirecting to Company page ([af93f71](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/af93f71380b270e9255d86925e62c27bbdd40f30))

### Bug Fixes

- add support for non-existing fieldValues ([faf1c9c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/faf1c9c7a60c7333a77cdb2ab5b9ae4481d4cf7f))
- added changing on isStopped conditional ([2e1082d](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/2e1082d0117c221eb2ea2069b0ffa31d96d3bee5))
- **add qc:** Fix query in filters in leads without qc ([32c6e7e](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/32c6e7e38970e7762d82d19c61389bcb2630d3d6))
- **cadence:** Cadence is stopped when has not prospect task ([73fde14](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/73fde14b06aef602ad4049cf2aace5c1c99e6c46))
- **calendar filter:** changed the MUI calendar input component for the BB one in the filter modal ([e189262](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e189262a5231808a6b062e3c16f39fb484815ae4))
- **calendar filter:** changed the MUI calendar input component for the BB one in the filter modal ([8d63212](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/8d63212dc9ff3bc6849479397564ec9309207edc))
- **company view:** remove console debug ([c5f07e3](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/c5f07e3a90900f8c073d6556f8ce166c931d4c19))
- **contact:** Add new list, for scheduled tasks in company view ([e675dd6](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e675dd696fd2d7915c55faf05bd804116431810d))
- **prospect:** List of overdue, show overdues from any type of task ([4ae8dd3](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/4ae8dd3a474c5dabed72f05681534ea6da100c9f))
- **webapp:** [P21-1051](https://bloobirds.atlassian.net/browse/P21-1051) Can not create a Task and Activities on the Opportunity page ([8d4d41c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/8d4d41cb097eb04bf2078a08d4870643bee67d10))
- **webapp:** Notes button is not appearing in the activity tab from companies ([d998060](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/d998060c8472273c02b72caece8258ccd040e97d))
- avoid selecting automatically if bobject form field does not have conditions ([4d002cd](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/4d002cdaf01a5396cd1e528835925fff8354d464)), closes [P21-1048](https://bloobirds.atlassian.net/browse/P21-1048)
- lead field for tasks ignoring default value ([d14bf1a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/d14bf1a649535ecdef8e27143904d425129f8ac1)), closes [P21-1172](https://bloobirds.atlassian.net/browse/P21-1172)
- **company view:** Reset activeCompany in add leads task ([508afbc](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/508afbc8098358e00aa7376c8e39c00ba795d1bf))
- **full sales:** Cadence name will change when we change de cadence of the company or opp. Fixed lead filter of cadence table when we change from company to opp. Fix tooltip of status changed activity type. ([0d3cf26](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/0d3cf26fec50c37ee966adb55184fc7f25ad8ec2))
- **full sales:** fix save cadence in useCadenceControl.js ([a63d206](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/a63d206c1c3adcbda037bf33fe5870fbdaded616))
- **full sales:** Fix stop cadence in company and opportunity ([66fcef5](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/66fcef5ed36325166b36f3cbeeba1a82ab486936)), closes [P21-965](https://bloobirds.atlassian.net/browse/P21-965)
- **full sales:** Fixed queries for accounts without full sales enabled ([14e6db1](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/14e6db19fdb9056dfe4bccf72918902ae1ae6b8a))
- **full sales:** remove debugger. ([fad68a3](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/fad68a3f472e62678bcc5e1600c4df80e4c4013f))
- **lint issues:** Fixed Lint issues ([efaf5b8](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/efaf5b802e074eefb0c9f8477e6d1cbeeb531fb2))
- **prospect:** Fix load lists of meeting in subhome when we do a logout and login ([378aec9](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/378aec9231b111572fd51634f97997948c8f0f48))
- **scheduled:** Fixed create next step tasks ([8d8c5c5](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/8d8c5c5b8aed1e9beed878ae5939500e7e1fa034))
- **webap:** eslint errors ([cb3fb5a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/cb3fb5a18c1497cf5964a936cae105a8e944b340))
- **webapp:** [P21-1010](https://bloobirds.atlassian.net/browse/P21-1010) When clicking in a call notification of a number without lead, the page redirects and return an error ([ef60b7e](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/ef60b7ec9f4183f79fd4a891abf675c3cbf8a8c8))
- **webapp:** [P21-1016](https://bloobirds.atlassian.net/browse/P21-1016) Target Market & ICP list have wrong design ([d204237](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/d204237a734aeeda42175176becbe150be8e4af8))
- **webapp:** [P21-1020](https://bloobirds.atlassian.net/browse/P21-1020) Default cadence and its message its not correct ([a580bb7](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/a580bb78f4da4084cfcec3719471d4f65708548f))
- **webapp:** [P21-1028](https://bloobirds.atlassian.net/browse/P21-1028) Contact Lead is not working in Leads without company ([e952a12](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e952a1274acab6c83e2c4c82f18e651a851991c7))
- **webapp:** [P21-1101](https://bloobirds.atlassian.net/browse/P21-1101) Save button in the Cadence ([9c77c2f](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/9c77c2f45cadc6d42eda37d82ff156a42d5dde26))
- **webapp:** [P21-1108](https://bloobirds.atlassian.net/browse/P21-1108) In the Cadence control modal, when starting the cadence the date is not correct ([2480592](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/24805926780b395cc4fac8d8f89850a2c2b06eb8))
- **webapp:** [P21-1145](https://bloobirds.atlassian.net/browse/P21-1145) Closing and opening the modal cadence within an opportunity shows you that there is no cadence in progress ([08c9a81](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/08c9a8137047cd8b59fa9c8d9115b2e0bd87b15e))
- **webapp:** [P21-1146](https://bloobirds.atlassian.net/browse/P21-1146) Redirecting is not working in the notifications ([f8a5c86](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/f8a5c86abbed66326dfccd0ac7d3990f945bd8a4))
- **webapp:** [P21-893](https://bloobirds.atlassian.net/browse/P21-893) Call result modal is appearing after clicking in the opportunity after a call ([5971b14](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/5971b1458d7cedf0978e705aba338eee1c438f51))
- **webapp:** [P21-958](https://bloobirds.atlassian.net/browse/P21-958) The company tooltip doesn't show the company name ([cba27dd](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/cba27ddcc1406751c1bf149a4c428e3aee043242))
- **webapp:** [P21-967](https://bloobirds.atlassian.net/browse/P21-967) Full list of opportunities tab is showing all the opportunities instead of all the opportunities assigned to our user ([08c0a9a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/08c0a9a79c37f0dd021c561f74cad44ada3772d6))
- **webapp:** [P21-981](https://bloobirds.atlassian.net/browse/P21-981) Notes are appearing with undefined in the title ([26a417a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/26a417a84a7e72f84b489f175c0cd56b2b1cf841))
- **webapp:** [P21-982](https://bloobirds.atlassian.net/browse/P21-982) After creating an meeting in the call result modal the meeting creation modal doesn't appear ([4464811](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/4464811a0fb55f8590b272914d329c053a831ae2))
- **webapp:** [P21-991](https://bloobirds.atlassian.net/browse/P21-991) "I want to manually schedule a next step" button doesn't do anything ([8bb23cb](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/8bb23cb4ff6082c1725967d6aa20aff50dc32e2e))
- **webapp:** [P21-993](https://bloobirds.atlassian.net/browse/P21-993) Task for today appear without data ([76bc4a3](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/76bc4a3dce4bb7c6a1c5c0ec90714f62e66dc932))
- **webapp:** calendar queries ([33d95fa](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/33d95fa25cf932c3c5427e73c9161750bdfe841e))
- **webapp:** change also in Lead list ([5a27561](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/5a2756186ab0434f21b96416efa50c6f2a142d32))
- **webapp:** Change call in opportunity tasks ([1dc65cf](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/1dc65cf2827e78766aed1724a934139fae0deab3))
- **webapp:** Change filter of the tab "Full list of companies" so that it also shows companies with the status "contacted" and "engaged". ([214242a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/214242abac79a8dec68a9809f14dbb7490a5a60c))
- **webapp:** change icon ([6d7579c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/6d7579c82bc8c76933ada5f1423562aa1dedf7cf))
- **webapp:** default cadence not working ([936416e](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/936416e108a1684d0c03ebbe30805abcfa5a90c6))
- **webapp:** error in a path ([95f5567](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/95f556752b4fdef45941125efd2f10914c89f0c2))
- **webapp:** error in useTargetMarket ([0830fe2](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/0830fe2d2db8aafb54b9edd71f414e0e7a0a94aa))
- **webapp:** eslint error ([999b615](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/999b615d2574522787a3cf254bd983b1a311dca5))
- **webapp:** fix feed queries ([18a983e](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/18a983ed440db9948dbaf2d2b46580b57bb0995f))
- **webapp:** fixed the restart navigation bug and overdue tasks to the task pagination at the contact view ([d618c30](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/d618c30f7d644c26deb8de8200eaf49afa8a07a5)), closes [P21-854](https://bloobirds.atlassian.net/browse/P21-854)
- **webapp:** If we open the cadence control and the company has the cadence ended show the Cadence as activated ([661a53d](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/661a53d095be9afe5a573fc4eca65b630c208b6b))
- **webapp:** improve the code ([d2acab8](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/d2acab8290204029ccb14d6273737518273853c6))
- **webapp:** in Cadence control modal, when we open the modal for an opportunity, the add task is not correct ([de4f9fc](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/de4f9fc106c4c11b0471f2c276df61fb4a3f0cac))
- **webapp:** In the Cadence control modal, when configure the cadence, the placeholder is not correct ([7526e78](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/7526e7817c36e90b4d7c12bf4c200ca88600fc58))
- **webapp:** modal title ([d689c81](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/d689c811922e232bed9061399eac1f48a7139719))
- **webapp:** new yarn.lock ([9ea2007](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/9ea2007340b60eae1d63dba0c2dd5ca97772299c))
- **webapp:** Opening the cadence modal 2 times in a row, the cadence disappears from the modal ([878dd3f](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/878dd3f88794ad072e253062410c5051208d21ff))
- **webapp:** Scheduled task are been created without date ([b6b42af](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/b6b42af95e23685cafc0bcf7b32f119462d1b052))
- **webapp:** The session is started by pressing the show password button ([baa6ae3](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/baa6ae33d5cacb896078cd1567afebc5abff643e))
- **webapp:** The toast text when creating lead / company is backwards ([980fa22](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/980fa22d5dcb8548cf2baf7a98ec7b40f86cab99))
- [BG-393](https://bloobirds.atlassian.net/browse/BG-393) Filters crash when no section fetched yet ([4220a24](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/4220a2465cc7dd50258da62a5b390c7fd6c89591))
- activity selected lead is set by default on bobject form open ([d45ac0d](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/d45ac0d4201bc528886e96d494be368e33c25bf1)), closes [P21-996](https://bloobirds.atlassian.net/browse/P21-996)
- add 'now' as default date for time pickers on the bobject form ([10bf77b](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/10bf77bfc81d986cafb1e1331cb2c0498115508b)), closes [P21-999](https://bloobirds.atlassian.net/browse/P21-999)
- add meeting does not fill default values ([d82e49c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/d82e49c51ff04aefab9e05003fa5f698e8cb4801)), closes [P21-931](https://bloobirds.atlassian.net/browse/P21-931)
- add missing company logic role ([d067918](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/d06791839b16fd61a4ca1d733435cd71c40a2115))
- assign leads update active company so field is not empty on submit ([1cd04ed](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/1cd04ed9f2716c503220865b8ba6d666d7caba85)), closes [P21-964](https://bloobirds.atlassian.net/browse/P21-964)
- autocomplete filled on blur ([8d74a4b](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/8d74a4ba49a6dd921dd5343f5618cba5860b4fef))
- avoid text inside of <p> tag ([35642b6](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/35642b6ff898cc78cb31a08b67c2bb61b00fffe3))
- bring back public path ([6a1c458](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/6a1c45858e53118fee4353ca250749b8ecf86efa))
- close bobject details on bobject form open ([4339852](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/43398526b2085c3af5adc092c8ed23fb11eb2773)), closes [P21-977](https://bloobirds.atlassian.net/browse/P21-977)
- date inputs widths ([bded00b](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/bded00b2f04afacc7e3ea190b6659634802c84ed))
- date time field type not being recognized ([b64cd04](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/b64cd0485a7ddd0fe619ea987cdc97e3924ced63))
- default picklist values not being selected ([a03aba9](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/a03aba9753d5d1e838f6dcc5debd28f0da19f282)), closes [P21-998](https://bloobirds.atlassian.net/browse/P21-998)
- Filter on the filters modal to not show deindexed fields, but in columns they should be shown ([cc56220](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/cc562205fe31ae23438441d031f3b834291cd726))
- getSimpleDate function for dates on 00:00am ([341e704](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/341e704bfefcb71d22f3ad2ccf998fbfe18fedde))
- give gap between cancel and delete buttons ([a3e536f](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/a3e536f9a6f1b32894aef9e7fd08d3effeeb1cb0))
- hide bobject form section if empty ([4507e00](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/4507e00f6de871e46e7764e334647d191468114b))
- if only one field condition matches, it should select automatically ([e8a51ef](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e8a51effed2d3c4282be63826015f2545f7355bf)), closes [P21-998](https://bloobirds.atlassian.net/browse/P21-998)
- incorrect imports ([16f4210](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/16f4210ac5dfb9ef9cabd0f96d7e534c426bbdb0))
- invalid postcss ([b52f416](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/b52f41625e47b5f1ba703952d3bed86699530c7a))
- lead not being selected on task creation modal ([40a5699](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/40a5699b1d8a423d8214604d709e49f5ccad1c59))
- linting errors ([e219b98](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e219b98514564fa8a907ae736433006427acc271))
- live reloading not working for task navigation ([3e6cb60](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/3e6cb6045518f40229f85698793f2bf8b6275324)), closes [P21-1165](https://bloobirds.atlassian.net/browse/P21-1165)
- **webapp:** Doesn't appear "contact company" in bobject detail ([567d546](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/567d546b09f65df95c33043263dd7f1b127cc439))
- **webapp:** fix ([475665c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/475665cb1d12ce76621ed14f3916fa2a7e094f80))
- **webapp:** Live reloading is not working in the "mark as done" button from the tasks ([f0fb82c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/f0fb82c95efd94c2b451a216c1cc793fbc7c0758))
- **webapp:** Mark as done is not working in the task bar ([8cb0edb](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/8cb0edb18ed00b0fc406a9c5e8f7ac2ee2259599))
- **webapp:** remove console ([3364ea2](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/3364ea2d9a89668e80950302aa6e53cf58ef286c))
- **webapp:** resolve fix ([00795eb](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/00795eb4b2a071d7a443abecd7e3337eae13c296))
- avoid default value overriding the field value ([7a4be97](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/7a4be97f187292e4d94bed88b0923e33068510ae)), closes [P21-1057](https://bloobirds.atlassian.net/browse/P21-1057)
- calendar being squeezed by large meeting title ([7133f1c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/7133f1cd9993566e9b52dced49e56a7b505549db)), closes [P21-1119](https://bloobirds.atlassian.net/browse/P21-1119)
- component library version mismatch in yarn.lock ([2d71574](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/2d71574b19be1bcea5e105dec9557a4070d30f54))
- configure cadence modal accept disabled conditions ([ac0a83a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/ac0a83a6a23d71931de919af3be982b3e8ba0c2b)), closes [P21-1111](https://bloobirds.atlassian.net/browse/P21-1111)
- downgrade babel to fix eslint issues ([595dc8d](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/595dc8de37915eaebfe0d95a4ba50d8d91b8cc37))
- dropdown closing randomly ([2ff312c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/2ff312c48f53be93a579b6b2d6f03f9eb66e48d9)), closes [P21-1077](https://bloobirds.atlassian.net/browse/P21-1077)
- font display field if empty ([5cc63bc](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/5cc63bca942cb42bfb746e8f20a05b2c714cf9ae)), closes [P21-1049](https://bloobirds.atlassian.net/browse/P21-1049)
- make bobject form section caching immutable ([e6dd5b6](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e6dd5b610a29d575b37abbb3510bdaf319d19df3))
- make cadenceItem redirects to activity tab on click ([40b7dac](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/40b7daccdeda6abb0851192e216cf358ac3d2469))
- make dropdown field default for picklist values ([a0e315e](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/a0e315ecbdd1a6fbc4d4a6437a25ff4e100aa9cd)), closes [P21-979](https://bloobirds.atlassian.net/browse/P21-979)
- make notification card also scroll to activity section ([9d32b12](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/9d32b125d781effaea581b38e9b8048eee1dcfd3))
- make param id change should update company on contact view ([2165592](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/2165592fadddc5b3e5dcc08fbcbc5674e1a3d8ae))
- make select with no items not filled ([dcb8283](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/dcb8283cd8c5b0c2b239ac9b6cec8d6c60e32b8e))
- meeting creation does not open calendar modal ([f320c14](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/f320c14ba85defe33110372b81f9b1f98f02b7eb)), closes [P21-939](https://bloobirds.atlassian.net/browse/P21-939)
- new prospect tab names ([56c3feb](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/56c3feb460c600e31937f0a846c1c899e96c081d))
- number field should only accept numbers ([afd474a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/afd474a2287325335bb988efaa8d768b276d2610))
- number fields decimal max ([0a47ed0](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/0a47ed0c9fa5d6706b4cd8f439ef3f2ce8436ae4)), closes [P21-960](https://bloobirds.atlassian.net/browse/P21-960)
- open task outside company/opp view ([b824a03](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/b824a0385810c16395ea2ae8eb284dd4a60606a0)), closes [P21-1156](https://bloobirds.atlassian.net/browse/P21-1156)
- **webapp:** remove console and revert a code removed ([a23fbfd](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/a23fbfdebc1a3a97f0173c81a2f8040e30fd0bd3))
- **webapp:** remove console.log ([bb37fe4](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/bb37fe455028e7729d8a97098f8848ff470e5a9e))
- picklist item values use id not logic role ([2981628](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/29816285d48f652c3c3d7b3542f7b06f4b43956e))
- prevent setting an already existing filter trigger loading state ([9b1bd76](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/9b1bd7674669e82197f1351aead789764dddbb90))
- reconnect next step to bobject form ([bb423e2](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/bb423e23810021cd1ea7e7b40f7e279da8c9acda))
- replace placeholder by real values on duplicate validation modal ([34aaba6](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/34aaba64c0ad621f633e28f766d089cf7210182a)), closes [P21-952](https://bloobirds.atlassian.net/browse/P21-952)
- revalidate bobject form after first submit ([40f2d82](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/40f2d82b1c019b28277854b20c146c7b497a27d0))
- revalidate bobject form on change ([464e0e3](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/464e0e396345ee9e2b2e64d04233aed7853a22a6)), closes [P21-976](https://bloobirds.atlassian.net/browse/P21-976)
- set a default 50% width on fields with no width ([9a8bc91](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/9a8bc91a744592185aacce03edb1629a96b97cb6))
- solve icon styles issues derived of mui-icons refactor ([aab8e57](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/aab8e578c20de6e708edce3505e1d933a9164ec0))
- task card suffix ([06a072f](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/06a072f37dbc4c3a49f789592e2b9c87ad0844b5))
- typo in duplicate validation modal ([3dabb2d](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/3dabb2dbc1513926c5a7ac9040eb1ee7d2211efb))
- use target=web for live reloading ([3a9271a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/3a9271a9da5347ad0b991943588392436d53cf20))
- **contact-view:** resetting the state when going back to the prospect view ([7f2b82e](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/7f2b82ee234ffb496c7144a4daaa90a0f563c379)), closes [P21-854](https://bloobirds.atlassian.net/browse/P21-854)
- **full sales:** Block access to emagister to sales button. ([b354705](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/b354705f48d0eb13bc0c9f5da50eced44f87a643))
- **full sales:** Get tasks when you come to opportunity page from company page ([5e31cef](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/5e31cef92984c2426d0f8507fd059edba52623c6))
- **integrationsUI:** [[P21-675](https://bloobirds.atlassian.net/browse/P21-675)]: changed logic roles for ids ([07190ed](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/07190ed9ba72752434f90da743a8e77f250e42b8))
- **webapp:** [P21-657](https://bloobirds.atlassian.net/browse/P21-657) When we click in the note button, the activity type should be note by default ([f10872b](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/f10872bad33ae4c834ac1666ef1f0d131625926c))
- **webapp:** [P21-806](https://bloobirds.atlassian.net/browse/P21-806) When clicking on a company name on a list the page crashes ([95af913](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/95af9131a475f3dfe7a7385680dd9942c6af8ffd))
- **webapp:** able to complete tasks ([3f22766](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/3f22766d1955a7fbba68b2d6be4f80ec543889e4))
- **webapp:** actions permissions ([3b5a4f8](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/3b5a4f86262db66fe52104e41b6de9a5b6746fa1)), closes [P21-493](https://bloobirds.atlassian.net/browse/P21-493)
- **webapp:** added the page titles ([01dbadf](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/01dbadf973dc05c5d8305447dc7b5b38c81468c2))
- **webapp:** added the subscription for the company card ([0b868c8](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/0b868c845c25fba687b39a915f626bb4ecd17691)), closes [P21-500](https://bloobirds.atlassian.net/browse/P21-500)
- **webapp:** complete tasks at the nav bar ([1d33c9a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/1d33c9acdcd921d73c7455dbb54636422b95182f)), closes [P21-854](https://bloobirds.atlassian.net/browse/P21-854)
- **webapp:** message related with selected opp ([3704251](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/37042510d1383160b3a59573b72538524892f8fa))
- **webapp:** remove error ([03b73fc](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/03b73fceca7e10a29303bc6b6a07a960691972d5))
- **webapp:** When edit a Cadence after call the network call is incorrect (Change company for Opportunity) ([7f1694a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/7f1694aa92f11d9d3bb11a77422a8bbe19f857ba))
- make bobject form use new confirm delete modal ([e388340](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e3883400c2e17d1561dc463f32e68900cf901bdd))
- non-required empty values should not be validated ([c8c932d](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/c8c932d84c07f574359d73bd514b3c0de103172b))
- reposition date picker on activity list section ([a728b22](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/a728b226a54b0657c0b66ef100908e924ddaaefb)), closes [P21-768](https://bloobirds.atlassian.net/browse/P21-768)
- reset activity filters on company change ([b65301f](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/b65301fb29b8f2a1266be1fa6910189e035cf3be))
- reset bobject on close ([4f448e9](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/4f448e9f68277681126009938c3ad4ee7ef449e2))
- split old bobject form into additional and default values ([dcfa1c4](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/dcfa1c4326608701963a2214fe0dd65378f81a35))
- typo in hasPermission variable ([bace654](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/bace654141c06408e744b6229793cbcce27ce454))
- valid validation should true ([3768f24](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/3768f2411a433ab13144a9d54eea88cdf6fb8fb5))
- validate form logic ([f1c614c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/f1c614c3cbb072cff469cef5297e229b3650ce27))
- validation and disabling logic ([404234d](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/404234d05cf29b1c5a1e2117de851e46735c39ea))
- **webapp:** [P21-822](https://bloobirds.atlassian.net/browse/P21-822) When Delete a Lead without company, doesn't redirect to leads list ([5872cd4](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/5872cd43de61a5fafd0dd124641afac24d1c680e))
- **webapp:** [P21-825](https://bloobirds.atlassian.net/browse/P21-825) If you click on a lead bobject form it crashes with leads ([fda1dbb](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/fda1dbb250b9bc710a3741834e883a798d1be87f))
- **webapp:** 404 page not appears ([ea8bb0b](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/ea8bb0b36deaee118baacabaddb6dccec7f8d8fc))
- **webapp:** after 404 page, the company page not loaded ([6c1ee95](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/6c1ee95c01ca118dab940bd108af3bc25066ca7d))
- **webapp:** disable the dropdown when there are no opportunities ([592e49c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/592e49caa2f956f2895c9ab5d2e1b8fbdb82772f)), closes [P21-195](https://bloobirds.atlassian.net/browse/P21-195)
- **webapp:** do not unmount the company card if the updated company is the same ([5d125fe](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/5d125feaa3c8c44371b257857489e6924fbc497e)), closes [P21-653](https://bloobirds.atlassian.net/browse/P21-653)
- **webapp:** fix add a new query params when we open the call result modal ([817bb45](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/817bb45a5df84b8c4db2f91c05f0047b12a8f41d))
- **webapp:** fix contact ([8f90bc7](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/8f90bc71bac19f7969840c8ca79cf54471ee3597))
- **webapp:** fix error after the merge ([4ee2134](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/4ee21343d7a90e4bafe810491bf957c2d259f46f))
- **webapp:** fixed the bobject details for the opportunities without companies ([6ecee4a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/6ecee4a1a4d86fb3b7dcd406241e1875089493e8)), closes [P21-656](https://bloobirds.atlassian.net/browse/P21-656)
- **webapp:** improvements ([afe0027](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/afe00278e89bd2464c4846e8a5945df21914f278))
- **webapp:** in Lead without company page, the navigation bar is not updated ([8209c95](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/8209c952c75cf16cc530f67c9f3a432e51f9dbcd))
- **webapp:** in the page of Lead without company, the info card never loads ([c816263](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/c816263b8395f2490e7b429fdf5e9b6d924780ea))
- **webapp:** opportunity page ([eba32dd](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/eba32dd9ec0b43ffa8571578308460ce985ca5d2))
- **webapp:** rename subscription variable ([4c87fcb](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/4c87fcbaa5bf494571e23161b4244ded8cc5fb99))
- closed by default ([948c034](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/948c034eaef02e99662849fc0a5cda80fb31041d))
- half margin between list and filter ([97bff2c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/97bff2ccdf6c73c5f5363595abc15c2067978ed0))
- inline bobject form mode temporarily ([730c8fd](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/730c8fdfc5db6fe05b0ece3c5cb46fbd6c95d096))
- missing export ([3ad4788](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/3ad47885580ce1b6e3484b7610af0977d2040f5a))
- **next step:** fix show all completed tasks for today for next step ([3216b3d](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/3216b3d06b38c122ba97cd0506bde428580085ab))
- **webapp:** adding the referenced bobjects to the opportunities ([6a44922](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/6a44922418f63352d166dfc09c93eb34142e450c)), closes [P21-409](https://bloobirds.atlassian.net/browse/P21-409)
- **webapp:** close the actions dropdown when clicking on an item ([a5848d7](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/a5848d727b98931e83eef436610ffabd37028893))
- **webapp:** corrupted activities without date are making the app crash ([c57672e](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/c57672e02ae3e6811209cc83c8d383ab7b3c2dd1)), closes [P21-642](https://bloobirds.atlassian.net/browse/P21-642)
- **webapp:** do not use the first value of a picklist as the default value on fields with a starting field. ([99c1c1f](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/99c1c1fe5225becdad342c3d97bdb5f0581e4770)), closes [P21-452](https://bloobirds.atlassian.net/browse/P21-452)
- **webapp:** do not use the first value of a picklist as the default value on fields with a starting field. ([7a0e792](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/7a0e79249069729fbd78c4fc6e9ff99ef6619c6c)), closes [P21-452](https://bloobirds.atlassian.net/browse/P21-452)
- **webapp:** Environment removed. ([b3b1c3f](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/b3b1c3f99d4187bcbfabd95c23d21e00991a43ad))
- **webapp:** fix the logic role name ([9f78f26](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/9f78f262d232a11c37ed3d778099b999bd62049e))
- **webapp:** fixed the bug where opportunities without name where crashing the lists ([598fa81](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/598fa819a0e8db235c833f3518941887910efb70)), closes [P21-448](https://bloobirds.atlassian.net/browse/P21-448)
- **webapp:** fixed the bug where opportunities without name where crashing the lists ([92c64e0](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/92c64e00a9666f785526d847d08890783df05535)), closes [P21-448](https://bloobirds.atlassian.net/browse/P21-448)
- **webapp:** fixed the new lead form inside the opportunity ([ae32880](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/ae32880c8be5e305439967825ed1aaa3830a73f0)), closes [P21-196](https://bloobirds.atlassian.net/browse/P21-196) [P21-197](https://bloobirds.atlassian.net/browse/P21-197) [P21-431](https://bloobirds.atlassian.net/browse/P21-431)
- **webapp:** fixed the reschedule cadence. ([35b53b1](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/35b53b1c1c61d9c09283dc8bdaf5adc36b31cf3c)), closes [P21-641](https://bloobirds.atlassian.net/browse/P21-641)
- **webapp:** fixed the styles of the selected status ([ee3a80d](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/ee3a80d387c2737eb3eedfac7885e8a9d1533269)), closes [P21-502](https://bloobirds.atlassian.net/browse/P21-502)
- **webapp:** Fixed typos Can not for Cannot. ([46455e3](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/46455e3243258ef099d5ab361acf6789763aac50)), closes [P21-245](https://bloobirds.atlassian.net/browse/P21-245)
- **webapp:** hidden the opp button on the opp pages. ([2bbe682](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/2bbe682e665c4b64f2bedc0168d3d4b95442d805)), closes [P21-493](https://bloobirds.atlassian.net/browse/P21-493)
- **webapp:** hidden the opp button on the opp pages. ([36bf857](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/36bf8578cd80e196c371ca55241c672492b7dbcc)), closes [P21-493](https://bloobirds.atlassian.net/browse/P21-493)
- **webapp:** lead list styles ([e30ad2b](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e30ad2b7681b50fdd5aeb9f1dd72c841e9101e5e)), closes [P21-195](https://bloobirds.atlassian.net/browse/P21-195)
- **webapp:** left aligned opp dropdown ([468a147](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/468a147dfc79321da5e9a53f7740f21a3ee867c3)), closes [P21-488](https://bloobirds.atlassian.net/browse/P21-488)
- **webapp:** now the card does not crash if there is no status ([6151f89](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/6151f899247add5e6ab7511c2c5a8a885ee6c39b)), closes [P21-438](https://bloobirds.atlassian.net/browse/P21-438)
- **webapp:** opening the bobject details and fixing the permissions ([717a9db](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/717a9db4dd648366eca1712cb9d1ba2e72ce3d35)), closes [P21-432](https://bloobirds.atlassian.net/browse/P21-432)
- **webapp:** opening the bobject details and fixing the permissions ([b959374](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/b959374e882159e996fc4af2e64e646806698f50)), closes [P21-432](https://bloobirds.atlassian.net/browse/P21-432)
- **webapp:** opening the bobject details and fixing the permissions ([e5dec88](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e5dec88ea0063671ea1f5f6b16ec01f4831925b2)), closes [P21-432](https://bloobirds.atlassian.net/browse/P21-432)
- **webapp:** sometimes there are not referenced fields ([48aae9b](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/48aae9b4dae42926c05c553134795da6193d74a4))
- **webapp:** the cadence reschedule modal has the current date as default ([710e8cc](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/710e8cc2e6f82056c68a96abe266c84be6c02f93)), closes [P21-774](https://bloobirds.atlassian.net/browse/P21-774)
- **webapp:** the opprtunity select contains lead and not opportunities ([9a15d5a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/9a15d5a45a5f3c536cc6a88d7642df5c89241c9b))
- **webapp:** upgrade the components library version to fix the error with the inputs and its placeholder ([9d9fe23](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/9d9fe23aac82f380c2f0fc0d089a2d7ff68ec3e2))
- **webapp:** when changing the company param id some parts where not properly updated ([adc2122](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/adc2122997e853e5c5a138b7232e19c11bec5938)), closes [P21-643](https://bloobirds.atlassian.net/browse/P21-643)
- incorrect import for test ([6857cae](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/6857caef66c823cdd4e1ac8d794c4bc1a94febe0))
- inject bobject reference ([39cfda5](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/39cfda5a5301d2defd50ac3b54a65b58c52e7da8))
- margins and dashed line logic ([ea1f048](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/ea1f04841674b0e9af1f83ab738606859d031e6b))
- redirect function incorrectly called ([b1a9484](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/b1a94842ac92329919e96466917ab85f0c42d598))
- **webapp:** refactored the useHasBobjectPermissions to an actual hook ([5686ece](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/5686eceec26377850ad6f42baac6eebd2e0bfbe0)), closes [P21-495](https://bloobirds.atlassian.net/browse/P21-495)
- **webapp:** remove console.debug ([487ab64](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/487ab6412cdd82872a18c5d764eda35021472a31))
- **webapp:** remove hardcode value for highPriority field ([f21f7b2](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/f21f7b2a85453a81b456575bc6ca44f5e2404342))
- **webapp:** Removed final space. ([e1a9633](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e1a9633baea4409e8ab28384e07b46e719254f64)), closes [P21-245](https://bloobirds.atlassian.net/browse/P21-245)
- **webapp:** when opening the dialer the active tab changes to messaging ([baa839f](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/baa839f7044d8c0110022fb1dd30c4261eb6284c)), closes [P21-775](https://bloobirds.atlassian.net/browse/P21-775)
- **webapp:** wider bobject name ([d26cc35](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/d26cc350dc4ad2085e4140f5bb7c2b4d16b9c588))
- **webapp:** xstate does not allow boolean algebra on the conditions ([dce2956](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/dce295654d77bded23d922a999f6d0941e81babe)), closes [P21-386](https://bloobirds.atlassian.net/browse/P21-386) [P21-388](https://bloobirds.atlassian.net/browse/P21-388) [P21-389](https://bloobirds.atlassian.net/browse/P21-389) [P21-391](https://bloobirds.atlassian.net/browse/P21-391) [P21-401](https://bloobirds.atlassian.net/browse/P21-401)
- **ws:** staging ws ([054e85a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/054e85a8e05cae104800cf529d3e1c97ea9dddc8))

### Performance Improvements

- cache bobject form sections in memory ([b162f8d](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/b162f8dbf72bc49a18162d48f0e3eab0ba2e9069)), closes [P21-978](https://bloobirds.atlassian.net/browse/P21-978)
- dont inject references ([20f6d8a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/20f6d8ac0130d18e2839964ceb921bb9c4150a8e))
- extract modals to avoid whole app rerender ([af485dc](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/af485dccb2232dace2e160cf8f8c90a5d1477952))
- memoize date functions ([64a6f2b](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/64a6f2b93f4cb528eb455c91a65b54e94be7ad3c))
- memoize default values ([bb04d8a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/bb04d8a526d114228d734850ebfc794c5fa7439a))
- simpler bobject skeleton ([a6c4f8c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/a6c4f8c00974e609d11dc5fa20b521e04613bf17))
- simplify chunk names ([56da2f6](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/56da2f6fb55ad6bcb33100fe9c579046c1b22724))
- speed up actions by not modifying lockfile ([8b5efe9](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/8b5efe9505bf93c9bb1592ef538787280f54f0e4))
- use webpack defaults as described in their docs ([c77382c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/c77382c073d8ceb6296bc4a1db24e7d425101cb0))
- **webapp:** refactored the actvitiy list ([db11f23](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/db11f238c2243a65191506e1aca8d9d0b8d90330))
- **webapp:** refactored the actvitiy list ([e834e8c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e834e8cac1f7c1bbd24191de531d1e066312eea1))
- **webapp:** the opportunity page can load the opps using the param ([d9e9a8a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/d9e9a8a406377774883029232a9e9340f6c4d00f)), closes [P21-643](https://bloobirds.atlassian.net/browse/P21-643)

### Reverts

- Revert "feat(webapp): in order to use the Bobject Form as a correct contact flow step some changes are made" ([865084d](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/865084dfb34923908ce1d80a1f695324cc3520cc))

## [2.0.0-preprod.5](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.0.0-preprod.4...v2.0.0-preprod.5) (2021-03-26)

### Bug Fixes

- added changing on isStopped conditional ([2e1082d](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/2e1082d0117c221eb2ea2069b0ffa31d96d3bee5))

## [2.0.0-preprod.4](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.0.0-preprod.3...v2.0.0-preprod.4) (2021-03-26)

### Bug Fixes

- **prospect:** List of overdue, show overdues from any type of task ([4ae8dd3](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/4ae8dd3a474c5dabed72f05681534ea6da100c9f))

## [2.0.0-preprod.3](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.0.0-preprod.2...v2.0.0-preprod.3) (2021-03-26)

### Features

- **webapp:** new info icon in prospect page ([f43da75](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/f43da7582aecd6b9fe6c20a36b47ea77065feb56))
- **webapp:** new Prospect/Meetings texts ([60b9cb7](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/60b9cb7349a546d55a9130024a991d5566be295e))
- **webapp:** new Prospect/On cadence texts ([675e724](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/675e7249b37fc8bfcf380ebc7cf2ac2ef1953409))
- **webapp:** new Prospect/Ready to prospect texts ([ef8b8df](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/ef8b8df0ee23911ad81b29f762a1568f505b476c))
- **webapp:** new Prospect/Scheduled texts ([2448ac1](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/2448ac146b8f8898a88a9cbda01e29d824acce53))

## [2.0.0-preprod.2](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v2.0.0-preprod.1...v2.0.0-preprod.2) (2021-03-26)

### Features

- **webapp:** add the new styles and the button ([a88581c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/a88581c101d169b6565cb1c37dcf20e8b5d05f35))
- **webapp:** add the possibility to open the Cadence control in a concrete step ([f57d338](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/f57d33830004a1ad1eac65f9b0a8fb9c1ad5cd99))
- **webapp:** create a new hook to know if a cadence is started ([e0005b3](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e0005b3825a7153f4478b8ed47caac7da2b5226c))
- **webapp:** export the new hook ([7c17acc](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/7c17acc8b3a352761e3748f39a3ce9552f462253))
- **webapp:** use the new hook in the next step ([2c3824e](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/2c3824e075bdcf02464858ef400cebaa9c011cc3))

## [2.0.0-preprod.1](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v1.12.0-preprod.20...v2.0.0-preprod.1) (2021-03-26)

### ⚠ BREAKING CHANGES

- New full sales version

### Bug Fixes

- lead field for tasks ignoring default value ([d14bf1a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/d14bf1a649535ecdef8e27143904d425129f8ac1)), closes [P21-1172](https://bloobirds.atlassian.net/browse/P21-1172)

## [1.12.0-preprod.20](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v1.12.0-preprod.19...v1.12.0-preprod.20) (2021-03-26)

### Bug Fixes

- **webapp:** Notes button is not appearing in the activity tab from companies ([d998060](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/d998060c8472273c02b72caece8258ccd040e97d))

## [1.12.0-preprod.19](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v1.12.0-preprod.18...v1.12.0-preprod.19) (2021-03-26)

### Bug Fixes

- **prospect:** Fix load lists of meeting in subhome when we do a logout and login ([378aec9](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/378aec9231b111572fd51634f97997948c8f0f48))
- **webapp:** The toast text when creating lead / company is backwards ([980fa22](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/980fa22d5dcb8548cf2baf7a98ec7b40f86cab99))

## [1.12.0-preprod.18](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v1.12.0-preprod.17...v1.12.0-preprod.18) (2021-03-25)

### Bug Fixes

- **integrationsUI:** [[P21-675](https://bloobirds.atlassian.net/browse/P21-675)]: changed logic roles for ids ([07190ed](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/07190ed9ba72752434f90da743a8e77f250e42b8))

## [1.12.0-preprod.17](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v1.12.0-preprod.16...v1.12.0-preprod.17) (2021-03-25)

### Features

- **webapp:** the selected task has to be the first one that appears at the task bar ([4c8aaaa](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/4c8aaaabbdafd3ae0bae133f285fb7d391a7b048)), closes [P21-1163](https://bloobirds.atlassian.net/browse/P21-1163) [P21-1122](https://bloobirds.atlassian.net/browse/P21-1122)
- **webapp:** the selected task has to be the first one that appears at the task bar ([9b5b6ef](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/9b5b6ef94ba09c1d07c8f642cd47e2977722044f)), closes [P21-1163](https://bloobirds.atlassian.net/browse/P21-1163) [P21-1122](https://bloobirds.atlassian.net/browse/P21-1122)

## [1.12.0-preprod.16](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v1.12.0-preprod.15...v1.12.0-preprod.16) (2021-03-25)

### Bug Fixes

- live reloading not working for task navigation ([3e6cb60](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/3e6cb6045518f40229f85698793f2bf8b6275324)), closes [P21-1165](https://bloobirds.atlassian.net/browse/P21-1165)

## [1.12.0-preprod.15](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v1.12.0-preprod.14...v1.12.0-preprod.15) (2021-03-25)

### Bug Fixes

- **webapp:** Doesn't appear "contact company" in bobject detail ([567d546](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/567d546b09f65df95c33043263dd7f1b127cc439))

## [1.12.0-preprod.14](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v1.12.0-preprod.13...v1.12.0-preprod.14) (2021-03-25)

### Bug Fixes

- **contact:** Add new list, for scheduled tasks in company view ([e675dd6](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e675dd696fd2d7915c55faf05bd804116431810d))

## [1.12.0-preprod.13](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v1.12.0-preprod.12...v1.12.0-preprod.13) (2021-03-25)

### Features

- **webapp:** add some data attributes ([a99129f](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/a99129fe37d36fded6ccb78d02db2e065e8e4a8f))
- **webapp:** update components library ([ffb11a5](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/ffb11a586351b6d8190b0b2f2f4ccf98cc8809e7))
- **webapp:** update data test ([ae1239d](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/ae1239dfde729de22618d19f7aea0928c3910838))

## [1.12.0-preprod.12](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v1.12.0-preprod.11...v1.12.0-preprod.12) (2021-03-25)

### Bug Fixes

- open task outside company/opp view ([b824a03](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/b824a0385810c16395ea2ae8eb284dd4a60606a0)), closes [P21-1156](https://bloobirds.atlassian.net/browse/P21-1156)

## [1.12.0-preprod.11](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v1.12.0-preprod.10...v1.12.0-preprod.11) (2021-03-25)

### Bug Fixes

- **webapp:** remove console ([3364ea2](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/3364ea2d9a89668e80950302aa6e53cf58ef286c))
- **webapp:** resolve fix ([00795eb](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/00795eb4b2a071d7a443abecd7e3337eae13c296))

## [1.12.0-preprod.10](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v1.12.0-preprod.9...v1.12.0-preprod.10) (2021-03-24)

### Bug Fixes

- **webapp:** The session is started by pressing the show password button ([baa6ae3](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/baa6ae33d5cacb896078cd1567afebc5abff643e))

## [1.12.0-preprod.9](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v1.12.0-preprod.8...v1.12.0-preprod.9) (2021-03-24)

### Bug Fixes

- **cadence:** Cadence is stopped when has not prospect task ([73fde14](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/73fde14b06aef602ad4049cf2aace5c1c99e6c46))
- **webapp:** [P21-1145](https://bloobirds.atlassian.net/browse/P21-1145) Closing and opening the modal cadence within an opportunity shows you that there is no cadence in progress ([08c9a81](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/08c9a8137047cd8b59fa9c8d9115b2e0bd87b15e))

## [1.12.0-preprod.8](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v1.12.0-preprod.7...v1.12.0-preprod.8) (2021-03-24)

### Bug Fixes

- **add qc:** Fix query in filters in leads without qc ([32c6e7e](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/32c6e7e38970e7762d82d19c61389bcb2630d3d6))

## [1.12.0-preprod.7](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v1.12.0-preprod.6...v1.12.0-preprod.7) (2021-03-24)

### Bug Fixes

- **webapp:** [P21-1146](https://bloobirds.atlassian.net/browse/P21-1146) Redirecting is not working in the notifications ([f8a5c86](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/f8a5c86abbed66326dfccd0ac7d3990f945bd8a4))

## [1.12.0-preprod.6](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v1.12.0-preprod.5...v1.12.0-preprod.6) (2021-03-24)

### Features

- **webapp:** [P21-1121](https://bloobirds.atlassian.net/browse/P21-1121) when a company doesn't have a default cadence shows a button to configure the cadence ([249bec0](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/249bec08dc02bf45d156df19e7e8b7f1773873dc))

### Bug Fixes

- **webapp:** Change filter of the tab "Full list of companies" so that it also shows companies with the status "contacted" and "engaged". ([214242a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/214242abac79a8dec68a9809f14dbb7490a5a60c))
- **webapp:** default cadence not working ([936416e](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/936416e108a1684d0c03ebbe30805abcfa5a90c6))
- **webapp:** fix ([475665c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/475665cb1d12ce76621ed14f3916fa2a7e094f80))

## [1.12.0-preprod.5](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v1.12.0-preprod.4...v1.12.0-preprod.5) (2021-03-22)

### Features

- **data attributes:** Added data attributes on several components ([cb2ff42](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/cb2ff42547e9818ddb46641adfc8f0c6c6b41b22))
- **data attributes:** Added data attributes on several components ([37c7d6c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/37c7d6c658113ef20929ce1d688b11d990afd511))
- **Data Attributes:** add the dataTest attribute on several components & button substitution ([a2f47ef](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/a2f47efab2a8adba5d2077687afc9056553cc8cd))
- **Data Attributes:** add the dataTest attribute on several components & changed multioption select to BB component ([5860db8](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/5860db8455c802c95d01579b9316f15e860f6402))
- **Data Attributes:** add the dataTest attribute on several components & changed multioption select to BB component ([de8c2b1](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/de8c2b15a98a581653e1ef3f468a013928880b84))
- **Data Attributes:** data attributes for the opportunity cadence control ([0edc99d](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/0edc99d7c9011a5e6539acd6a3291576a3ae5aad))
- **filter input:** changed the MUI text input component for the BB one in the filter modal ([a7615b0](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/a7615b0e1b0b8f3ca06fb9ce0391fd06f88fa0e1))
- **filter input:** changed the MUI text input component for the BB one in the filter modal ([6222009](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/622200947d24a250c7d917313b8c0a6b66f5c084))
- **Multi-Select component:** changed multioption select to BB component ([e872bc2](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e872bc213ce6792de0fb6b3ade50880b39bc6354))
- **webapp:** WIP ([94badbe](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/94badbe5f133f665e79d50367cffa8c80ebdb8ce))

### Bug Fixes

- component library version mismatch in yarn.lock ([2d71574](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/2d71574b19be1bcea5e105dec9557a4070d30f54))
- **calendar filter:** changed the MUI calendar input component for the BB one in the filter modal ([e189262](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e189262a5231808a6b062e3c16f39fb484815ae4))
- **calendar filter:** changed the MUI calendar input component for the BB one in the filter modal ([8d63212](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/8d63212dc9ff3bc6849479397564ec9309207edc))
- **company view:** remove console debug ([c5f07e3](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/c5f07e3a90900f8c073d6556f8ce166c931d4c19))
- **company view:** Reset activeCompany in add leads task ([508afbc](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/508afbc8098358e00aa7376c8e39c00ba795d1bf))
- **lint issues:** Fixed Lint issues ([efaf5b8](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/efaf5b802e074eefb0c9f8477e6d1cbeeb531fb2))
- **webapp:** [P21-1101](https://bloobirds.atlassian.net/browse/P21-1101) Save button in the Cadence ([9c77c2f](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/9c77c2f45cadc6d42eda37d82ff156a42d5dde26))
- **webapp:** [P21-1108](https://bloobirds.atlassian.net/browse/P21-1108) In the Cadence control modal, when starting the cadence the date is not correct ([2480592](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/24805926780b395cc4fac8d8f89850a2c2b06eb8))
- **webapp:** Live reloading is not working in the "mark as done" button from the tasks ([f0fb82c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/f0fb82c95efd94c2b451a216c1cc793fbc7c0758))
- **webapp:** remove console and revert a code removed ([a23fbfd](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/a23fbfdebc1a3a97f0173c81a2f8040e30fd0bd3))
- **webapp:** remove console.log ([bb37fe4](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/bb37fe455028e7729d8a97098f8848ff470e5a9e))
- calendar being squeezed by large meeting title ([7133f1c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/7133f1cd9993566e9b52dced49e56a7b505549db)), closes [P21-1119](https://bloobirds.atlassian.net/browse/P21-1119)
- configure cadence modal accept disabled conditions ([ac0a83a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/ac0a83a6a23d71931de919af3be982b3e8ba0c2b)), closes [P21-1111](https://bloobirds.atlassian.net/browse/P21-1111)
- number field should only accept numbers ([afd474a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/afd474a2287325335bb988efaa8d768b276d2610))
- number fields decimal max ([0a47ed0](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/0a47ed0c9fa5d6706b4cd8f439ef3f2ce8436ae4)), closes [P21-960](https://bloobirds.atlassian.net/browse/P21-960)

## [1.12.0-preprod.4](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v1.12.0-preprod.3...v1.12.0-preprod.4) (2021-03-18)

### Bug Fixes

- dropdown closing randomly ([2ff312c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/2ff312c48f53be93a579b6b2d6f03f9eb66e48d9)), closes [P21-1077](https://bloobirds.atlassian.net/browse/P21-1077)
- **scheduled:** Fixed create next step tasks ([8d8c5c5](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/8d8c5c5b8aed1e9beed878ae5939500e7e1fa034))
- **webapp:** calendar queries ([33d95fa](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/33d95fa25cf932c3c5427e73c9161750bdfe841e))
- **webapp:** change icon ([6d7579c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/6d7579c82bc8c76933ada5f1423562aa1dedf7cf))
- **webapp:** fix feed queries ([18a983e](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/18a983ed440db9948dbaf2d2b46580b57bb0995f))
- **webapp:** Mark as done is not working in the task bar ([8cb0edb](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/8cb0edb18ed00b0fc406a9c5e8f7ac2ee2259599))
- **webapp:** Opening the cadence modal 2 times in a row, the cadence disappears from the modal ([878dd3f](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/878dd3f88794ad072e253062410c5051208d21ff))
- **webapp:** Scheduled task are been created without date ([b6b42af](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/b6b42af95e23685cafc0bcf7b32f119462d1b052))

## [1.12.0-preprod.3](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v1.12.0-preprod.2...v1.12.0-preprod.3) (2021-03-16)

### Features

- **full sales:** default cadence opportunity ([efa6fa1](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/efa6fa1d833ab383d503a0fc5ef4c23675d68197))
- **full sales:** When you change the cadence, it action change also the status of the company ([947f9b2](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/947f9b2c59110e388ebbb4053ef6df5b5f33bbd9)), closes [P21-1000](https://bloobirds.atlassian.net/browse/P21-1000)
- **webapp:** add active user as param in showList ([dc8a4ea](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/dc8a4ea9499ca605e9aa4d5bffb3e5907ac71735))
- **webapp:** add useTaskNavigation to hooks index file ([5ba7269](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/5ba7269a55246f267ddbd95d6ed9f87e8f25081c))
- **webapp:** change the text ([998c521](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/998c52171de021a9ddf83338cc6f8f1d6ff807ab))
- **webapp:** copy the prospect filters in layout folder ([468e91a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/468e91ada45050ef70c2dd8af3af2ac4f284a7b5))
- **webapp:** copy the prospect filters inside the layout ([b8a5a57](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/b8a5a573a7595277a93b708f5abacecf5065414e))
- **webapp:** fixes, rename and new onCadence query ([e8cf089](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e8cf089dce69b5396be482470fef0815ef5442dd))
- **webapp:** move the InfoComponent to the layout folder ([41e616e](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/41e616e575e382254f165a436af1384b5c1f47da))
- **webapp:** onCadence tab component ([32c5f27](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/32c5f27aeef34f308c32886616b6c09ef447cd99))
- **webapp:** queries ([9f3110a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/9f3110aac5b2629b00c7784976878d3266d8b6e5))
- **webapp:** remove unused file ([1d91502](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/1d91502769543a27b09ba631355532b44edc134e))
- **webapp:** rename the contant variable ([3b50aba](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/3b50abaf51c23c5907276a067239ad7a5d0cd7bb))
- **webapp:** scheduled tab for Sales page ([765dba6](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/765dba60d9dd95cdd66f56cd4ad3464023415e38))

### Bug Fixes

- add support for non-existing fieldValues ([faf1c9c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/faf1c9c7a60c7333a77cdb2ab5b9ae4481d4cf7f))
- avoid default value overriding the field value ([7a4be97](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/7a4be97f187292e4d94bed88b0923e33068510ae)), closes [P21-1057](https://bloobirds.atlassian.net/browse/P21-1057)
- avoid selecting automatically if bobject form field does not have conditions ([4d002cd](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/4d002cdaf01a5396cd1e528835925fff8354d464)), closes [P21-1048](https://bloobirds.atlassian.net/browse/P21-1048)
- font display field if empty ([5cc63bc](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/5cc63bca942cb42bfb746e8f20a05b2c714cf9ae)), closes [P21-1049](https://bloobirds.atlassian.net/browse/P21-1049)
- new prospect tab names ([56c3feb](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/56c3feb460c600e31937f0a846c1c899e96c081d))
- solve icon styles issues derived of mui-icons refactor ([aab8e57](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/aab8e578c20de6e708edce3505e1d933a9164ec0))
- task card suffix ([06a072f](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/06a072f37dbc4c3a49f789592e2b9c87ad0844b5))
- **full sales:** fix save cadence in useCadenceControl.js ([a63d206](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/a63d206c1c3adcbda037bf33fe5870fbdaded616))
- **full sales:** remove debugger. ([fad68a3](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/fad68a3f472e62678bcc5e1600c4df80e4c4013f))
- **webapp:** [P21-993](https://bloobirds.atlassian.net/browse/P21-993) Task for today appear without data ([76bc4a3](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/76bc4a3dce4bb7c6a1c5c0ec90714f62e66dc932))

## [1.12.0-preprod.2](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v1.12.0-preprod.1...v1.12.0-preprod.2) (2021-03-15)

### Bug Fixes

- **ws:** staging ws ([054e85a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/054e85a8e05cae104800cf529d3e1c97ea9dddc8))

## [1.12.0-preprod.1](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v1.11.0...v1.12.0-preprod.1) (2021-03-12)

### Features

- activities placeholder skeleton ([f98eb20](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/f98eb20b402ac45dce6ac69e5be87494dd217d09))
- add support for dataTest attributes ([57dae7f](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/57dae7f68131777b0afd87fd22d7e29b88ad7160))
- use sentry react router integration ([cfabaa5](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/cfabaa55c5e57f370547941d2c769bb8166805b8))
- **Data Attributes:** add the dataTest attribute on several components ([e011cbe](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e011cbee78c6a6de26df34019e4e0c9fa2b05209))
- **Data Attributes:** add the dataTest attribute on several components ([8dfc95b](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/8dfc95bafd90a8372d23e7997325ef28daabd8ea))
- **Data Attributes:** add the dataTest attribute on several components ([0bb3467](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/0bb34675c387505ee752428d87a6d6e064c974b1))
- **Data Attributes:** add the dataTest attribute on several components ([2ba0917](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/2ba0917bf2541bc645cbcc16413e8deadc0d7f5e))
- **full sales:** In company view cadence table not show tasks of opportunities ([13abef8](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/13abef8ef397c13ba71c333c6c7f8dcb659d5375))
- **full sales:** In opportunity view, show OPP.STATUS ([7828128](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/7828128ef2ac1d3aaae2cdd70b6904ffa5f8cde7))
- **full sales:** removed debuggers, remove qc. status or opp status when it should not show. And other improvements ([4982bc3](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/4982bc3cc90bb29eb05cd0b60d8d5edbb295c8ef))
- **full sales:** save debuggers ([84900f0](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/84900f03d251ce6c64844341997c6b6125d966f2))
- **webapp:** A single opportunity I want to CREATE A NEXT STEP task related to it ([3061827](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/3061827c7c30d1389319156541fba7154fea9878))
- **webapp:** [P21-555](https://bloobirds.atlassian.net/browse/P21-555) Open the cadence control modal after edit an opportunity ([251c76c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/251c76c20efc630c919e445e9fff057cda67ff17))
- **webapp:** [P21-556](https://bloobirds.atlassian.net/browse/P21-556) Change title of cadence block to 'Sales cadence' ([7d3904c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/7d3904cdbb41c99964b990091849821b499b4501))
- **webapp:** add default cadence for opp ([534c064](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/534c06428e5aa9dfb1cad96c83fee6427bf3e659))
- **webapp:** Reorder and rename the tabs inside the prospect and sales tab ([ba7c938](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/ba7c9386e1c0ebac17db26393a38b6354cbe3a76))
- add a "none" option to dropdown field ([203e5d8](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/203e5d8770ae1dedc6ef1500b17bfc9f994f798a))
- add phone prefix to phone field ([84f14d4](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/84f14d4a6611c1eeb3faf131e85906b70d452ca1)), closes [P21-1014](https://bloobirds.atlassian.net/browse/P21-1014)
- **Data Attributes:** add the dataTest attribute on several components ([f8a13c1](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/f8a13c1d76be129adfeedf09fab159140ac6f229))
- **webapp:** [P21-929](https://bloobirds.atlassian.net/browse/P21-929) [Opportunity view] Error in opportunity name in task table. ([d4bd450](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/d4bd45024daa792b1d3c52be651fad5073b98b64))
- **webapp:** changes in NextStep to use the view to stop the cadence ([4f4abad](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/4f4abad12d8b641731a061978fa488b66031184d))
- **webapp:** create task for company and for Opportunity ([967a6cb](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/967a6cb8b75a0cf89d94919dba1901a5d8ce6d10))
- **webapp:** error default date ([e10f4f7](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e10f4f7d153514db87d530dc268f416151909d69))
- **webapp:** fixes ([463ef24](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/463ef24290a0231929dab1553cf69a2d2398a80b))
- **webapp:** remove square for Cadence preview ([faf5045](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/faf5045835d83119fdb90d485c8bca6ae54295f5))
- activity item header ([cdc1876](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/cdc1876b26bb4b1eb79c2a8a0049c09f6536ebe6))
- add ability to deselect chip groups ([71116e1](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/71116e1c8d05e02cf6974712f0c5ebd14340eec6))
- recoil value cannot be a function for bobject form onSuccess callback ([29e724d](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/29e724dc08595f5af90514c14aafb0874beaaa77)), closes [P21-973](https://bloobirds.atlassian.net/browse/P21-973)
- simpler bobject form skeleton ([c59d31c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/c59d31c0bbf8063b72b3f0992d6c96234abe047e))
- **Data Attributes:** add the dataTest attribute on several components ([86ef59e](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/86ef59ebeac20ab4e60ae8fab13692e341e0c788))
- **webapp:** [P21-806](https://bloobirds.atlassian.net/browse/P21-806) When clicking on a company name on a list the page crashes ([8edfe5e](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/8edfe5e95f6d4182ba8d29a6729f455ea49d5f9b))
- **webapp:** add data to stop cadence step ([0d00c30](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/0d00c30b1bd21a9157b032775e9aa27ac8e81399))
- **webapp:** add the Cadences list in useEntity ([d6ddce9](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/d6ddce9141ac3a5e9d6ecf6228210e2a4d6589e4))
- **webapp:** added the filters and sorts to the navigation. ([b81427c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/b81427c4fbe67fa800618dcb54d12cae709f7c80)), closes [P21-854](https://bloobirds.atlassian.net/browse/P21-854)
- **webapp:** create a new hook to cached the cadence by target market ([f37c3fd](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/f37c3fdf84ca734a9bef5c7ffad6c00a0800c8a8))
- **webapp:** eslint error ([14287da](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/14287dad261440ab170ccf018b9def9e41a2fdb8))
- **webapp:** fix a bug in useTargetMarket ([820a987](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/820a9878ebb96b7bef5dc925dcbc08166766218c))
- **webapp:** Hide the alert when the user changes the cadence ([a6103bc](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/a6103bc4c2499a641717ac5ad08e7c2e4acfe9ee))
- **webapp:** hide the first radio button when we open the Cadence Control modal clicking in Cadence name ([05398b9](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/05398b958bcc737b8d8e5336fc3e2c84b0b3a61a))
- **webapp:** improve code ([fb8b2ab](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/fb8b2ab85439fd9426d3e71a9ea3550bdd2b031c))
- **webapp:** improve the code and fixes some bugs in Cadence Control modal ([ad42fb2](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/ad42fb2211bfe180fab871166a687c9a623abe0b))
- **webapp:** index ([a020b49](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/a020b4952ef6b2714cf261b2ae690d07ba920b0d))
- **webapp:** log activity in Opportunity page ([713389b](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/713389bb8659736d0519586eb1c1b6b95ee7929a))
- **webapp:** only save the new status when the bobject is Company ([2dc0090](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/2dc009021fbe98f046ec54abee969b9bb50be751))
- **webapp:** open the Cadence Control after opens the Create opportunity ([f87c25d](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/f87c25d7dcd152adac44001461b4b9e11e3e2fb2))
- **webapp:** read of useEntity the cadence list ([a4143c8](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/a4143c83995da1799f118d11890c2d8146ffa9b2))
- **webapp:** remane CompanyName component and the Opp name in task Card ([50f60f5](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/50f60f55f8b24b51de69d7740054049ca330cfef))
- **webapp:** remove lint error ([85ffc16](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/85ffc16a43333725867deb917d03276b50867a9b))
- **webapp:** show anything radio only when is need it ([10a4636](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/10a4636b0491c7a2ecb1d725012021a70a372df3))
- add way to hook into bobject form lifecycle ([7fc8b4a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/7fc8b4a4d778237a78745880297d6e052c155981)), closes [P21-852](https://bloobirds.atlassian.net/browse/P21-852)
- **webapp:** remove unused param ([e87a509](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e87a50995bcaea3009969ed0a598fc92f2af935f))
- on success callback atom ([1293c67](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/1293c673fee6f2546d0b7577fa02542cf6df53a9))
- open toast after bobject update or creation ([e99636e](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e99636e0383aa29664b5352c7e699e7fab4fc8a6)), closes [P21-839](https://bloobirds.atlassian.net/browse/P21-839)
- update add to calendar modal styles ([235dd4f](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/235dd4fa960eeee75d4ce77350e6f77aa11ce311)), closes [P21-887](https://bloobirds.atlassian.net/browse/P21-887)
- **webapp:** method to stop the cadence ([3462dc4](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/3462dc41408f865b869aebc87e1069356d2dd2f1))
- **webapp:** open the Cadence Control modal in a concrete step ([41d9e43](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/41d9e435e3740fa9371ca1b7f60521bdbdc69877))
- **webapp:** remove StopCadence view and add the functionality in NextStep view ([27271e4](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/27271e49a5e0c7d5829fd8f673b12226c32f37eb))
- **webapp:** remove unused code ([27d25f4](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/27d25f4391467d877a422f8cdbd7e1c781cba1ca))
- **webapp:** rename useCompany function ([3d832e5](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/3d832e515db809a70f5116a695583e046a61b009))
- **webapp:** save the new cadence ([7f4e345](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/7f4e3454900f40937ae4c293f1270ce51980f349))
- success callback ([5c4a9fa](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/5c4a9fa797bd2bcad0fbc071e1f9b343a0d50faf))
- **Data Attributes:** add the dataTest attribute on several components ([f2dfd8e](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/f2dfd8e4ed7b492b2e0627dfb443adc7da833025))
- **Data Attributes:** add the dataTest attribute on several components ([ad3e7ab](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/ad3e7abcc49e5d42af14af8d054d454028350084))
- **full sales:** Cadence table ([72e9a86](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/72e9a867f2fa8a34170542fc22041878bb9de54b))
- **full sales:** Cadence table ([c7892a0](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/c7892a057f777e1ad511718872a66311e88cac74))
- **webapp:** add CadenceIcon ([d38c0cb](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/d38c0cb9c35746e68c0c47de86874e32fcefa737))
- **webapp:** add functionality in Condfigure step ([131e7ae](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/131e7aeda1a8e2f2529913ce751ad2355942a13b))
- **webapp:** add the company/opportunity in the Cadence Control Modal ([2b85e03](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/2b85e032211be12122370759f268f86d061191e8))
- **webapp:** added the basic task navigation ([6b5b9c0](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/6b5b9c0ba4db221531695392c91b89adb85a914c)), closes [P21-854](https://bloobirds.atlassian.net/browse/P21-854)
- **webapp:** cadence icon ([11683e7](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/11683e7caa76f74bfe76ff2a2cd69c657b9c78da))
- **webapp:** change Table component by custom stylesheet ([fc3870c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/fc3870ce34558e174db9b3b3c7a56af13ded16f0))
- **webapp:** change the flow. Remove the last step ([ad4e13a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/ad4e13afd8cf480cfa5b4b3d5326c5b16375b9f3))
- **webapp:** fill the Select with all possible cadences ([b63869e](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/b63869e5bdf5ce653c64626dccdab789d5bf29dc))
- **webapp:** new Callout version ([c744265](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/c744265983f73132a0835b7b9130002f7ed07720))
- **webapp:** new variables ([5548371](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/5548371d8f781a79e86bff828a268896f5482085))
- **webapp:** open the Create task modal ([fa9a3e2](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/fa9a3e2d4573776c8a0b740cc66d643d468545ae))
- **webapp:** remove console.debug ([d6aed0a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/d6aed0ad2ed344db9c7343d5553a416d1b11eb0b))
- **webapp:** remove unused class ([ca0e694](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/ca0e694fcfb986944d99dbfc2778e5d6b75334ea))
- **webapp:** rename function in useCompany ([0a96e31](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/0a96e31080f05db08611c7cc8679d3118ee960c8))
- **webapp:** reset cadence control info ([00cc28d](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/00cc28d43bda2c48bac3f412b418f7e92fea38b7))
- **webapp:** show the cadence and the start date ([47dfcf6](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/47dfcf6395554bf6101ec38852bfee6a9e2e08b6))
- **webapp:** use useResetRecoilState to reset the atom ([446d440](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/446d44068da9179b0b9d576300a58017d3d7db4d))
- **webapp:** WIP, use the actual lists ([272467e](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/272467ed0daef5eb98d5dd4c17475bd6acdeb066))
- add error to chip group fields ([6724ac2](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/6724ac22e5fbf6ed64605f839b1928e6492f9cc5))
- add loading state to bobject form ([eccc7e0](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/eccc7e0948300baef52497cc85082af6214e7759))
- add support for empty list with default filters ([45a5986](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/45a5986afb86c1a79b0e7158279e9ce8cc1856c3))
- add support for logic roles as field names ([d17d354](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/d17d3542f8dad3aca89e222d7adde80460f44d8b))
- bobject edition ([c365f01](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/c365f0191c4f48a13a65b5df8b329f89c7e1d45b))
- connect bobject form and duplicate validation modal ([1b39e4e](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/1b39e4e950931a6ca4d7dc42b1200c5a66cf7efc))
- create bobject form skeleton ([34836d6](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/34836d642abeb577a56942f02b4a8ffa1d7ce9c4))
- disable buttons while submitting ([64310bf](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/64310bf7c8dda53a04c730b2760413bcf91729c4))
- field value conditions ([2b8f52c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/2b8f52c475c296da731832d7f366574b93203fdf))
- grid styles for bobject form sections ([3627c64](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/3627c64b31345734d69ed10d8f9bba2c26487316))
- improver phone field with more stricter validation ([7c5293a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/7c5293af22b8bfc96846faca77f1858b976629d2))
- make logic role act as value for select-like field items ([b456009](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/b4560096a7b385a5a0c98c1774409d3b397d9f47))
- make picklist fields more robust ([7f83025](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/7f83025374d2dd103e49a599691f332fd94b6ec0))
- new bobject form hooks ([fd31cfc](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/fd31cfc6285b8a9226155ad8196613d7f299534b))
- open calendar logic ([31247f2](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/31247f29ead12b69a0159c396b91e532788ab9db))
- support for default values ([958ebe8](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/958ebe8237de973142436e9ffc4807e25e2ae2a5))
- update confirm delete modal styles ([f38e8ac](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/f38e8acbcec57c34cb95f38c108f655c15d61adc))
- use new confirm delete modal ([d7c62e6](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/d7c62e6a87a4eadfe287062c112bd6dd00cd366b))
- useForm for bobject form ([08ee226](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/08ee226d4b599ce65f5e1eddf54901eb02f946e5))
- **full sales:** Show opportunity activities in opp. view. ([e2dd0aa](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e2dd0aa50eba95ba5e3c0596f004a13a66ffc583))
- **full sales:** Show opportunity next tasks in opp. view. ([8bb779c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/8bb779cf9c468f1b77b4f457a5dcbb8179f365b8))
- **full sales:** Show opportunity tasks in opp. view. ([1ab5b91](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/1ab5b91da2bbc11864aaf8012e6f305f33b5e07a))
- **webapp:** add a new dropdown to the LeadCard to allow assign a lead to QC ([a6cb05b](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/a6cb05bd6a764faf2ef0e6b869fda4057beb9357))
- **webapp:** add next step when close a bobjectForm modal ([dad2c72](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/dad2c7242c1f4fef938c8505cb44e0656df6cb5a))
- **webapp:** add pending functionalities in the Lead without company page. WIP ([a769a62](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/a769a629719869d5f6f3fa3f0c2e810e6738e09b))
- **webapp:** add two new actions in the bobjectForm reducer to set and clear the nextStep ([46e2674](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/46e26743932e2ed6ce4110f637028e481cf7426d))
- **webapp:** cadence control machine ([ff4414f](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/ff4414f894a40badc53e438d286d12742b980cb2))
- **webapp:** create a new hook to manage the Cadence control modal visibility ([536d74c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/536d74cb29093e8b28d6db8e548c75410d9e076c))
- **webapp:** import the Cadence Control Modal ([acac80c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/acac80cbac6572d4ee3875f9e17175746a5c4d88))
- **webapp:** improve the stylesheet in cadence header ([436f1fe](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/436f1fe9cdfd07c1823d29bf4080098db2ff649f))
- **webapp:** mock CadenceControlModal ([02adadd](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/02adaddf336b85c6faaf47b3755c76dc46f7242b))
- **webapp:** move the 'Add QC to Lead' component of the location ([7765565](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/77655657f69da0ca9cbe047dbc0a7ee5c56d8c29))
- **webapp:** move the cadence image to assets folder ([53ba76b](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/53ba76bbbf59a02cf30d3576b16cd4b262ef1597))
- **webapp:** new action to set the next step action in the BobjectForm ([b4d8a53](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/b4d8a53ba85ef66aaee866f37c49fb3a8b67699f))
- **webapp:** remove eslint errors ([c33c575](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/c33c5756a27a6c456f31dd0db4005c192b9c8f24))
- **webapp:** some changes in Update Lead statuses step ([0a66312](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/0a66312717416889ad32cb261627938b5b20376d))
- **webapp:** split the Cadence Control modal in componentes - Configure cadence ([b05d02b](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/b05d02b9dc9c7eaa738028d2e9d0588bdf60245e))
- **webapp:** split the Cadence Control modal in componentes - Next step ([be5c945](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/be5c94505097b5e95adc6df5a409c25be1ce71a0))
- **webapp:** split the Cadence Control modal in componentes - Stop Cadence ([4ffcc22](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/4ffcc22d6f1e4d7c92e5be96197deaac59a31398))
- **webapp:** split the Cadence Control modal in componentes - Update Lead statuses ([209b5ac](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/209b5ac10c7ae52205c342dc59a5c8c9dbb8a82f))
- **webapp:** stylesheet for Cadence control modal ([03ee169](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/03ee169bb29c37dbd3ec6975d0f8fe30e58743ac))
- **webapp:** use the hook to open the Cadence Control Modal ([9b41b36](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/9b41b3691035e7ccd057f7aa22586827630946ea))
- **webapp:** use the new BobjectForm action ([eb1f743](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/eb1f743c54b906787206d21041e86bf4f1f3b36b))
- easy scroll to activity section on cadence item click ([5e7aaa1](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/5e7aaa1c1575d79c6c7595f8c1fc2742323f5fd8))
- infinite scrolling ([2add98f](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/2add98fbc870afcd3e01edef6af022491eab910a)), closes [P21-635](https://bloobirds.atlassian.net/browse/P21-635)
- navigate to activity tab on notification card click ([4a4fc1a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/4a4fc1a9d5abd5291d3d1e6c50a12e827fe9453a))
- skeleton on loading ([339ba50](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/339ba504305e728449df7f282b18465cd472c3f1))
- update company status filter label to update ([f785888](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/f785888786811f7b41b38b3730e4738e170443a7))
- use activity hook with date filter ([8964818](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/89648187ade08550fb1003c6eb66b87cc26f29bd)), closes [P21-631](https://bloobirds.atlassian.net/browse/P21-631)
- **full sales:** Count of sales button, with its own query ([50c8b57](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/50c8b57460f5acbfdad2a0b67d49c6e69660f88e))
- **full sales:** Meeting and Next step tab in prospect page, show tasks overdue ([e011555](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e0115553010df2ef5c8bb89bf410c818238b62a0))
- **full sales:** Open opportunity views ([d75784d](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/d75784d88ab2522bc933ed6d187a93424a9b9b50))
- **full sales:** When delete opp. go to company. ([f29aa08](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/f29aa08b473cc8a695d10c77bdfb0a60d8a9c708))
- **weapp:** add new fields for opportunity ([973a6af](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/973a6af31d0be7332eed49f03d0026793513fdf2))
- **webapp:** -CORRECTED - Counting only returns todays next steps and meetings. ([1da0b23](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/1da0b2311c1d7fdda6b54c24ee702aa5f4331c56)), closes [P21-324](https://bloobirds.atlassian.net/browse/P21-324)
- **webapp:** Access to the oportunity list ([b335b20](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/b335b20f4acdd53a598ee0c8cdc181321b7309be))
- **webapp:** add a field constants ([6300ed5](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/6300ed54bdbd4807696b49a7b50165041e30cb84))
- **webapp:** add a margin to InfoCard component ([bf519dd](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/bf519dd96caca54bd60ee705e666c929e9e3b675))
- **webapp:** add edit company modal ([6d31032](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/6d31032c23f277d5655c548dbd01e3edf6b1b7e9))
- **webapp:** add import button ([ed93783](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/ed937834e95aadcca990497daa71db805c9a83c8))
- **webapp:** add lead action ([c5e92a0](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/c5e92a010b40947599e2e128ceaa74c0bfd4e301))
- **webapp:** add new company constants ([49edfad](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/49edfad067d7d2aff288d42a5109cc593bd1989e))
- **webapp:** Add opportunity button to the header dropdown ([c0e0dcc](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/c0e0dcc48f12ad09ac59aa362f749bfd3c8f14ab)), closes [P21-86](https://bloobirds.atlassian.net/browse/P21-86)
- **webapp:** add search and input elements in the opportunity list ([0be8be8](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/0be8be874994ee8d953a26bc2232f6ca0a071d8c))
- **webapp:** Add the opportunity creation button under the feature flag ([bf89f4c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/bf89f4c0709f062605c6d450c997bd4f46ffff90)), closes [P21-94](https://bloobirds.atlassian.net/browse/P21-94)
- **webapp:** add the target market of the related componay in theopportunity quick info modal ([71bb55c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/71bb55c5a6a98de0d52d62d3f6ccb0baf9e3cfd2))
- **webapp:** added antialiasing to the cadence nonworking days ([1b6e554](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/1b6e554bde720f4db62989e6f986237e5630c0c2)), closes [P21-198](https://bloobirds.atlassian.net/browse/P21-198)
- **webapp:** Added counter for the new tabs on the prospect view. ([d4cb364](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/d4cb36467b4075c3a60ea572ad3d410a65c8be50)), closes [P21-324](https://bloobirds.atlassian.net/browse/P21-324)
- **webapp:** added the add lead button ([adcd3a0](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/adcd3a057438c32e7d8bd24927ad82bf111e4cd0)), closes [P21-198](https://bloobirds.atlassian.net/browse/P21-198)
- **webapp:** added the add lead button ([343949f](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/343949f000b5e75f0778d694f092300a3003ff5e)), closes [P21-198](https://bloobirds.atlassian.net/browse/P21-198)
- **webapp:** added the contact tabs and fixed the open/closed opportunities at the dropdown ([72c95ed](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/72c95ed6389c1cc0b079b0b1812d6266f3c24582)), closes [P21-198](https://bloobirds.atlassian.net/browse/P21-198)
- **webapp:** added the disabled chip at the edit opportunity if there are none ([efac8a4](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/efac8a439940c5cb6df5df4c9febd820631dd282)), closes [P21-443](https://bloobirds.atlassian.net/browse/P21-443)
- **webapp:** added the first tests to the correct contact steps machine ([c71098b](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/c71098b2a73c951eff0b0d16e3a8933e643b94c2)), closes [P21-394](https://bloobirds.atlassian.net/browse/P21-394)
- **webapp:** added the new statuses to the company and lead call results ([b6231ef](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/b6231effeb6781cb4edde7c5c79ecfb19feb5d96)), closes [P21-383](https://bloobirds.atlassian.net/browse/P21-383) [P21-385](https://bloobirds.atlassian.net/browse/P21-385)
- **webapp:** added the opportunity modals on the contact flow ([7213d47](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/7213d4742c17dcebcbf3a02de3ff1e9f48a4c4bc)), closes [P21-386](https://bloobirds.atlassian.net/browse/P21-386) [P21-388](https://bloobirds.atlassian.net/browse/P21-388) [P21-389](https://bloobirds.atlassian.net/browse/P21-389) [P21-391](https://bloobirds.atlassian.net/browse/P21-391) [P21-401](https://bloobirds.atlassian.net/browse/P21-401)
- **webapp:** added the sales subhome tab if the user has the proper permissions ([627d8b6](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/627d8b6596f26be2545cdff387bc3fba2b363103)), closes [P21-376](https://bloobirds.atlassian.net/browse/P21-376)
- **webapp:** added the sales subhome tab if the user has the proper permissions ([11f32ee](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/11f32ee927645e5923750822d2c39e18fd549138)), closes [P21-376](https://bloobirds.atlassian.net/browse/P21-376)
- **webapp:** added the selected lead ([2419a2b](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/2419a2b548eb5c3d35ca31ea2ca6c422b905b4d4))
- **webapp:** added the task skeleton ([0348256](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/034825657d565bbd65f84013ac7fae0d46733c7c))
- **webapp:** added the task skeleton ([fafec83](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/fafec8382e1c044ceee9cb269fd907ad0d842212))
- **webapp:** addeed the active company to the nav bar ([c31a265](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/c31a26542ea19cd786cfd0a8aefd13669fdf8cf9)), closes [P21-204](https://bloobirds.atlassian.net/browse/P21-204) [P21-201](https://bloobirds.atlassian.net/browse/P21-201)
- **webapp:** change the order in the menu list ([55a310a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/55a310a171db007d4f042c2d70e85ef8fb93056b))
- **webapp:** change to the Activity tab when open the dialer ([ee036b7](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/ee036b73b818963f37068fdbb0d00055c1e6c3c3))
- **webapp:** Company card ([da1c8a6](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/da1c8a630a37317a325bf81646bc9d15e6e9dce3))
- **webapp:** contact view, cleaning ([994842a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/994842a63df694dcd7f2799ee13f927b84d7b67f)), closes [P21-198](https://bloobirds.atlassian.net/browse/P21-198)
- **webapp:** contact view, now with cadence! ([d0a8e66](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/d0a8e66e9edde95db6d2b4f2af15b44e92cac6ee)), closes [P21-198](https://bloobirds.atlassian.net/browse/P21-198)
- **webapp:** control to acceso some properties ([cad6a5a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/cad6a5a77b71c0d587e50e8e2e005c410dfbeeac))
- **webapp:** Create a hook to manage the Bobject details modal and changes to use it ([a5106f8](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/a5106f89f600cc74b2567acebe6a6df24af9f9e9))
- **webapp:** created the new two tabs at the prospection subhome ([7981871](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/79818713151495652dd0348a8a8f840a315bd84b)), closes [P21-198](https://bloobirds.atlassian.net/browse/P21-198)
- **webapp:** dont show the opportunity button in the contact view when is a lead page ([4eb9b3a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/4eb9b3a95b9ffe8ee4983e36fd6a0749f25cd411))
- **webapp:** EmptyCard component ([d8fb752](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/d8fb752d46bb74decbe26694ae116df5876c3148))
- **webapp:** eslint errors ([e46def6](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e46def699e5178b542398031317d49961ebeef1e))
- **webapp:** export InfoCardTemplateSkeleton component ([4d7aa2d](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/4d7aa2d2f988ccb5427d10d510c3dfc1a1c6782c))
- **webapp:** export useEtity hooks ([72bac61](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/72bac6147f3ec585782e6b24c9abd36907188ac8))
- **webapp:** fix in the destructuring ([edd5e1b](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/edd5e1bb913b177f081cd901295eae20f74c8ff7))
- **webapp:** fix the url path in the quick info modal for Opportunity ([fc196a7](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/fc196a741d305ec20cb9f8bfa1e424bc1bba1440))
- **webapp:** fixed some of the sizing ([61674b7](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/61674b7acce4aace05fc3d59f0480fe7ce34eb0c)), closes [P21-198](https://bloobirds.atlassian.net/browse/P21-198)
- **webapp:** fixed the candence width ([11240c9](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/11240c96954603379db41cac10ca1bede4c06529)), closes [P21-204](https://bloobirds.atlassian.net/browse/P21-204) [P21-201](https://bloobirds.atlassian.net/browse/P21-201)
- **webapp:** fixes in the InfoCard style ([9c2aeb0](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/9c2aeb08560cf0e77dc63c2a87c85329cc07f752))
- **webapp:** hide the opportunity button if the feature is disabled ([782afb6](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/782afb6a85fab7adead5f951a134af668cdb5876))
- **webapp:** improve the code ([b93e8d1](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/b93e8d13ad6c13b1e956cf663a670ce31a2a5a0a))
- **webapp:** improved the state handling ([73064de](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/73064de4b4cb3bc828e7198f5f463571825e07a1)), closes [P21-195](https://bloobirds.atlassian.net/browse/P21-195)
- **webapp:** improved the state handling ([49bdd63](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/49bdd63e1e8ef2b46496b57d546b498664da5d1f)), closes [P21-195](https://bloobirds.atlassian.net/browse/P21-195)
- **webapp:** improvements and fix the opportunities list in the edit lead modal ([1705a4e](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/1705a4ebb910ec91ba04fcb13c068d1c34114c1a))
- **webapp:** improvements in InfoCardTemplate and new component to CompanyCard ([e17fbe1](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e17fbe11ecc422cff69893ce5ccb26daf3999379))
- **webapp:** improvements in the Company Card ([8396fda](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/8396fdab17e96d045b85a77d97fd6d1426bd245e))
- **webapp:** improvements in the InfoCard for Opportunities ([0474308](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/04743082d41947da78ca864d7bb4fd4c0e85770e))
- **webapp:** improvements in the InfoCardTemplate ([f9299e8](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/f9299e8eb88cf19c466be14e924e19f1585767ea))
- **webapp:** InfoCardTemplate ([0d98dcf](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/0d98dcf5c372602bc7c4076c05bb831eb5e8e11e))
- **webapp:** layout responsive ([7b6b729](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/7b6b729f138b75c8341551f8de32c5e5064a2c57))
- **webapp:** lead list button ([57e5ade](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/57e5ade8f6fad7d0da4cbfe8ecdcc6879bd6b854)), closes [P21-196](https://bloobirds.atlassian.net/browse/P21-196)
- **webapp:** lead with and without company integration with the new Contact pages ([d177b5a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/d177b5a24c09c1d72da4970652f6653b4d0a74dd))
- **webapp:** LeadWithoutPage ([a00da63](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/a00da6325a4500715644208ea0caf862f6048ccd))
- **webapp:** manage of the tab and subtab in the Contact Page ([7b18d05](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/7b18d0577535a07f147f911211e5aa5e1d6d6e32))
- **webapp:** nav bar navegation active tabs ([597cdba](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/597cdbafaa509d2c5c212e842f0d8683adff42af)), closes [P21-201](https://bloobirds.atlassian.net/browse/P21-201)
- **webapp:** New entry on create list for opportunities. ([1117cb9](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/1117cb9ee8f0db7c3af291f3eebf7410e77967ad)), closes [P21-253](https://bloobirds.atlassian.net/browse/P21-253)
- **webapp:** new hook to manage the account users ([f0364d7](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/f0364d7dbe0134bd3e51a6b00ec23f9cb31413cf))
- **webapp:** new routes ([c95b1ac](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/c95b1ac6f830f3bdae3ee0b6a7d3b10d87573b33))
- **webapp:** new utils function to returns all fields from a bobject by its logic role ([475b8a9](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/475b8a9d0696112859ed80757f774a2df1850877))
- **webapp:** open the Contact Flow modal after make a call ([8dfef10](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/8dfef105b82920647754e07c572ab1ad8a9533c9))
- **webapp:** open the quick info modal when click in the opportunity name ([8815f55](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/8815f55a59bc172326b0ed1f74a6a372396a2a60))
- **webapp:** open the quick info when click in company field ([d91afab](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/d91afaba4af4dee2258e5b1f128f093d6a5f7dbd))
- **webapp:** opportunities dropdown and opportunity page ([11d6ca6](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/11d6ca6e3e2539a0a09e186bfc52b7a45a4ad58c)), closes [P21-198](https://bloobirds.atlassian.net/browse/P21-198) [P21-201](https://bloobirds.atlassian.net/browse/P21-201) [P21-200](https://bloobirds.atlassian.net/browse/P21-200) [P21-205](https://bloobirds.atlassian.net/browse/P21-205)
- **webapp:** opportunities dropdown and opportunity page ([8361d76](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/8361d76240755c6f2ac3e46857562391baaeab0c)), closes [P21-198](https://bloobirds.atlassian.net/browse/P21-198) [P21-201](https://bloobirds.atlassian.net/browse/P21-201) [P21-200](https://bloobirds.atlassian.net/browse/P21-200) [P21-205](https://bloobirds.atlassian.net/browse/P21-205)
- **webapp:** Opportunity Card ([c88ebb4](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/c88ebb48880f97f8d80409fcd3be3bb2cde72c6d))
- **webapp:** opportunity constants ([e7a475d](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e7a475d4b8c619cdf14a5c64c23982d74579ba56))
- **webapp:** opportunity page and routes.js ([356732e](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/356732e673e8bb686d4d463d9114e31ccb87fb35)), closes [P21-198](https://bloobirds.atlassian.net/browse/P21-198) [P21-202](https://bloobirds.atlassian.net/browse/P21-202) [P21-203](https://bloobirds.atlassian.net/browse/P21-203)
- **webapp:** opportunity page and routes.js ([f77be94](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/f77be943c5a30eea124e67c8642e04b0d724b6a9)), closes [P21-198](https://bloobirds.atlassian.net/browse/P21-198) [P21-202](https://bloobirds.atlassian.net/browse/P21-202) [P21-203](https://bloobirds.atlassian.net/browse/P21-203)
- **webapp:** remove an imported hook that for the moment we don't need it ([f9324dd](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/f9324dd510faa1d38f229f59f1a467a444bebdb6))
- **webapp:** remove an unused file ([8853e47](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/8853e4711bb57f67d58a8fda2f2b5b4d01a2a55c))
- **webapp:** remove commented code ([10e0fc8](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/10e0fc82b2ce382f12306961c1be0ea6b4f09cfb))
- **webapp:** remove console.debug ([5c53b31](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/5c53b31b1d8e827bf25d25f1da4e9ed490909a48))
- **webapp:** remove console.debug ([6717976](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/67179761e57e4cc229e2b15575cca0bf7d4eccaf))
- **webapp:** remove empty component ([cbe373d](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/cbe373d79c365c87575668cb2966dca178e5b128))
- **webapp:** remove eslint error ([3e5fd10](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/3e5fd106056aa78ad913de3658b1a0ceb4f320d2))
- **webapp:** remove hardcode value for active the Sales cycle feature ([4e486ce](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/4e486ce13fc23a1b9b58cd9e8104c97999bde131))
- **webapp:** remove old files related to ContactTask ([40812ba](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/40812ba860964b5d48028c58e2d058a1bfec1c38))
- **webapp:** remove old page of Contact Task and its reducer ([8d2455d](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/8d2455d28da8ab6afcb1b7561bcf1fa0a90bcd52))
- **webapp:** remove Schedule and Meeting button of the feed bar ([eb781a3](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/eb781a335419e1092b8a23592046c74c9b2c6600))
- **webapp:** remove unused code of CallResult ([11c6413](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/11c6413876a033cbdd94ed74ab227a5a9b384497))
- **webapp:** remove unused code of old Dialer ([3d98b99](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/3d98b993396eb4c0575c9270cba3eb3bc2050b9e))
- **webapp:** remove unused component called LaunchEmailButton ([2a86337](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/2a863372a65c0562049c707bead981333c912d90))
- **webapp:** remove unused component called LeadCardDropdown ([96abc20](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/96abc20adc0efdd9c893fb83d8e9a91e1dece49e))
- **webapp:** remove unused component called styledTextField ([ebc8b5f](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/ebc8b5f23628cbd31e149620a6bdd9903f7dfd79))
- **webapp:** remove unused component goBackButton ([e609284](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e6092845fe8562e5068515509fdc1eb36a23ddc1))
- **webapp:** remove unused component MessagingTab ([1c66d68](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/1c66d68ce6001a9650a40b793929d12b1755dbd4))
- **webapp:** remove unused file ([e95dfe7](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e95dfe7af9da75b83df47209bab4bef50a5e4437))
- **webapp:** remove unused function ([f6ea575](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/f6ea575a378e72d78e81c020dca12ed4b73a6c35))
- **webapp:** remove unused import ([b48d3f8](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/b48d3f86b197c36657fe0fbf26cd6a1564cb8f23))
- **webapp:** rename and move the Contact Flow modal ([e29b218](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e29b21886e09ba7775ced6bff331f1f9e181e494))
- **webapp:** rename the account setting prop ([867a04a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/867a04a00e918671c4c3a5fd2606bfea86cf1be3))
- **webapp:** restart cadence modal ([72cd927](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/72cd927e04c5e8087c1c607135e800b72ae63fed))
- **webapp:** sales page and minor fixes ([e627e00](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e627e001af9622669de2253efa3f9685b215fe30)), closes [P21-368](https://bloobirds.atlassian.net/browse/P21-368) [P21-369](https://bloobirds.atlassian.net/browse/P21-369) [P21-370](https://bloobirds.atlassian.net/browse/P21-370) [P21-374](https://bloobirds.atlassian.net/browse/P21-374)
- **webapp:** showing untitled bobject at the bobject name ([225bbb2](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/225bbb26047fd825179d5fbfda004f47ae71f25e)), closes [P21-276](https://bloobirds.atlassian.net/browse/P21-276)
- **webapp:** the task bar is always rendered ([7429421](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/7429421e43cbf5cf5f17fcecf8108c85f2dc1479)), closes [P21-195](https://bloobirds.atlassian.net/browse/P21-195)
- **webapp:** Update search input so it uses opportunity name as a filter ([1763734](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/17637349e5de5f63da4edd4702cb092fd1cbf4e8))
- **webapp:** upgrade the components library ([339b19a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/339b19aedea40c9a53d3d1bc85e20de01d85e14a))
- **webapp:** upgrade the components library ([adc0d9c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/adc0d9cb21aa30ba91e2ea642ea58d26ecefcbe8))
- **webapp:** use the hook to edit the Company and the Opportunity ([93e4e4e](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/93e4e4ed3fb114f0bf71c4da2927bc9cd3ed2494))
- **webapp:** useBobjectForm ([148ab25](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/148ab259c60a7fa58a3700a856966dfd0b25c423))
- **webapp:** when click in a row in the opportunity list, redirect to Opportunity page ([861d66b](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/861d66b663ba2af1feb3a9c24890ece5ccf0384b))
- new InfoCard component WIP ([37c02ef](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/37c02efe47c9f7ab5dcb4b91d84d3325a9536f05))
- **webapp:** Show the button only when the feature is enabled. ([392056e](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/392056e1c9135191c2ff529a1eb387c3370d98de))
- **webapp:** User has no the feature enabled ([f28c813](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/f28c813acd60459b90d84960748046e2b4045500))
- **webapp:** when click in Email or Linkedin action in addition to change the tab we made scroll to the tabs section ([23b07cf](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/23b07cf31a1653128d391992e9ee9d2fdd5f1ce1))
- **webapp:** when click ina opportunity row is redirecting to Company page ([af93f71](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/af93f71380b270e9255d86925e62c27bbdd40f30))

### Bug Fixes

- downgrade babel to fix eslint issues ([595dc8d](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/595dc8de37915eaebfe0d95a4ba50d8d91b8cc37))
- **webapp:** [P21-1051](https://bloobirds.atlassian.net/browse/P21-1051) Can not create a Task and Activities on the Opportunity page ([8d4d41c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/8d4d41cb097eb04bf2078a08d4870643bee67d10))
- **webapp:** [P21-958](https://bloobirds.atlassian.net/browse/P21-958) The company tooltip doesn't show the company name ([cba27dd](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/cba27ddcc1406751c1bf149a4c428e3aee043242))
- **webapp:** [P21-967](https://bloobirds.atlassian.net/browse/P21-967) Full list of opportunities tab is showing all the opportunities instead of all the opportunities assigned to our user ([08c0a9a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/08c0a9a79c37f0dd021c561f74cad44ada3772d6))
- **webapp:** error in a path ([95f5567](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/95f556752b4fdef45941125efd2f10914c89f0c2))
- **webapp:** new yarn.lock ([9ea2007](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/9ea2007340b60eae1d63dba0c2dd5ca97772299c))
- [BG-393](https://bloobirds.atlassian.net/browse/BG-393) Filters crash when no section fetched yet ([4220a24](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/4220a2465cc7dd50258da62a5b390c7fd6c89591))
- activity selected lead is set by default on bobject form open ([d45ac0d](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/d45ac0d4201bc528886e96d494be368e33c25bf1)), closes [P21-996](https://bloobirds.atlassian.net/browse/P21-996)
- add 'now' as default date for time pickers on the bobject form ([10bf77b](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/10bf77bfc81d986cafb1e1331cb2c0498115508b)), closes [P21-999](https://bloobirds.atlassian.net/browse/P21-999)
- **webapp:** eslint error ([999b615](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/999b615d2574522787a3cf254bd983b1a311dca5))
- add meeting does not fill default values ([d82e49c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/d82e49c51ff04aefab9e05003fa5f698e8cb4801)), closes [P21-931](https://bloobirds.atlassian.net/browse/P21-931)
- add missing company logic role ([d067918](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/d06791839b16fd61a4ca1d733435cd71c40a2115))
- assign leads update active company so field is not empty on submit ([1cd04ed](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/1cd04ed9f2716c503220865b8ba6d666d7caba85)), closes [P21-964](https://bloobirds.atlassian.net/browse/P21-964)
- bring back public path ([6a1c458](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/6a1c45858e53118fee4353ca250749b8ecf86efa))
- close bobject details on bobject form open ([4339852](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/43398526b2085c3af5adc092c8ed23fb11eb2773)), closes [P21-977](https://bloobirds.atlassian.net/browse/P21-977)
- default picklist values not being selected ([a03aba9](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/a03aba9753d5d1e838f6dcc5debd28f0da19f282)), closes [P21-998](https://bloobirds.atlassian.net/browse/P21-998)
- Filter on the filters modal to not show deindexed fields, but in columns they should be shown ([cc56220](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/cc562205fe31ae23438441d031f3b834291cd726))
- hide bobject form section if empty ([4507e00](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/4507e00f6de871e46e7764e334647d191468114b))
- if only one field condition matches, it should select automatically ([e8a51ef](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e8a51effed2d3c4282be63826015f2545f7355bf)), closes [P21-998](https://bloobirds.atlassian.net/browse/P21-998)
- incorrect imports ([16f4210](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/16f4210ac5dfb9ef9cabd0f96d7e534c426bbdb0))
- invalid postcss ([b52f416](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/b52f41625e47b5f1ba703952d3bed86699530c7a))
- lead not being selected on task creation modal ([40a5699](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/40a5699b1d8a423d8214604d709e49f5ccad1c59))
- linting errors ([e219b98](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e219b98514564fa8a907ae736433006427acc271))
- make bobject form section caching immutable ([e6dd5b6](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e6dd5b610a29d575b37abbb3510bdaf319d19df3))
- make dropdown field default for picklist values ([a0e315e](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/a0e315ecbdd1a6fbc4d4a6437a25ff4e100aa9cd)), closes [P21-979](https://bloobirds.atlassian.net/browse/P21-979)
- replace placeholder by real values on duplicate validation modal ([34aaba6](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/34aaba64c0ad621f633e28f766d089cf7210182a)), closes [P21-952](https://bloobirds.atlassian.net/browse/P21-952)
- **full sales:** Cadence name will change when we change de cadence of the company or opp. Fixed lead filter of cadence table when we change from company to opp. Fix tooltip of status changed activity type. ([0d3cf26](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/0d3cf26fec50c37ee966adb55184fc7f25ad8ec2))
- **webap:** eslint errors ([cb3fb5a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/cb3fb5a18c1497cf5964a936cae105a8e944b340))
- make select with no items not filled ([dcb8283](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/dcb8283cd8c5b0c2b239ac9b6cec8d6c60e32b8e))
- meeting creation does not open calendar modal ([f320c14](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/f320c14ba85defe33110372b81f9b1f98f02b7eb)), closes [P21-939](https://bloobirds.atlassian.net/browse/P21-939)
- reconnect next step to bobject form ([bb423e2](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/bb423e23810021cd1ea7e7b40f7e279da8c9acda))
- revalidate bobject form after first submit ([40f2d82](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/40f2d82b1c019b28277854b20c146c7b497a27d0))
- use target=web for live reloading ([3a9271a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/3a9271a9da5347ad0b991943588392436d53cf20))
- **contact-view:** resetting the state when going back to the prospect view ([7f2b82e](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/7f2b82ee234ffb496c7144a4daaa90a0f563c379)), closes [P21-854](https://bloobirds.atlassian.net/browse/P21-854)
- **full sales:** Fix stop cadence in company and opportunity ([66fcef5](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/66fcef5ed36325166b36f3cbeeba1a82ab486936)), closes [P21-965](https://bloobirds.atlassian.net/browse/P21-965)
- **full sales:** Fixed queries for accounts without full sales enabled ([14e6db1](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/14e6db19fdb9056dfe4bccf72918902ae1ae6b8a))
- **full sales:** Get tasks when you come to opportunity page from company page ([5e31cef](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/5e31cef92984c2426d0f8507fd059edba52623c6))
- **webapp:** [P21-1010](https://bloobirds.atlassian.net/browse/P21-1010) When clicking in a call notification of a number without lead, the page redirects and return an error ([ef60b7e](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/ef60b7ec9f4183f79fd4a891abf675c3cbf8a8c8))
- **webapp:** [P21-1016](https://bloobirds.atlassian.net/browse/P21-1016) Target Market & ICP list have wrong design ([d204237](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/d204237a734aeeda42175176becbe150be8e4af8))
- **webapp:** [P21-1020](https://bloobirds.atlassian.net/browse/P21-1020) Default cadence and its message its not correct ([a580bb7](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/a580bb78f4da4084cfcec3719471d4f65708548f))
- **webapp:** [P21-1028](https://bloobirds.atlassian.net/browse/P21-1028) Contact Lead is not working in Leads without company ([e952a12](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e952a1274acab6c83e2c4c82f18e651a851991c7))
- **webapp:** [P21-657](https://bloobirds.atlassian.net/browse/P21-657) When we click in the note button, the activity type should be note by default ([f10872b](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/f10872bad33ae4c834ac1666ef1f0d131625926c))
- **webapp:** [P21-822](https://bloobirds.atlassian.net/browse/P21-822) When Delete a Lead without company, doesn't redirect to leads list ([5872cd4](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/5872cd43de61a5fafd0dd124641afac24d1c680e))
- **webapp:** [P21-893](https://bloobirds.atlassian.net/browse/P21-893) Call result modal is appearing after clicking in the opportunity after a call ([5971b14](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/5971b1458d7cedf0978e705aba338eee1c438f51))
- **webapp:** [P21-981](https://bloobirds.atlassian.net/browse/P21-981) Notes are appearing with undefined in the title ([26a417a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/26a417a84a7e72f84b489f175c0cd56b2b1cf841))
- **webapp:** [P21-982](https://bloobirds.atlassian.net/browse/P21-982) After creating an meeting in the call result modal the meeting creation modal doesn't appear ([4464811](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/4464811a0fb55f8590b272914d329c053a831ae2))
- **webapp:** [P21-991](https://bloobirds.atlassian.net/browse/P21-991) "I want to manually schedule a next step" button doesn't do anything ([8bb23cb](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/8bb23cb4ff6082c1725967d6aa20aff50dc32e2e))
- **webapp:** change also in Lead list ([5a27561](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/5a2756186ab0434f21b96416efa50c6f2a142d32))
- **webapp:** Change call in opportunity tasks ([1dc65cf](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/1dc65cf2827e78766aed1724a934139fae0deab3))
- **webapp:** complete tasks at the nav bar ([1d33c9a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/1d33c9acdcd921d73c7455dbb54636422b95182f)), closes [P21-854](https://bloobirds.atlassian.net/browse/P21-854)
- **webapp:** error in useTargetMarket ([0830fe2](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/0830fe2d2db8aafb54b9edd71f414e0e7a0a94aa))
- **webapp:** fixed the restart navigation bug and overdue tasks to the task pagination at the contact view ([d618c30](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/d618c30f7d644c26deb8de8200eaf49afa8a07a5)), closes [P21-854](https://bloobirds.atlassian.net/browse/P21-854)
- **webapp:** If we open the cadence control and the company has the cadence ended show the Cadence as activated ([661a53d](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/661a53d095be9afe5a573fc4eca65b630c208b6b))
- **webapp:** improve the code ([d2acab8](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/d2acab8290204029ccb14d6273737518273853c6))
- **webapp:** in Cadence control modal, when we open the modal for an opportunity, the add task is not correct ([de4f9fc](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/de4f9fc106c4c11b0471f2c276df61fb4a3f0cac))
- **webapp:** In the Cadence control modal, when configure the cadence, the placeholder is not correct ([7526e78](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/7526e7817c36e90b4d7c12bf4c200ca88600fc58))
- **webapp:** message related with selected opp ([3704251](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/37042510d1383160b3a59573b72538524892f8fa))
- **webapp:** modal title ([d689c81](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/d689c811922e232bed9061399eac1f48a7139719))
- **webapp:** remove error ([03b73fc](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/03b73fceca7e10a29303bc6b6a07a960691972d5))
- **webapp:** When edit a Cadence after call the network call is incorrect (Change company for Opportunity) ([7f1694a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/7f1694aa92f11d9d3bb11a77422a8bbe19f857ba))
- autocomplete filled on blur ([8d74a4b](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/8d74a4ba49a6dd921dd5343f5618cba5860b4fef))
- **webapp:** [P21-806](https://bloobirds.atlassian.net/browse/P21-806) When clicking on a company name on a list the page crashes ([95af913](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/95af9131a475f3dfe7a7385680dd9942c6af8ffd))
- **webapp:** [P21-825](https://bloobirds.atlassian.net/browse/P21-825) If you click on a lead bobject form it crashes with leads ([fda1dbb](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/fda1dbb250b9bc710a3741834e883a798d1be87f))
- **webapp:** 404 page not appears ([ea8bb0b](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/ea8bb0b36deaee118baacabaddb6dccec7f8d8fc))
- **webapp:** after 404 page, the company page not loaded ([6c1ee95](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/6c1ee95c01ca118dab940bd108af3bc25066ca7d))
- **webapp:** fix add a new query params when we open the call result modal ([817bb45](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/817bb45a5df84b8c4db2f91c05f0047b12a8f41d))
- **webapp:** fix contact ([8f90bc7](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/8f90bc71bac19f7969840c8ca79cf54471ee3597))
- **webapp:** improvements ([afe0027](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/afe00278e89bd2464c4846e8a5945df21914f278))
- **webapp:** opportunity page ([eba32dd](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/eba32dd9ec0b43ffa8571578308460ce985ca5d2))
- make bobject form use new confirm delete modal ([e388340](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e3883400c2e17d1561dc463f32e68900cf901bdd))
- non-required empty values should not be validated ([c8c932d](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/c8c932d84c07f574359d73bd514b3c0de103172b))
- valid validation should true ([3768f24](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/3768f2411a433ab13144a9d54eea88cdf6fb8fb5))
- **webapp:** in the page of Lead without company, the info card never loads ([c816263](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/c816263b8395f2490e7b429fdf5e9b6d924780ea))
- **webapp:** rename subscription variable ([4c87fcb](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/4c87fcbaa5bf494571e23161b4244ded8cc5fb99))
- closed by default ([948c034](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/948c034eaef02e99662849fc0a5cda80fb31041d))
- date inputs widths ([bded00b](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/bded00b2f04afacc7e3ea190b6659634802c84ed))
- date time field type not being recognized ([b64cd04](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/b64cd0485a7ddd0fe619ea987cdc97e3924ced63))
- getSimpleDate function for dates on 00:00am ([341e704](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/341e704bfefcb71d22f3ad2ccf998fbfe18fedde))
- give gap between cancel and delete buttons ([a3e536f](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/a3e536f9a6f1b32894aef9e7fd08d3effeeb1cb0))
- half margin between list and filter ([97bff2c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/97bff2ccdf6c73c5f5363595abc15c2067978ed0))
- inline bobject form mode temporarily ([730c8fd](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/730c8fdfc5db6fe05b0ece3c5cb46fbd6c95d096))
- missing export ([3ad4788](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/3ad47885580ce1b6e3484b7610af0977d2040f5a))
- picklist item values use id not logic role ([2981628](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/29816285d48f652c3c3d7b3542f7b06f4b43956e))
- reset bobject on close ([4f448e9](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/4f448e9f68277681126009938c3ad4ee7ef449e2))
- revalidate bobject form on change ([464e0e3](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/464e0e396345ee9e2b2e64d04233aed7853a22a6)), closes [P21-976](https://bloobirds.atlassian.net/browse/P21-976)
- set a default 50% width on fields with no width ([9a8bc91](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/9a8bc91a744592185aacce03edb1629a96b97cb6))
- split old bobject form into additional and default values ([dcfa1c4](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/dcfa1c4326608701963a2214fe0dd65378f81a35))
- typo in duplicate validation modal ([3dabb2d](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/3dabb2dbc1513926c5a7ac9040eb1ee7d2211efb))
- typo in hasPermission variable ([bace654](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/bace654141c06408e744b6229793cbcce27ce454))
- validate form logic ([f1c614c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/f1c614c3cbb072cff469cef5297e229b3650ce27))
- validation and disabling logic ([404234d](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/404234d05cf29b1c5a1e2117de851e46735c39ea))
- **webapp:** added the subscription for the company card ([0b868c8](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/0b868c845c25fba687b39a915f626bb4ecd17691)), closes [P21-500](https://bloobirds.atlassian.net/browse/P21-500)
- **webapp:** do not unmount the company card if the updated company is the same ([5d125fe](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/5d125feaa3c8c44371b257857489e6924fbc497e)), closes [P21-653](https://bloobirds.atlassian.net/browse/P21-653)
- **webapp:** fix error after the merge ([4ee2134](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/4ee21343d7a90e4bafe810491bf957c2d259f46f))
- **webapp:** the cadence reschedule modal has the current date as default ([710e8cc](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/710e8cc2e6f82056c68a96abe266c84be6c02f93)), closes [P21-774](https://bloobirds.atlassian.net/browse/P21-774)
- **webapp:** upgrade the components library version to fix the error with the inputs and its placeholder ([9d9fe23](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/9d9fe23aac82f380c2f0fc0d089a2d7ff68ec3e2))
- **webapp:** when opening the dialer the active tab changes to messaging ([baa839f](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/baa839f7044d8c0110022fb1dd30c4261eb6284c)), closes [P21-775](https://bloobirds.atlassian.net/browse/P21-775)
- avoid text inside of <p> tag ([35642b6](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/35642b6ff898cc78cb31a08b67c2bb61b00fffe3))
- make cadenceItem redirects to activity tab on click ([40b7dac](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/40b7daccdeda6abb0851192e216cf358ac3d2469))
- make notification card also scroll to activity section ([9d32b12](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/9d32b125d781effaea581b38e9b8048eee1dcfd3))
- make param id change should update company on contact view ([2165592](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/2165592fadddc5b3e5dcc08fbcbc5674e1a3d8ae))
- prevent setting an already existing filter trigger loading state ([9b1bd76](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/9b1bd7674669e82197f1351aead789764dddbb90))
- reposition date picker on activity list section ([a728b22](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/a728b226a54b0657c0b66ef100908e924ddaaefb)), closes [P21-768](https://bloobirds.atlassian.net/browse/P21-768)
- reset activity filters on company change ([b65301f](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/b65301fb29b8f2a1266be1fa6910189e035cf3be))
- **full sales:** Block access to emagister to sales button. ([b354705](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/b354705f48d0eb13bc0c9f5da50eced44f87a643))
- **next step:** fix show all completed tasks for today for next step ([3216b3d](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/3216b3d06b38c122ba97cd0506bde428580085ab))
- **webapp:** added the page titles ([01dbadf](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/01dbadf973dc05c5d8305447dc7b5b38c81468c2))
- **webapp:** left aligned opp dropdown ([468a147](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/468a147dfc79321da5e9a53f7740f21a3ee867c3)), closes [P21-488](https://bloobirds.atlassian.net/browse/P21-488)
- incorrect import for test ([6857cae](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/6857caef66c823cdd4e1ac8d794c4bc1a94febe0))
- inject bobject reference ([39cfda5](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/39cfda5a5301d2defd50ac3b54a65b58c52e7da8))
- margins and dashed line logic ([ea1f048](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/ea1f04841674b0e9af1f83ab738606859d031e6b))
- redirect function incorrectly called ([b1a9484](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/b1a94842ac92329919e96466917ab85f0c42d598))
- **webapp:** able to complete tasks ([3f22766](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/3f22766d1955a7fbba68b2d6be4f80ec543889e4))
- **webapp:** actions permissions ([3b5a4f8](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/3b5a4f86262db66fe52104e41b6de9a5b6746fa1)), closes [P21-493](https://bloobirds.atlassian.net/browse/P21-493)
- **webapp:** adding the referenced bobjects to the opportunities ([6a44922](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/6a44922418f63352d166dfc09c93eb34142e450c)), closes [P21-409](https://bloobirds.atlassian.net/browse/P21-409)
- **webapp:** close the actions dropdown when clicking on an item ([a5848d7](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/a5848d727b98931e83eef436610ffabd37028893))
- **webapp:** corrupted activities without date are making the app crash ([c57672e](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/c57672e02ae3e6811209cc83c8d383ab7b3c2dd1)), closes [P21-642](https://bloobirds.atlassian.net/browse/P21-642)
- **webapp:** disable the dropdown when there are no opportunities ([592e49c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/592e49caa2f956f2895c9ab5d2e1b8fbdb82772f)), closes [P21-195](https://bloobirds.atlassian.net/browse/P21-195)
- **webapp:** do not use the first value of a picklist as the default value on fields with a starting field. ([99c1c1f](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/99c1c1fe5225becdad342c3d97bdb5f0581e4770)), closes [P21-452](https://bloobirds.atlassian.net/browse/P21-452)
- **webapp:** do not use the first value of a picklist as the default value on fields with a starting field. ([7a0e792](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/7a0e79249069729fbd78c4fc6e9ff99ef6619c6c)), closes [P21-452](https://bloobirds.atlassian.net/browse/P21-452)
- **webapp:** Environment removed. ([b3b1c3f](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/b3b1c3f99d4187bcbfabd95c23d21e00991a43ad))
- **webapp:** fix the logic role name ([9f78f26](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/9f78f262d232a11c37ed3d778099b999bd62049e))
- **webapp:** fixed the bobject details for the opportunities without companies ([6ecee4a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/6ecee4a1a4d86fb3b7dcd406241e1875089493e8)), closes [P21-656](https://bloobirds.atlassian.net/browse/P21-656)
- **webapp:** fixed the bug where opportunities without name where crashing the lists ([598fa81](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/598fa819a0e8db235c833f3518941887910efb70)), closes [P21-448](https://bloobirds.atlassian.net/browse/P21-448)
- **webapp:** fixed the bug where opportunities without name where crashing the lists ([92c64e0](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/92c64e00a9666f785526d847d08890783df05535)), closes [P21-448](https://bloobirds.atlassian.net/browse/P21-448)
- **webapp:** fixed the new lead form inside the opportunity ([ae32880](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/ae32880c8be5e305439967825ed1aaa3830a73f0)), closes [P21-196](https://bloobirds.atlassian.net/browse/P21-196) [P21-197](https://bloobirds.atlassian.net/browse/P21-197) [P21-431](https://bloobirds.atlassian.net/browse/P21-431)
- **webapp:** fixed the reschedule cadence. ([35b53b1](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/35b53b1c1c61d9c09283dc8bdaf5adc36b31cf3c)), closes [P21-641](https://bloobirds.atlassian.net/browse/P21-641)
- **webapp:** fixed the styles of the selected status ([ee3a80d](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/ee3a80d387c2737eb3eedfac7885e8a9d1533269)), closes [P21-502](https://bloobirds.atlassian.net/browse/P21-502)
- **webapp:** Fixed typos Can not for Cannot. ([46455e3](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/46455e3243258ef099d5ab361acf6789763aac50)), closes [P21-245](https://bloobirds.atlassian.net/browse/P21-245)
- **webapp:** hidden the opp button on the opp pages. ([2bbe682](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/2bbe682e665c4b64f2bedc0168d3d4b95442d805)), closes [P21-493](https://bloobirds.atlassian.net/browse/P21-493)
- **webapp:** hidden the opp button on the opp pages. ([36bf857](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/36bf8578cd80e196c371ca55241c672492b7dbcc)), closes [P21-493](https://bloobirds.atlassian.net/browse/P21-493)
- **webapp:** in Lead without company page, the navigation bar is not updated ([8209c95](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/8209c952c75cf16cc530f67c9f3a432e51f9dbcd))
- **webapp:** lead list styles ([e30ad2b](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e30ad2b7681b50fdd5aeb9f1dd72c841e9101e5e)), closes [P21-195](https://bloobirds.atlassian.net/browse/P21-195)
- **webapp:** now the card does not crash if there is no status ([6151f89](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/6151f899247add5e6ab7511c2c5a8a885ee6c39b)), closes [P21-438](https://bloobirds.atlassian.net/browse/P21-438)
- **webapp:** opening the bobject details and fixing the permissions ([717a9db](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/717a9db4dd648366eca1712cb9d1ba2e72ce3d35)), closes [P21-432](https://bloobirds.atlassian.net/browse/P21-432)
- **webapp:** opening the bobject details and fixing the permissions ([b959374](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/b959374e882159e996fc4af2e64e646806698f50)), closes [P21-432](https://bloobirds.atlassian.net/browse/P21-432)
- **webapp:** opening the bobject details and fixing the permissions ([e5dec88](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e5dec88ea0063671ea1f5f6b16ec01f4831925b2)), closes [P21-432](https://bloobirds.atlassian.net/browse/P21-432)
- **webapp:** refactored the useHasBobjectPermissions to an actual hook ([5686ece](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/5686eceec26377850ad6f42baac6eebd2e0bfbe0)), closes [P21-495](https://bloobirds.atlassian.net/browse/P21-495)
- **webapp:** remove console.debug ([487ab64](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/487ab6412cdd82872a18c5d764eda35021472a31))
- **webapp:** remove hardcode value for highPriority field ([f21f7b2](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/f21f7b2a85453a81b456575bc6ca44f5e2404342))
- **webapp:** Removed final space. ([e1a9633](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e1a9633baea4409e8ab28384e07b46e719254f64)), closes [P21-245](https://bloobirds.atlassian.net/browse/P21-245)
- **webapp:** sometimes there are not referenced fields ([48aae9b](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/48aae9b4dae42926c05c553134795da6193d74a4))
- **webapp:** the opprtunity select contains lead and not opportunities ([9a15d5a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/9a15d5a45a5f3c536cc6a88d7642df5c89241c9b))
- **webapp:** when changing the company param id some parts where not properly updated ([adc2122](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/adc2122997e853e5c5a138b7232e19c11bec5938)), closes [P21-643](https://bloobirds.atlassian.net/browse/P21-643)
- **webapp:** wider bobject name ([d26cc35](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/d26cc350dc4ad2085e4140f5bb7c2b4d16b9c588))
- **webapp:** xstate does not allow boolean algebra on the conditions ([dce2956](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/dce295654d77bded23d922a999f6d0941e81babe)), closes [P21-386](https://bloobirds.atlassian.net/browse/P21-386) [P21-388](https://bloobirds.atlassian.net/browse/P21-388) [P21-389](https://bloobirds.atlassian.net/browse/P21-389) [P21-391](https://bloobirds.atlassian.net/browse/P21-391) [P21-401](https://bloobirds.atlassian.net/browse/P21-401)

### Performance Improvements

- cache bobject form sections in memory ([b162f8d](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/b162f8dbf72bc49a18162d48f0e3eab0ba2e9069)), closes [P21-978](https://bloobirds.atlassian.net/browse/P21-978)
- dont inject references ([20f6d8a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/20f6d8ac0130d18e2839964ceb921bb9c4150a8e))
- extract modals to avoid whole app rerender ([af485dc](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/af485dccb2232dace2e160cf8f8c90a5d1477952))
- memoize date functions ([64a6f2b](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/64a6f2b93f4cb528eb455c91a65b54e94be7ad3c))
- memoize default values ([bb04d8a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/bb04d8a526d114228d734850ebfc794c5fa7439a))
- simpler bobject skeleton ([a6c4f8c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/a6c4f8c00974e609d11dc5fa20b521e04613bf17))
- simplify chunk names ([56da2f6](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/56da2f6fb55ad6bcb33100fe9c579046c1b22724))
- speed up actions by not modifying lockfile ([8b5efe9](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/8b5efe9505bf93c9bb1592ef538787280f54f0e4))
- use webpack defaults as described in their docs ([c77382c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/c77382c073d8ceb6296bc4a1db24e7d425101cb0))
- **webapp:** refactored the actvitiy list ([db11f23](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/db11f238c2243a65191506e1aca8d9d0b8d90330))
- **webapp:** refactored the actvitiy list ([e834e8c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e834e8cac1f7c1bbd24191de531d1e066312eea1))
- **webapp:** the opportunity page can load the opps using the param ([d9e9a8a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/d9e9a8a406377774883029232a9e9340f6c4d00f)), closes [P21-643](https://bloobirds.atlassian.net/browse/P21-643)

## [1.11.0](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v1.10.2...v1.11.0) (2021-02-26)

### Features

- **indexed fields:** at lists filters we only show those fields that are indexed on elastic search ([b660afd](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/b660afd5e1cd4ebf43b38e69f2a2346bb3c98210))

### [1.10.2](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v1.10.1...v1.10.2) (2021-02-26)

### Bug Fixes

- cannot assign lead to another company ([38ea2a6](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/38ea2a60a3c2766ce22a7562b5528f94263a003e)), closes [BG-378](https://bloobirds.atlassian.net/browse/BG-378)

## [1.11.0-preprod.1](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v1.10.1...v1.11.0-preprod.1) (2021-02-25)

### Features

- **indexed fields:** at lists filters we only show those fields that are indexed on elastic search ([b660afd](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/b660afd5e1cd4ebf43b38e69f2a2346bb3c98210))

### [1.10.1](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v1.10.0...v1.10.1) (2021-02-25)

### Bug Fixes

- use onMouseDown instead of onClick for email variable options ([9031147](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/903114788b6e4c9ef9c910504e3dc3da270146f5)), closes [BG-377](https://bloobirds.atlassian.net/browse/BG-377)

## [1.10.0](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v1.9.0...v1.10.0) (2021-02-23)

### Features

- **integrationsUI:** stage does not appear as default value (WIP) ([f148993](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/f148993c293b03abbbf6f6e261322f23e38c5bf6))
- **webapp:** added the linkedin download page ([ad9345e](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/ad9345ed35a3d1ffd4a114d964768970b49ac1d7))
- **webapp:** updated the linkedin download page ([d7591c8](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/d7591c8d687f2c127bccc1a6df86c7afad223be1))

### Bug Fixes

- use visible instead ([c07b581](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/c07b581bbe92c34b9ed79fa4438a334c0112e5fd))
- **integrationsUI:** [[BG-352](https://bloobirds.atlassian.net/browse/BG-352)]: deleted meeting type from engagements config ([89c0529](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/89c0529797a132fccf09ef7988b845dd63d59bbc))
- **integrationsUI:** [[BG-352](https://bloobirds.atlassian.net/browse/BG-352)]: fix lint error ([ddfdc54](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/ddfdc548702a1d3f308f058b9b903182ea60840e))
- **webapp:** [P21-822](https://bloobirds.atlassian.net/browse/P21-822) When Delete a Lead without company, doesn't redirect to leads list. ([bf79ec1](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/bf79ec1b2a4d1b7b66f4d0f0985d24cc669bce2e))
- **webapp:** moved the emailModal to a shared modal to avoid unmounts ([719fc66](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/719fc661391154d60f8742bd1b6499940334a317)), closes [BG-353](https://bloobirds.atlassian.net/browse/BG-353)
- **webapp:** moved the emailModal to a shared modal to avoid unmounts ([aa4f97b](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/aa4f97b6173ceb95562e2ec86d817ec0adbbb8e1)), closes [BG-353](https://bloobirds.atlassian.net/browse/BG-353)
- **webapp:** set the page to the last with items if you change the filters ([84c8f2d](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/84c8f2d1b685dc7572166b8cc533282bc0b1a29e)), closes [BG-356](https://bloobirds.atlassian.net/browse/BG-356)

## [1.10.0-preprod.6](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v1.10.0-preprod.5...v1.10.0-preprod.6) (2021-02-22)

### Features

- **webapp:** updated the linkedin download page ([d7591c8](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/d7591c8d687f2c127bccc1a6df86c7afad223be1))

## [1.10.0-preprod.5](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v1.10.0-preprod.4...v1.10.0-preprod.5) (2021-02-18)

### Bug Fixes

- use visible instead ([c07b581](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/c07b581bbe92c34b9ed79fa4438a334c0112e5fd))

## [1.10.0-preprod.4](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v1.10.0-preprod.3...v1.10.0-preprod.4) (2021-02-18)

### Bug Fixes

- **webapp:** [P21-822](https://bloobirds.atlassian.net/browse/P21-822) When Delete a Lead without company, doesn't redirect to leads list. ([bf79ec1](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/bf79ec1b2a4d1b7b66f4d0f0985d24cc669bce2e))

## [1.10.0-preprod.3](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v1.10.0-preprod.2...v1.10.0-preprod.3) (2021-02-15)

### Features

- **webapp:** added the linkedin download page ([ad9345e](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/ad9345ed35a3d1ffd4a114d964768970b49ac1d7))

## [1.10.0-preprod.2](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v1.10.0-preprod.1...v1.10.0-preprod.2) (2021-02-12)

### Bug Fixes

- **webapp:** set the page to the last with items if you change the filters ([84c8f2d](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/84c8f2d1b685dc7572166b8cc533282bc0b1a29e)), closes [BG-356](https://bloobirds.atlassian.net/browse/BG-356)

## [1.10.0-preprod.1](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v1.9.0...v1.10.0-preprod.1) (2021-02-11)

### Features

- **integrationsUI:** stage does not appear as default value (WIP) ([f148993](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/f148993c293b03abbbf6f6e261322f23e38c5bf6))

### Bug Fixes

- **integrationsUI:** [[BG-352](https://bloobirds.atlassian.net/browse/BG-352)]: deleted meeting type from engagements config ([89c0529](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/89c0529797a132fccf09ef7988b845dd63d59bbc))
- **integrationsUI:** [[BG-352](https://bloobirds.atlassian.net/browse/BG-352)]: fix lint error ([ddfdc54](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/ddfdc548702a1d3f308f058b9b903182ea60840e))
- **webapp:** moved the emailModal to a shared modal to avoid unmounts ([719fc66](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/719fc661391154d60f8742bd1b6499940334a317)), closes [BG-353](https://bloobirds.atlassian.net/browse/BG-353)
- **webapp:** moved the emailModal to a shared modal to avoid unmounts ([aa4f97b](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/aa4f97b6173ceb95562e2ec86d817ec0adbbb8e1)), closes [BG-353](https://bloobirds.atlassian.net/browse/BG-353)

## [1.9.0](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v1.8.2...v1.9.0) (2021-02-08)

### Features

- **webapp:** upgrade components library ([1ddaaa3](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/1ddaaa376b05c1ec5587f079f68b9bdd329d80dd))

### Bug Fixes

- **webapp:** If you make calls in different tabs notes are crossed ([c9ff6f6](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/c9ff6f676e13d140183fa4adb483e18c2664bc59))
- **webapp:** the dialer machine state not change ([4f44d71](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/4f44d716b220a6bd2d437435f6c48d5a99bd3be9))
- **webapp:** tracking events also when incoming calls are redirected to the dialer ([416f190](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/416f19011b78e795ea07b9bffbf8a56f8f9fd2f3)), closes [BG-334](https://bloobirds.atlassian.net/browse/BG-334)
- **webapp:** upgrade the react-api-library ([4e91b17](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/4e91b17a63d541209154c5ea47ed924b17e2caf0))
- **webapp:** when we are creating a new field for mapping, the autocomplete not working ([d832deb](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/d832deb81669d80c0c0b36f76c4f0283da266cff))

## [1.9.0-preprod.3](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v1.9.0-preprod.2...v1.9.0-preprod.3) (2021-02-04)

### Bug Fixes

- **webapp:** the dialer machine state not change ([4f44d71](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/4f44d716b220a6bd2d437435f6c48d5a99bd3be9))
- **webapp:** tracking events also when incoming calls are redirected to the dialer ([416f190](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/416f19011b78e795ea07b9bffbf8a56f8f9fd2f3)), closes [BG-334](https://bloobirds.atlassian.net/browse/BG-334)
- **webapp:** upgrade the react-api-library ([4e91b17](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/4e91b17a63d541209154c5ea47ed924b17e2caf0))

## [1.9.0-preprod.2](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v1.9.0-preprod.1...v1.9.0-preprod.2) (2021-02-04)

### Bug Fixes

- **webapp:** when we are creating a new field for mapping, the autocomplete not working ([d832deb](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/d832deb81669d80c0c0b36f76c4f0283da266cff))

## [1.9.0-preprod.1](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v1.8.3-preprod.1...v1.9.0-preprod.1) (2021-02-03)

### Features

- **webapp:** upgrade components library ([1ddaaa3](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/1ddaaa376b05c1ec5587f079f68b9bdd329d80dd))

### [1.8.3-preprod.1](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v1.8.2...v1.8.3-preprod.1) (2021-02-03)

### Bug Fixes

- **webapp:** If you make calls in different tabs notes are crossed ([c9ff6f6](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/c9ff6f676e13d140183fa4adb483e18c2664bc59))

### [1.8.2](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v1.8.1...v1.8.2) (2021-02-01)

### Reverts

- Revert "fix(webapp): the dialer machine state not change" ([f38ae35](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/f38ae35942e21c32489872c888763b84a56eb015))
- Revert "fix(webapp): tracking events also when incoming calls are redirected to the dialer" ([e6a2974](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e6a2974d14032861198a51c76783a2087739b1a5))
- Revert "fix(webapp): If you make calls in different tabs notes are crossed" ([ab2fb05](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/ab2fb05fdc74d446075268a0bf84dab15a36c4fd))

### [1.8.1](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v1.8.0...v1.8.1) (2021-01-29)

### Bug Fixes

- **hubspotUI:** Meeting type check box disabled logic changed ([7ac6452](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/7ac6452f3c7e16c03d157185de7af68751b21c9a))
- **webapp:** If you make calls in different tabs notes are crossed ([aa836f2](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/aa836f22cf733f395630fdba6ed0a8f863c8f030))
- **webapp:** the dialer machine state not change ([584849a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/584849a4494b7ef5db05d4b50d0c80d09736d48b))
- **webapp:** tracking events also when incoming calls are redirected to the dialer ([c80dd28](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/c80dd28d32aa51148ba42a2242bec996ce0a35c8)), closes [BG-334](https://bloobirds.atlassian.net/browse/BG-334)
- upgrade component library to fix input placement ([507993b](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/507993b9d18f7d5eb07e7b5f99a5cc7358b3c0ec)), closes [BG-338](https://bloobirds.atlassian.net/browse/BG-338)

### [1.8.1-preprod.4](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v1.8.1-preprod.3...v1.8.1-preprod.4) (2021-01-29)

### Bug Fixes

- **webapp:** If you make calls in different tabs notes are crossed ([aa836f2](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/aa836f22cf733f395630fdba6ed0a8f863c8f030))

### [1.8.1-preprod.3](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v1.8.1-preprod.2...v1.8.1-preprod.3) (2021-01-29)

### Bug Fixes

- **webapp:** the dialer machine state not change ([584849a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/584849a4494b7ef5db05d4b50d0c80d09736d48b))
- **webapp:** tracking events also when incoming calls are redirected to the dialer ([c80dd28](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/c80dd28d32aa51148ba42a2242bec996ce0a35c8)), closes [BG-334](https://bloobirds.atlassian.net/browse/BG-334)

### [1.8.1-preprod.2](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v1.8.1-preprod.1...v1.8.1-preprod.2) (2021-01-29)

### Bug Fixes

- **hubspotUI:** Meeting type check box disabled logic changed ([7ac6452](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/7ac6452f3c7e16c03d157185de7af68751b21c9a))

### [1.8.1-preprod.1](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v1.8.0...v1.8.1-preprod.1) (2021-01-28)

### Bug Fixes

- upgrade component library to fix input placement ([507993b](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/507993b9d18f7d5eb07e7b5f99a5cc7358b3c0ec)), closes [BG-338](https://bloobirds.atlassian.net/browse/BG-338)

## [1.8.0](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v1.7.2...v1.8.0) (2021-01-27)

### Features

- **hubspotUI:** building sync status template (WIP) ([9cad375](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/9cad375f66c740f11839ba37a4442598f72ce23d))
- **hubspotUI:** first steps of integrations layout (WIP) ([a26843f](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/a26843fdb80cd3356b0c88c418861c367f8b43b2))
- **hubspotUI:** wrong case for trigger description ([8962c38](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/8962c38bcdd70a70e3786d3c5fac9d71117a328d))
- **integrationsUI:** fieldMapping layout done ([d09b59f](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/d09b59f1afca648c5f8f4afb757598521fbb6c4c))
- **integrationsUI:** structured project ([8de4ec3](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/8de4ec352d29b9dbc7fceb696008ad9d575eb510))
- **integrationsUI:** usersTab and sync status fully working ([1558b5d](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/1558b5d4942876c7a44da3e37480730f95ed3b54))

### Bug Fixes

- [BG-315](https://bloobirds.atlassian.net/browse/BG-315) added a boolean on the valuelogicrole search to avoid assign tab to not load ([15276de](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/15276deb77da84d86146d6b55e3a8f59e65962cf))
- **hubspotUI:** [[P21-332](https://bloobirds.atlassian.net/browse/P21-332)] refresh button now shows loader ([955e9af](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/955e9afe73365de528234f83482b7fd9bcab2d5e))
- **hubspotUI:** deleted debuggers ([2af7525](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/2af7525ddd0f7a207651ab12fa63f455a87116f3))
- **hubspotUI:** fix sync settings tab bugs ([bc12085](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/bc1208563882203d54ed069f2f3ace47f787cf2d))
- **hubspotUI:** fix sync settings tab bugs ([9e469fb](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/9e469fb46c856ff8e8e832269ba78dca2680b783))
- **hubspotUI:** fixed bug [P21-331](https://bloobirds.atlassian.net/browse/P21-331) ([ad55379](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/ad553798b655e74bc63a4ce4f3f2cf712e7bd66b))
- **hubspotUI:** fixed bugs ([04ff81c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/04ff81cd6ea0cbaf54bd88abecd602c891686ab8))
- **hubspotUI:** fixed bugs ([55dfdf4](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/55dfdf4941c2e04065e2bc015152c28c2ac8dd87))
- **hubspotUI:** removed console logs ([856f9ed](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/856f9edce586f0dbe3b73518d880658c0567ac42))
- changed the logic_role parsed name in useEmailVariables.js ([6922513](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/69225133b5a4c021981b67305270ccc43f5bc7bc)), closes [BG-317](https://bloobirds.atlassian.net/browse/BG-317)
- **hubspotUI:** deleted console log ([e61107e](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e61107e29fd952e3324607a3ee5e901347e6732e))
- **hubspotUI:** fix sync settings tab bugs ([3deba44](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/3deba4424066e9c90531317c84587e89c9f995b5))
- **hubspotUI:** fixed bugs [P21-335](https://bloobirds.atlassian.net/browse/P21-335), [P21-352](https://bloobirds.atlassian.net/browse/P21-352), [P21-585](https://bloobirds.atlassian.net/browse/P21-585), [P21-586](https://bloobirds.atlassian.net/browse/P21-586), [P21-587](https://bloobirds.atlassian.net/browse/P21-587), [P21-588](https://bloobirds.atlassian.net/browse/P21-588), [P21-601](https://bloobirds.atlassian.net/browse/P21-601) ([1ae87be](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/1ae87beb22bd7e0baf0441aaf7a86239b3ba2bb5))
- **hubspotUI:** fixed copy errors, now when enter wrong credentials for integration the callout error appears ([28ed2a7](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/28ed2a7f0300981a4ed23ad67eb481033c9d03b4))
- **hubspotUI:** fixed field mapping tab bugs ([f570cc9](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/f570cc93cd3412faee41ea726df6bba27664dfdc))
- **hubspotUI:** fixed lint errors ([f8cf546](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/f8cf546e418e3b01f8eebdba5d3dbe3bd674e6fc))
- **hubspotUI:** fixed lint errors ([1a6449c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/1a6449cf9fa3a85d7753c4fbcc565f813f41878d))
- **hubspotUI:** merged staging into staging3, merged Pr with bugs resolutions ([0b4fc07](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/0b4fc076328c559eb727ca5df8fcb878a0b96bdc))
- **integrationsUI:** fixed api library version ([e204f75](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e204f75befe99461621d74049eb80ce3e7b5807d))
- **integrationsUI:** merged last changes ([b92b4df](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/b92b4dffbe848bc67b87e92e3a5a9b18c2a20668))
- **webapp:** Added use of React.memo to avoid multiple rendering and and therefore the loss of focus when the select is expanded. ([643a6c5](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/643a6c55b5b79075f4f025b66060fce26f59b755))
- **webapp:** Need to compare by selected Lead. Moved OnClick function into component to make use of the lead. ([a1ccf48](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/a1ccf48874ca84e554b4fab1686c4235f5bfcac9))
- **webapp:** Search is made but pagination remains. Added setPage. ([2ca3879](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/2ca38791d3040149b12129b153ac6e71c2d85a01))
- When login out remove the cache of entities to avoid having the same entities of the previous account ([aee6e85](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/aee6e85829538d920166dc193924386e8d114b84))

## [1.8.0-preprod.1](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v1.7.3-preprod.2...v1.8.0-preprod.1) (2021-01-27)

### Features

- **hubspotUI:** building sync status template (WIP) ([9cad375](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/9cad375f66c740f11839ba37a4442598f72ce23d))
- **hubspotUI:** first steps of integrations layout (WIP) ([a26843f](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/a26843fdb80cd3356b0c88c418861c367f8b43b2))
- **hubspotUI:** wrong case for trigger description ([8962c38](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/8962c38bcdd70a70e3786d3c5fac9d71117a328d))
- **integrationsUI:** fieldMapping layout done ([d09b59f](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/d09b59f1afca648c5f8f4afb757598521fbb6c4c))
- **integrationsUI:** structured project ([8de4ec3](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/8de4ec352d29b9dbc7fceb696008ad9d575eb510))
- **integrationsUI:** usersTab and sync status fully working ([1558b5d](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/1558b5d4942876c7a44da3e37480730f95ed3b54))

### Bug Fixes

- **hubspotUI:** [[P21-332](https://bloobirds.atlassian.net/browse/P21-332)] refresh button now shows loader ([955e9af](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/955e9afe73365de528234f83482b7fd9bcab2d5e))
- **hubspotUI:** deleted console log ([e61107e](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e61107e29fd952e3324607a3ee5e901347e6732e))
- **hubspotUI:** deleted debuggers ([2af7525](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/2af7525ddd0f7a207651ab12fa63f455a87116f3))
- **hubspotUI:** fix sync settings tab bugs ([bc12085](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/bc1208563882203d54ed069f2f3ace47f787cf2d))
- **hubspotUI:** fix sync settings tab bugs ([9e469fb](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/9e469fb46c856ff8e8e832269ba78dca2680b783))
- **hubspotUI:** fix sync settings tab bugs ([3deba44](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/3deba4424066e9c90531317c84587e89c9f995b5))
- **hubspotUI:** fixed bug [P21-331](https://bloobirds.atlassian.net/browse/P21-331) ([ad55379](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/ad553798b655e74bc63a4ce4f3f2cf712e7bd66b))
- **hubspotUI:** fixed bugs ([04ff81c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/04ff81cd6ea0cbaf54bd88abecd602c891686ab8))
- **hubspotUI:** fixed bugs ([55dfdf4](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/55dfdf4941c2e04065e2bc015152c28c2ac8dd87))
- **hubspotUI:** fixed bugs [P21-335](https://bloobirds.atlassian.net/browse/P21-335), [P21-352](https://bloobirds.atlassian.net/browse/P21-352), [P21-585](https://bloobirds.atlassian.net/browse/P21-585), [P21-586](https://bloobirds.atlassian.net/browse/P21-586), [P21-587](https://bloobirds.atlassian.net/browse/P21-587), [P21-588](https://bloobirds.atlassian.net/browse/P21-588), [P21-601](https://bloobirds.atlassian.net/browse/P21-601) ([1ae87be](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/1ae87beb22bd7e0baf0441aaf7a86239b3ba2bb5))
- **hubspotUI:** fixed copy errors, now when enter wrong credentials for integration the callout error appears ([28ed2a7](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/28ed2a7f0300981a4ed23ad67eb481033c9d03b4))
- **hubspotUI:** fixed field mapping tab bugs ([f570cc9](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/f570cc93cd3412faee41ea726df6bba27664dfdc))
- **hubspotUI:** fixed lint errors ([f8cf546](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/f8cf546e418e3b01f8eebdba5d3dbe3bd674e6fc))
- **hubspotUI:** fixed lint errors ([1a6449c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/1a6449cf9fa3a85d7753c4fbcc565f813f41878d))
- **hubspotUI:** merged staging into staging3, merged Pr with bugs resolutions ([0b4fc07](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/0b4fc076328c559eb727ca5df8fcb878a0b96bdc))
- **hubspotUI:** removed console logs ([856f9ed](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/856f9edce586f0dbe3b73518d880658c0567ac42))
- **integrationsUI:** fixed api library version ([e204f75](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e204f75befe99461621d74049eb80ce3e7b5807d))
- **integrationsUI:** merged last changes ([b92b4df](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/b92b4dffbe848bc67b87e92e3a5a9b18c2a20668))

### [1.7.3-preprod.2](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v1.7.3-preprod.1...v1.7.3-preprod.2) (2021-01-20)

### Bug Fixes

- changed the logic_role parsed name in useEmailVariables.js ([6922513](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/69225133b5a4c021981b67305270ccc43f5bc7bc)), closes [BG-317](https://bloobirds.atlassian.net/browse/BG-317)

### [1.7.3-preprod.1](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v1.7.2...v1.7.3-preprod.1) (2021-01-13)

### Bug Fixes

- **webapp:** Added use of React.memo to avoid multiple rendering and and therefore the loss of focus when the select is expanded. ([643a6c5](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/643a6c55b5b79075f4f025b66060fce26f59b755))
- **webapp:** Need to compare by selected Lead. Moved OnClick function into component to make use of the lead. ([a1ccf48](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/a1ccf48874ca84e554b4fab1686c4235f5bfcac9))
- **webapp:** Search is made but pagination remains. Added setPage. ([2ca3879](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/2ca38791d3040149b12129b153ac6e71c2d85a01))
- When login out remove the cache of entities to avoid having the same entities of the previous account ([aee6e85](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/aee6e85829538d920166dc193924386e8d114b84))

### [1.7.2](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v1.7.1...v1.7.2) (2021-01-08)

### Bug Fixes

- partial fix of BG-319 on undefined date when no activities ([9bbee86](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/9bbee86cd10036e3e6fed1d7e0de27da62b700d4))

### [1.7.1](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v1.7.0...v1.7.1) (2021-01-05)

### Bug Fixes

- **tab:** fixed the infinite loop when downloading ([aaea8c8](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/aaea8c81690f2d2da81e0e2fc3ad903b31c86edf))
- tasks from cadence were limited by the backend to 10, now we increased the pageSize to avoid tasks not being shown ([c01a520](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/c01a520e348e396edc68a5cd6c1e045ee383edb8))

### [1.7.1-preprod.1](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v1.7.0...v1.7.1-preprod.1) (2021-01-05)

### Bug Fixes

- **tab:** fixed the infinite loop when downloading ([aaea8c8](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/aaea8c81690f2d2da81e0e2fc3ad903b31c86edf))
- tasks from cadence were limited by the backend to 10, now we increased the pageSize to avoid tasks not being shown ([c01a520](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/c01a520e348e396edc68a5cd6c1e045ee383edb8))

## [1.7.0](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v1.6.1...v1.7.0) (2020-12-27)

### Features

- **cadence:** added first attempts and fixed case of no action types ([65bbe87](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/65bbe87f1c22b6e4852762437fcdac746c089bfe))
- **cadence:** Cadence table uses tasks to display cadenceTable ([49d5abb](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/49d5abb94782070f01f11daf293d9f495189e012)), closes [BB-2707](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2707)
- **cadence:** Cadence table uses tasks to display cadenceTable ([f7a5c6f](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/f7a5c6f542d820892e7fac47be653e2d1e6c822c)), closes [BB-2707](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2707)
- **cadence:** Cadence table uses tasks to display cadenceTable ([9c0f306](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/9c0f306abf9a4830f6b5a802c94503f471c2eeed)), closes [BB-2707](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2707)

### Bug Fixes

- **cadence:** lint fix ([5372dc5](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/5372dc599c253d3ada0bb8f3df45761d27a5c68c))
- **webapp:** Avoid bottom buttons displacement with a new div using flex-grow ([93319c9](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/93319c95e3db3a6c375a7f89ada260f21425e466))
- **webapp:** now works on with out withoud dates ;) ([aabdf5b](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/aabdf5bf992fdd8d96688b48cd7a236d556bf40a))
- **webapp:** tasks without scheduled date are making the cadence crash ([78c052d](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/78c052d38ab6e1222af978b3361c59ece0f84dab))

## [1.7.0-preprod.4](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v1.7.0-preprod.3...v1.7.0-preprod.4) (2020-12-23)

### Bug Fixes

- **webapp:** Avoid bottom buttons displacement with a new div using flex-grow ([93319c9](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/93319c95e3db3a6c375a7f89ada260f21425e466))

## [1.7.0-preprod.3](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v1.7.0-preprod.2...v1.7.0-preprod.3) (2020-12-22)

### Bug Fixes

- **webapp:** now works on with out withoud dates ;) ([aabdf5b](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/aabdf5bf992fdd8d96688b48cd7a236d556bf40a))

## [1.7.0-preprod.2](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v1.7.0-preprod.1...v1.7.0-preprod.2) (2020-12-22)

### Bug Fixes

- **webapp:** tasks without scheduled date are making the cadence crash ([78c052d](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/78c052d38ab6e1222af978b3361c59ece0f84dab))

## [1.7.0-preprod.1](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v1.6.1...v1.7.0-preprod.1) (2020-12-21)

### Features

- **cadence:** added first attempts and fixed case of no action types ([65bbe87](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/65bbe87f1c22b6e4852762437fcdac746c089bfe))
- **cadence:** Cadence table uses tasks to display cadenceTable ([49d5abb](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/49d5abb94782070f01f11daf293d9f495189e012)), closes [BB-2707](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2707)
- **cadence:** Cadence table uses tasks to display cadenceTable ([f7a5c6f](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/f7a5c6f542d820892e7fac47be653e2d1e6c822c)), closes [BB-2707](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2707)
- **cadence:** Cadence table uses tasks to display cadenceTable ([9c0f306](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/9c0f306abf9a4830f6b5a802c94503f471c2eeed)), closes [BB-2707](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2707)

### Bug Fixes

- **cadence:** lint fix ([5372dc5](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/5372dc599c253d3ada0bb8f3df45761d27a5c68c))

### [1.6.1](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v1.6.0...v1.6.1) (2020-12-16)

### Bug Fixes

- **webapp:** [BB-2679](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2679) Cross data between leads and companies ([61ebbf5](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/61ebbf589bb51a8239e1c891873cc73a477b7639))

## [1.6.0](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v1.5.3...v1.6.0) (2020-12-16)

### Features

- **dependency:** upgraded react-api-lib to 0.5.1 ([50280c0](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/50280c0c68aa8c8a02a636adc1b555dbdfe745ae))
- **dependency:** upgraded react-api-lib to 0.5.1 ([6f83bc2](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/6f83bc27bbca845ae3e19cc17dc1d35f76c9c626))

* **dependency:** upgraded react-api-lib to 0.5.1 ([50280c0](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/50280c0c68aa8c8a02a636adc1b555dbdfe745ae))
* **dependency:** upgraded react-api-lib to 0.5.1 ([6f83bc2](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/6f83bc27bbca845ae3e19cc17dc1d35f76c9c626))
* **webapp:** added the new error pages for the contact view. ([1372396](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/13723968b85a685afa7d7fcd29da80e2b02e0f27)), closes [BB-2697](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2697)
* **webapp:** added the new error pages for the contact view. ([b0819d5](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/b0819d5b510d3d82c45a6d51a043d1a7954ef6e3)), closes [BB-2697](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2697)

### Bug Fixes

- **integrationsUI:** [BB-2689](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2689) Renders in Sync settings ([492f0a3](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/492f0a3349ce584abeb6fe5e29f2dcad14d22bde))
- **integrationsUI:** fixed api library version ([e3c7158](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e3c715887d96076fb75d42db370b1e22dcec3d91))
- **integrationsUI:** fixed build errors ([5a97afb](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/5a97afb3acc7f190c8dfb52ebb2cf3ca695aed96))
- **integrationsUI:** fixed lint error ([3eae442](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/3eae442a675804e825952a0b7bc9cf6b8f80ef4a))
- **integrationsUI:** fixed lint errors ([d6d4aff](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/d6d4affbf2f7225559d73d4e6cdf0a30271618c8))
- **integrationsUI:** merged staging ([6981cbb](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/6981cbbc6bf40f01c7f83a48108886892340380a))
- **integrationsUI:** pagination now working ([0c2d879](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/0c2d8799dd6a42374e85e63bbbef3cff7939e5c3))
- **integrationsUI:** sorting issue ([6d3d248](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/6d3d248d316adca5dfef3484fe57ad55b7ab6778))
- **webapp:** change the refresh, added the first attempt to the task card and added the overdue aggregation ([a8628ef](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/a8628ef3e4c2b487883d3f0ebe60cffc796e290c)), closes [BB-2697](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2697) [BB-2696](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2696) [BB-2559](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2559)
- **webapp:** fixed the connecitons ([4f3c8c7](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/4f3c8c7053e80bc67df1cf4af3296ddf640a544a))
- **webapp:** lint fix ([40abdcf](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/40abdcf699c9f10252a3c55887797f01b7056a8b))

## [1.6.0-preprod.5](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v1.6.0-preprod.4...v1.6.0-preprod.5) (2020-12-16)

### Bug Fixes

- **webapp:** [BB-2690](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2690) [CCF]If you add a meeting coming from the Correct Contact Flow the modal is not removed ([cd98203](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/cd982031e8e9ec8e7befcfa70bc4c67e91fc840b))
- **webapp:** [BB-2698](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2698) [CCF]When you receive an anonymous incoming call the Oops page pop up ([656e421](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/656e4219e653a0e7fd3edd2c3aa3666ee1536ecb))
- **webapp:** Nurturing & discarded reasons are not being saved in the company/lead field ([2381204](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/238120407c948e44908b2e0175bd21bea32e9b38))
- **webapp:** Nurturing & discarded reasons are not being saved in the company/lead field ([d85dc0b](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/d85dc0b8494cb922cff9cc7a1f548c8e11a392dc))
- **webapp:** remove test code ([0470dd0](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/0470dd091565d48caa4338e5ffa6aff10134afa9))

### [1.5.3](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v1.5.2...v1.5.3) (2020-12-16)

### Bug Fixes

- **webapp:** [BB-2690](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2690) [CCF]If you add a meeting coming from the Correct Contact Flow the modal is not removed ([cd98203](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/cd982031e8e9ec8e7befcfa70bc4c67e91fc840b))
- **webapp:** [BB-2698](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2698) [CCF]When you receive an anonymous incoming call the Oops page pop up ([656e421](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/656e4219e653a0e7fd3edd2c3aa3666ee1536ecb))
- **webapp:** Nurturing & discarded reasons are not being saved in the company/lead field ([2381204](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/238120407c948e44908b2e0175bd21bea32e9b38))
- **webapp:** Nurturing & discarded reasons are not being saved in the company/lead field ([d85dc0b](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/d85dc0b8494cb922cff9cc7a1f548c8e11a392dc))
- **webapp:** remove test code ([0470dd0](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/0470dd091565d48caa4338e5ffa6aff10134afa9))

## [1.6.0-preprod.4](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v1.6.0-preprod.3...v1.6.0-preprod.4) (2020-12-15)

### Bug Fixes

- **integrationsUI:** BB-2689 Renders in Sync settings ([492f0a3](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/492f0a3349ce584abeb6fe5e29f2dcad14d22bde))
- **integrationsUI:** fixed api library version ([e3c7158](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e3c715887d96076fb75d42db370b1e22dcec3d91))
- **integrationsUI:** fixed build errors ([5a97afb](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/5a97afb3acc7f190c8dfb52ebb2cf3ca695aed96))
- **integrationsUI:** fixed lint error ([3eae442](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/3eae442a675804e825952a0b7bc9cf6b8f80ef4a))
- **integrationsUI:** fixed lint errors ([d6d4aff](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/d6d4affbf2f7225559d73d4e6cdf0a30271618c8))
- **integrationsUI:** merged staging ([6981cbb](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/6981cbbc6bf40f01c7f83a48108886892340380a))
- **integrationsUI:** pagination now working ([0c2d879](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/0c2d8799dd6a42374e85e63bbbef3cff7939e5c3))
- **integrationsUI:** sorting issue ([6d3d248](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/6d3d248d316adca5dfef3484fe57ad55b7ab6778))
- **webapp:** change the refresh, added the first attempt to the task card and added the overdue aggregation ([a8628ef](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/a8628ef3e4c2b487883d3f0ebe60cffc796e290c))
- **webapp:** lint fix ([40abdcf](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/40abdcf699c9f10252a3c55887797f01b7056a8b))

## [1.6.0-preprod.3](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v1.6.0-preprod.2...v1.6.0-preprod.3) (2020-12-15)

### Bug Fixes

- **webapp:** fixed the connecitons ([4f3c8c7](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/4f3c8c7053e80bc67df1cf4af3296ddf640a544a))

## [1.6.0-preprod.2](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v1.6.0-preprod.1...v1.6.0-preprod.2) (2020-12-15)

### Features

- **webapp:** added the new error pages for the contact view. ([1372396](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/13723968b85a685afa7d7fcd29da80e2b02e0f27))
- **webapp:** added the new error pages for the contact view. ([b0819d5](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/b0819d5b510d3d82c45a6d51a043d1a7954ef6e3))

## [1.6.0-preprod.1](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v1.5.2...v1.6.0-preprod.1) (2020-12-15)

### Features

- **dependency:** upgraded react-api-lib to 0.5.1 ([50280c0](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/50280c0c68aa8c8a02a636adc1b555dbdfe745ae))
- **dependency:** upgraded react-api-lib to 0.5.1 ([6f83bc2](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/6f83bc27bbca845ae3e19cc17dc1d35f76c9c626))

### [1.5.2](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v1.5.1...v1.5.2) (2020-12-15)

### Bug Fixes

- **webapp:** added the new list with the start cadence tasks ([0a84ec2](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/0a84ec29cff6d0b835d5a42652bb2fabcebdc8a5)), closes [BB-2694](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2694)

### [1.5.2-preprod.1](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v1.5.1...v1.5.2-preprod.1) (2020-12-15)

### Bug Fixes

- **webapp:** added the new list with the start cadence tasks ([0a84ec2](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/0a84ec29cff6d0b835d5a42652bb2fabcebdc8a5)), closes [BB-2694](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2694)

### [1.5.1](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v1.5.0...v1.5.1) (2020-12-14)

### Bug Fixes

- **integration logs:** Now integration log table loads regardless of the log count. ([b9a0484](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/b9a048430de9b77081670125aae0eb274789473f)), closes [BB-2692](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2692)

## [1.5.0](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v1.4.1...v1.5.0) (2020-12-13)

### Features

- **overdue:** change queries for new tasks status ([e2a558d](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e2a558d89235e7caf6ba81e54abb8d6591eb84f3))
- **overdue:** fixed lint errors ([126d864](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/126d864cb380b090a3f233f2fbff34aa839cb82f))

### Bug Fixes

- **integrationsUI:** [BB-2667](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2667) [BB-2666](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2666) ([0dbebc3](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/0dbebc3db12e64c508c41d22b0319390baf40d79))
- **integrationsUI:** [BB-2668](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2668) ([5599c33](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/5599c33773387baca0b4b97a144f59ce885d0a55))
- **integrationsUI:** [BB-2668](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2668) ([76a2f5a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/76a2f5a60c23fdadfad51641ee565198d8b10afb))
- **integrationsUI:** [BB-2668](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2668) ([0a6ecfa](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/0a6ecfaee8c160459afbf73f85d281adef892ae5))
- **integrationsUI:** date sorting, added new actions ([ddc0377](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/ddc037790d4de47c6c0c918fd055d8a009c489f8))

## [1.5.0-preprod.2](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v1.5.0-preprod.1...v1.5.0-preprod.2) (2020-12-14)

### Bug Fixes

- **webapp:** added the new list with the start cadence tasks ([0a84ec2](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/0a84ec29cff6d0b835d5a42652bb2fabcebdc8a5)), closes [BB-2694](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2694)

## [1.5.0-preprod.1](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v1.4.1...v1.5.0-preprod.1) (2020-12-09)

### Features

- **overdue:** change queries for new tasks status ([e2a558d](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e2a558d89235e7caf6ba81e54abb8d6591eb84f3))
- **overdue:** fixed lint errors ([126d864](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/126d864cb380b090a3f233f2fbff34aa839cb82f))

### Bug Fixes

- **integrationsUI:** [BB-2667](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2667) [BB-2666](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2666) ([0dbebc3](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/0dbebc3db12e64c508c41d22b0319390baf40d79))
- **integrationsUI:** [BB-2668](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2668) ([5599c33](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/5599c33773387baca0b4b97a144f59ce885d0a55))
- **integrationsUI:** [BB-2668](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2668) ([76a2f5a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/76a2f5a60c23fdadfad51641ee565198d8b10afb))
- **integrationsUI:** [BB-2668](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2668) ([0a6ecfa](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/0a6ecfaee8c160459afbf73f85d281adef892ae5))
- **integrationsUI:** date sorting, added new actions ([ddc0377](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/ddc037790d4de47c6c0c918fd055d8a009c489f8))

### [1.4.1](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v1.4.0...v1.4.1) (2020-12-09)

### Bug Fixes

- **dialer:** fixed the max length and the copy/paste on macs ([2a5f75a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/2a5f75a40e6cd88acd59d059b696fb8101266022)), closes [BB-2678](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2678) [BB-2683](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2683)

## [1.4.0](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v1.3.2...v1.4.0) (2020-12-04)

### Features

- **webapp:** add new svg ([aeeb57c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/aeeb57c6e2e28c122a4d712fbbc9454631654768))
- **webapp:** improve the code and uses the new component ([68038f4](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/68038f4f513789aa1eb848e0fd5ab4a31e966605))
- **webapp:** New component tho show the error page ([d393caf](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/d393caf1f5561749bf2f4608e2007f807f535cd0))

### Bug Fixes

- **webapp:** Add leads subhome crashes ([d11753f](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/d11753fe2dc5977eafd4ca534b0814fc7e844f87)), closes [BB-2677](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2677)
- **webapp:** add the new icon ([b6ae774](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/b6ae774a61351726a6555c517baeb905aac20e1a))
- **webapp:** fix lint errors ([4ae8bca](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/4ae8bca381cbd55df9df49a33a70ea6d930adedc))
- **webapp:** improve the code ([8d011b1](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/8d011b1c8a68f53a962948788b27ab02da0c03f8))
- **webapp:** improve the code ([b380a4e](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/b380a4e677ea3f9eccb7cfb94247e12d633e377a))
- **webapp:** improve the design ([1af2f9a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/1af2f9a0ed1a96517cf5664f912dc16a1cae492d))
- **webapp:** Senty error. Cannot read property 'id' of undefined when we try to save the call result ([a842083](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/a842083b7f7aa0677cf52b090f515b6a2fcc32d9))
- **webapp:** Senty error. Cannot read property 'sort' of undefined. When the account doesn't have pitches we can't sort it ([e1ad5ed](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e1ad5ed9131ac76a679b739404d7761f8323d736))
- **webapp:** when we made a call to a number directly, i.e., we don't have a lead, the note step gives an error ([b872558](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/b8725586784d29aad7211535f29f7d6e04379233))
- **webapp:** when we try to access to a company that not exists we show an error page ([903ebc2](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/903ebc20d3a8e37066a9f6a34e7c79beb8c1d37a))
- list keep loading when creating new account ([df7ae31](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/df7ae313b61098b30d32a765df97ad484b692030))
- updated component library ([4acac6c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/4acac6c43774cf9f26afdb376707444befaa4428))

## [1.4.0-preprod.3](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v1.4.0-preprod.2...v1.4.0-preprod.3) (2020-12-04)

### Bug Fixes

- **integrationsUI:** date sorting, added new actions ([ddc0377](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/ddc037790d4de47c6c0c918fd055d8a009c489f8))

## [1.4.0-preprod.2](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v1.4.0-preprod.1...v1.4.0-preprod.2) (2020-12-04)

### Features

- **overdue:** fixed lint errors ([126d864](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/126d864cb380b090a3f233f2fbff34aa839cb82f))

### Bug Fixes

- **integrationsUI:** [BB-2667](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2667) [BB-2666](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2666) ([0dbebc3](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/0dbebc3db12e64c508c41d22b0319390baf40d79))
- **integrationsUI:** [BB-2668](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2668) ([5599c33](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/5599c33773387baca0b4b97a144f59ce885d0a55))
- **integrationsUI:** [BB-2668](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2668) ([76a2f5a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/76a2f5a60c23fdadfad51641ee565198d8b10afb))
- **integrationsUI:** [BB-2668](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2668) ([0a6ecfa](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/0a6ecfaee8c160459afbf73f85d281adef892ae5))

## [1.4.0-preprod.1](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v1.3.1-preprod.3...v1.4.0-preprod.1) (2020-12-01)

### Features

- **overdue:** change queries for new tasks status ([e2a558d](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e2a558d89235e7caf6ba81e54abb8d6591eb84f3))

### [1.3.2](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v1.3.1...v1.3.2) (2020-12-03)

### Bug Fixes

- **email activity:** added email tracking pixel exclusion ([9d9d815](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/9d9d815d6272a721b0e712733f25e012e75316b3)), closes [BB-2669](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2669)

### [1.3.1](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v1.3.0...v1.3.1) (2020-11-30)

### Bug Fixes

- **webapp:** added the proper query preprocess to the old assign QC filters ([e4c7cb2](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e4c7cb2df877648d4adca7d8fce92532be7e8220)), closes [BB-2671](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2671)
- **webapp:** Added validation for changes to avoid the block of refreshing. Also some refactoring has been done ([7c93e5d](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/7c93e5de05a625142db391ec8337b849b5f657d5)), closes [BB-2482](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2482)
- **webapp:** avoid select dropdown re-rendering ([fd01676](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/fd016762f7ad40ef40075a4c36bf9ac6059d2f33)), closes [BB-2482](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2482)
- **webapp:** fix on the subscriptions ([33732db](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/33732dbf402b9756d68107a57142adc50492222d)), closes [BB-2642](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2642)
- **webapp:** fix on the subscriptions ([f961dd5](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/f961dd5a04b3b0dcb85434c0df879452b8881c85)), closes [BB-2642](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2642)
- **webapp:** Incorrect order in "Did you get to pitch?" button ([2662d98](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/2662d98badcfd7d0098f9573a714ed548c2fd5c2)), closes [BB-2652](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2652)
- **webapp:** Leads label must not be plural ([df1ef45](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/df1ef45c8ad82495c2753de1af3e6a2abc163394)), closes [BB-2643](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2643)
- **webapp:** sending only the events if needed. ([44a9aab](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/44a9aabaaa81063093e2aa27fd49f36ceef57f3a)), closes [BB-2642](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2642)
- **webapp:** The [Lead without company] and [Status] label should together be centered in the middle of the modal ([8143b63](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/8143b63e4f1497abdb39b2673d1bb6de585b3238)), closes [BB-2640](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2640)
- **webapp:** when click in nurturing or discarded of a company, the lead reasons select is empty ([c187ae9](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/c187ae9d45a683234fbe65528d2b45f36b0e048f)), closes [BB-2653](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2653)
- improve the code ([3501438](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/3501438a3632a26a846131cdd712ed20b8f44354))
- **webapp:** When we select a status for the company and the lead and we click save, if we go back from the next step modal, the contacted status is set by default instead of the one we had set ([1d1957f](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/1d1957fe20c69e70cc8c2f17b28a20a365b72267)), closes [BB-2644](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2644)

### [1.3.1-preprod.3](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v1.3.1-preprod.2...v1.3.1-preprod.3) (2020-11-30)

### Bug Fixes

- **webapp:** added the proper query preprocess to the old assign QC filters ([e4c7cb2](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e4c7cb2df877648d4adca7d8fce92532be7e8220)), closes [BB-2671](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2671)

### [1.3.1-preprod.2](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v1.3.1-preprod.1...v1.3.1-preprod.2) (2020-11-30)

### Bug Fixes

- **webapp:** Added validation for changes to avoid the block of refreshing. Also some refactoring has been done ([7c93e5d](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/7c93e5de05a625142db391ec8337b849b5f657d5)), closes [BB-2482](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2482)
- **webapp:** avoid select dropdown re-rendering ([fd01676](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/fd016762f7ad40ef40075a4c36bf9ac6059d2f33)), closes [BB-2482](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2482)
- **webapp:** Incorrect order in "Did you get to pitch?" button ([2662d98](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/2662d98badcfd7d0098f9573a714ed548c2fd5c2)), closes [BB-2652](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2652)
- **webapp:** Leads label must not be plural ([df1ef45](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/df1ef45c8ad82495c2753de1af3e6a2abc163394)), closes [BB-2643](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2643)
- **webapp:** The [Lead without company] and [Status] label should together be centered in the middle of the modal ([8143b63](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/8143b63e4f1497abdb39b2673d1bb6de585b3238)), closes [BB-2640](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2640)
- **webapp:** when click in nurturing or discarded of a company, the lead reasons select is empty ([c187ae9](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/c187ae9d45a683234fbe65528d2b45f36b0e048f)), closes [BB-2653](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2653)
- improve the code ([3501438](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/3501438a3632a26a846131cdd712ed20b8f44354))
- **webapp:** When we select a status for the company and the lead and we click save, if we go back from the next step modal, the contacted status is set by default instead of the one we had set ([1d1957f](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/1d1957fe20c69e70cc8c2f17b28a20a365b72267)), closes [BB-2644](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2644)

### [1.3.1-preprod.1](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v1.3.0...v1.3.1-preprod.1) (2020-11-30)

### Bug Fixes

- **webapp:** fix on the subscriptions ([33732db](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/33732dbf402b9756d68107a57142adc50492222d)), closes [BB-2642](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2642)
- **webapp:** fix on the subscriptions ([f961dd5](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/f961dd5a04b3b0dcb85434c0df879452b8881c85)), closes [BB-2642](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2642)
- **webapp:** sending only the events if needed. ([44a9aab](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/44a9aabaaa81063093e2aa27fd49f36ceef57f3a)), closes [BB-2642](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2642)

## [1.3.0](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v1.2.1...v1.3.0) (2020-11-27)

### Features

- **integrationsUI:** fixed copy paste detector ([daf77a6](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/daf77a6e5452e3f56c1aa070c2caeb28b12b4004))
- **integrationsUI:** fixed copy paste detector ([8f7d528](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/8f7d528abb99c9e2e90eb94f808d9ce8cea0c045))
- **integrationsUI:** fixed copy paste detector ([d4cbf1e](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/d4cbf1ea51216c32a79104f61a97b986022a5705))
- **integrationsUI:** fixed last bugs review ([e04bc1e](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e04bc1e369d05416bde157697211de7e0236ff0c))
- **integrationsUI:** fixed last bugs review ([0ff2ba0](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/0ff2ba02bf67ec9eacb22fe0d1c6acc2a75122d3))
- **integrationsUI:** fixed last bugs review ([c6f81b3](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/c6f81b31a77237f6ac1868c9da57291d10d56476))
- **integrationsUI:** fixed lint ([3fddbac](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/3fddbacfdf8ec46e5d6a2334b511ba45ce4700fe))
- **integrationsUI:** fixed lint errors ([ddfece8](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/ddfece888005613d8780d68397d879f4a09cecd5))
- **integrationsUI:** fixed lint problems ([1760e9b](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/1760e9b788e5b38f68dc2134719e8f95c76fc4bf))
- **integrationsUI:** fixed second product review ([55edf0c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/55edf0c697cad7c033f43afe0b23b869b71819ac))
- **integrationsUI:** fixed second product review ([8ef675a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/8ef675ac6f1d55dd0ab72d73b4c2d8d85a07a379))
- **integrationsUI:** fixed second product review ([e296ae6](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e296ae6da74b6966cba08c71fd5f1d824a2a6d64))
- **integrationsUI:** mapped route to tabs ([0ade6a6](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/0ade6a68ff3ad9b5ce44ef2ee909851c50ec4e70))

### [1.2.2-preprod.1](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v1.2.1...v1.2.2-preprod.1) (2020-11-26)

### Bug Fixes

- **webapp:** fix on the subscriptions ([33732db](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/33732dbf402b9756d68107a57142adc50492222d)), closes [BB-2642](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2642)
- **webapp:** fix on the subscriptions ([f961dd5](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/f961dd5a04b3b0dcb85434c0df879452b8881c85)), closes [BB-2642](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2642)
- **webapp:** sending only the events if needed. ([44a9aab](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/44a9aabaaa81063093e2aa27fd49f36ceef57f3a)), closes [BB-2642](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2642)

### [1.2.1](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v1.2.0...v1.2.1) (2020-11-26)

### Bug Fixes

- **webapp:** In the call result modal, when click in Next button the call result valus is not saved ([25c12fd](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/25c12fd3fa2f8c6321759588f74373d0005180ca)), closes [BB-2656](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2656)

### [1.2.1-preprod.1](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v1.2.0...v1.2.1-preprod.1) (2020-11-26)

### Bug Fixes

- **webapp:** fix on the subscriptions ([33732db](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/33732dbf402b9756d68107a57142adc50492222d)), closes [BB-2642](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2642)
- **webapp:** fix on the subscriptions ([f961dd5](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/f961dd5a04b3b0dcb85434c0df879452b8881c85)), closes [BB-2642](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2642)
- **webapp:** sending only the events if needed. ([44a9aab](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/44a9aabaaa81063093e2aa27fd49f36ceef57f3a)), closes [BB-2642](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2642)

## [1.2.0](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v1.1.0...v1.2.0) (2020-11-25)

### Features

- **webapp:** added the task description along with the new styles ([109eadc](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/109eadc345b9401e8a8f97e574bb3167b522d9a9)), closes [BB-2062](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2062)
- **webapp:** added the task description along with the new styles (WIP) ([1d53268](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/1d53268708838d15d8b69ba50c46563cb5ba042b)), closes [BB-2062](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2062)
- **webapp:** fixed the TM icons and the resize ([f2179c6](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/f2179c6059d6fec448c2b51758e26f4bf1a1cd3c)), closes [BB-2128](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2128)
- **webapp:** Modify the Change status layout ([f50aef1](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/f50aef1f5d5a1131fe5e46336e30419dae58fd8e))
- **webapp:** upgrade version of the components library ([ca64e7c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/ca64e7c63eecce5644591aeff7bc232823e2f925))
- [[BB-2496](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2496)] New tooltips appearing when rolling over the labels. Info icon with tooltip added at subtitle. ([5acf673](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/5acf673ba21ee006b0490bdaa6bcee6dd3924408))
- [[BB-2496](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2496)]. Corrected text. ([94b6aa0](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/94b6aa037fb41a790196837308d25fd6c4828f81))
- [[BB-2514](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2514)] callResultModal.container.js created to pass a dispatch into the view. ([501dcb0](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/501dcb0c885a1ae81bf539826030fe249fc3a900))
- [[BB-2515](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2515)] More refactoring: Usage of redux removed. Redux references removed. ([0207b8a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/0207b8af3bf46719b95fd08d3fac2df6a24c8131))
- [[BB-2515](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2515)] Make use of new libraries. Merge content where needed. Removed unnecessary files. New module css added. commons renamed to CalendarModal.utils.js ([23c6d7d](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/23c6d7db30a228df106c098553efb4521b72c641))
- [[BB-2515](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2515)] More refactoring. ([a84e09a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/a84e09a2e827cfb6603184e8b105b518cbd5d332))
- [[BB-2515](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2515)]. Little old bug fixed. In case no time is selected by default we should use the current date and time. ([4a92bda](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/4a92bda57af01522a15913bc5bfa3b867a0f09e2))
- [[BB-2515](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2515)]. Little old bug fixed. In case no time is selected by default we should use the current date and time. ([231393c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/231393cf04979c7f430cb9cc3571422e4b79f059))
- [[BB-2524](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2524)] Go to Note and Schedule in case of unsucsesfull call. ([0903c2b](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/0903c2bf3ccd80527d03518e99c58636f928f29a))
- [[BB-2524](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2524)] removed unused const ([1c5d3c6](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/1c5d3c6c26acd7a0cb7aa9635f4781f31922219f))
- add DatePicker into Schedule Next step modal. Also, fix some layout issues. ([9a33886](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/9a338862a2d00553be5497841b07ed49fe6a318a))
- Add nurturing and discarded reason input for company column ([19dd24d](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/19dd24db68e6cf2ff582fbb6d4922473ab41a1c8))
- add the icon in the warning message ([feeb7f8](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/feeb7f817d0f30da4cd0b0460957173184a45ad6))
- Add the save logic in Next button ([9e353fc](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/9e353fc062b3c04a8660ae14eb35de833b1ad1d5))
- Add warning for different cases ([ae48d9c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/ae48d9c82a41a9d47b30386e32cf713b6ba1b889))
- change the labels by radio buttons ([814dc5e](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/814dc5e6b1951c5541f8f8ba668fd3faf3d3e12f))
- create a machine for the lead and the company status ([ed4f950](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/ed4f95098316316005ef3343846ad51ce1562ceb))
- create test for the machine ([1b9504b](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/1b9504becad6d389bdfec6f5709c5903ba5916cb))
- create the new modal and fill the Recoil state when complete the fields ([6e269e8](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/6e269e82feb834364476f5c84ca2bc21cf623213))
- improve the code ([d42490a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/d42490a69d968ff177215576170f3c6b36f1298d))
- improve the code. Add constants ([28b0415](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/28b041577cff11bc93756d3fdf757e50af8004c5))
- improve the code. Add constants ([3983065](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/3983065ea3f1c863eb84dc48a10ef96c05d1e42c))
- improve the tests ([8d5cca6](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/8d5cca6a0b829fc02479be4539d96deeee294fa2))
- include the new step ([990a4ff](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/990a4ff54170f02677abd8e175adf1c3ce4a8385))
- Modify the call result flow to don't show the Task modal ([470aadb](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/470aadb53a9bae9af72b0e2a1460ea75d3426e74))
- Modify the call result flow to show the Add note & QQ when the call result is Approach or Gatekeeper ([38b4b89](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/38b4b89d0ef7e8b21b43982c17f520c50db6fa01))
- Modify the step 'Update Status' to remove the Company status fields ([7b8091b](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/7b8091b95c900f15027bf2f4ed149e13e245cf3d))
- Open 'Create Activity' modal when the company status is meeting ([d951e0b](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/d951e0bd373f221d5b96e4892aeb6f97aee43bdf))
- Pitch input element modifications ([64565fb](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/64565fb529551afc4acd40d8db10bdc07ca7cd55))
- Rename old component to ChangeStatus. ([23fa81d](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/23fa81d702706fdd6ed94b4103e03239ff372f93))
- update the components library ([253c5e2](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/253c5e2a598cbed753eb7f821a75212fd32c9ea2))
- use the new machine in the change status step ([c7bbf7e](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/c7bbf7e31c3d7960459396b2e3778b6a34bee6c6))

### Bug Fixes

- **prospect:** Fix ready to prospect Oops, date ([55ce9c8](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/55ce9c830ad22af7c1a0d4fafd6749c259647f4c))
- **webapp:** It is not possible to make 2 calls in a row to a lead without a company (Dialer disabled) ([da5988e](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/da5988e4742e633ae344a616ec059c441aa80487)), closes [BB-2639](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2639)
- **webapp:** [BB-2631](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2631) Selectable time dates in the call result are wrong when call result is not correct contact ([5e67f6b](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/5e67f6b3299e35376486a784dedf5d594afbb987))
- **webapp:** \* Change title for leads with no company. ([41adfd4](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/41adfd4ab4d75a2469ff107312798c2fe953018a)), closes [BB-2637](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2637) [BB-2638](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2638)
- **webapp:** fixed the deliver companies style ([8706432](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/87064327c4b0648f3e31f2238f93903d644e8495)), closes [BB-2128](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2128)
- **webapp:** fixed the style of the header without tasks for today ([b4edb54](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/b4edb5407dbb6b18d41f21105f52deb9697b2d7c))
- [[BB-2567](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2567)] Button text logic fixed. ([d9f9e69](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/d9f9e692b94dae45fe171c21f89d8fd66cdae33c))
- BB Crashes when using filters and changing tab ([251848c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/251848cda67dd4cf1ecd6d3c589dccdb0a89d6b0))
- **webapp:** \* Change title for leads with no company. ([1c333b8](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/1c333b82391ab2374e368fc1fee972ba1cca90f7)), closes [BB-2637](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2637) [BB-2638](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2638)
- Bloobirds crashes when trying to create a next step for a lead without company ([b79564d](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/b79564d6dfc6f524309f230753b7ca7469f160dc)), closes [BB-2633](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2633)
- **webapp:** fixed re-renders in CallResult modal ([681ac91](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/681ac91ab559d9f1d530d1c5c42202aff2dbb33a))
- **webapp:** fixed typo on comparison for 'engaged' scheduleShortTimes ([afa3c06](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/afa3c06186c5e82719001332ec0a034ba9b3e2a4)), closes [BB-2613](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2613)
- **webapp:** When lead has no company associated the titles on the modals must refer to the lead. ([a295b4d](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/a295b4d5c3f74d0453be7a8d7fe756cd27b3e0b3)), closes [BB-2617](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2617)
- **webapp:** When the call result is not correct contact, in the next step is appearing "null company" instead of the status of the company ([769cda9](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/769cda90cdf8f0d9934b3ffdafc20d211381cd8e))
- **webapp:** wrong selected time when the call result is not succesful ([e6f7ebc](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e6f7ebc22759bb63b40edb86fd89cecffc669fe8))
- [[BB-2564](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2564)]: Lead in nurturing and discarded will not syncro with company ([c005f72](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/c005f728285691653079ef95fabc88129d7bbd29))
- [[BB-2564](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2564)]: Tests fixed. ([43da367](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/43da36711706ea9b0dc43864d45025d5dc0bc674))
- [[BB-2570](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2570)] text amended ([102e23d](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/102e23dd353f5ff2928fd026a966871de2834260))
- [[BB-2579](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2579)]: Add question mark in title ([84b52af](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/84b52af707b581b97867355a145af08d757b2bfc))
- [[BB-2580](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2580)] In case company is undefined no step is set after the note. ([75e8488](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/75e84882f810a84e1ffd4c50f138d68e250c0823))
- [BB-2569](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2569) "Add a title" should be replaced with "Add a title _" because its a required field & "Leads" should be replaced by "Lead _" ([2825f77](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/2825f77ed43fe91a2afc0b7748e131bbaa79e6fe))
- [BB-2574](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2574) The width of the "Date and time" + the width of the "Lead \*" input should be the same width as the "Add a title" input ([c35a00a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/c35a00a219dde844ac4ea0a38a985b5bbaa74e3d))
- [BB-2575](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2575) The preconfigured times for the "Schedule a next step for NURTURING company" company should be different than for ENGAGED and CONTACTED companies ([5a0c4a2](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/5a0c4a2ac02c1dd7f8f6c730f5f641b737823974))
- [BB-2581](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2581) When we set a calendar event after the call (schedule or meeting task) by default lenght should be 30 min ([981da61](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/981da61bf916293923e24233a902d65f676cb51e))
- [BB-2582](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2582) The email of the account executive should be added to the Google Calendar event ([bb96e19](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/bb96e19768352e637fa30e727131fbe790181e0e))
- [BB-2588](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2588) Currently when the user selects "NO" in the "Did you get to pitch?" question, the "Pitch / Snippet used" disappears but if you have selected a value before (When you click yes) the value is saved in the activity ([ce6ee4d](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/ce6ee4d6d4300de18f36f3f73f756d725ffa5a1e))
- [BB-2592](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2592) Switching from NO to YES should NOT change the vertical position of the YES and NO buttons ([faca348](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/faca3484effabddea28b7b18b8e58f0aafcbc9d9))
- [BB-2605](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2605) Incorrect input text in the modal fo nurturing/discarded reasons ([f184970](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/f184970efe1e7a778e22b33197f6addef5a77c46))
- [BB-2614](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2614) In the incoming calls of a registered lead, the call result is not appearing after the call ([e401299](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e401299e836ff3127104c72163b6477693d7cd6a))
- 404 error when we try to get the Company info ([3f8faab](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/3f8faab8092be2bd5496b21cc5b268a085eb0dc3))
- Add new dependency in the lead/company statuses ([a343ef3](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/a343ef388afc0a5011ff58c494f147cdefce0db2))
- change placeholder for lead field ([babc0f1](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/babc0f16bc6ae5ed4260d3454a5e7a8fc2964c7f))
- change the color of the info icon ([55f648a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/55f648a23b0c8b8c20822445dc63db70ba98aaf9))
- change the machine states for adapt it to the acceptance criteria ([20e823b](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/20e823bd24f8cd4d682bfc7f5a8d381642f92f82))
- change type of data when the value not exists ([b671839](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/b6718398d4bb6d35b50bc919f6eba9733163a0d2))
- error 500 when saves the notes ([a5a6063](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/a5a60635f1b3768c97aa0462ccca66b4e7e9049b))
- eslint error ([59310c1](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/59310c1a68c1af83b322385374d628babecef746))
- eslint errors ([01222fe](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/01222fef4869a5441678a9eae27ca4327d280b47))
- fix the test of changeStatus machine ([b869bfc](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/b869bfceb66f52f8664e5fe902d2e4eb4ed80ed0))
- import useMemo. Error after resolve a merge conflict ([959d5ca](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/959d5ca9f00bdea7831c1114fb273e6644495ce5))
- Order the pitches questions ([ccb8f6d](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/ccb8f6daf460d4896c34a33c552dfe178e64eea2))
- remove console ([1eaedd4](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/1eaedd4d260c1b796efd022d8591a379418fbfc1))
- some visual fixes ([8ad4f47](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/8ad4f471b8a56ee0bac35f780caa0d310e087d82))
- TEXT arrenged ([1ff87c6](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/1ff87c60445827ea42710763914184366baea5df))
- TEXT arrenged ([e23c582](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e23c5824343d17280420f997fc6f196d0751d706))
- the modal 'Next step' is not closed ([808c171](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/808c1712bb82d2ff49ea3755c908557c8524b143))
- the select of leads are empty in Next Step modal ([6f38cfe](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/6f38cfeefceed176b07785d60ddaa5f4e6b54b8a))
- upgrade the components library version ([8c0b068](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/8c0b068a7f572a4451aa7d7b8c8b218331274dac))
- warning width was incorrect ([65949ca](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/65949ca58f4ae04510c6122e061e59c229a967ff))

## [1.2.0-preprod.3](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v1.2.0-preprod.2...v1.2.0-preprod.3) (2020-11-24)

### Features

- **webapp:** Modify the Change status layout ([f50aef1](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/f50aef1f5d5a1131fe5e46336e30419dae58fd8e))
- **webapp:** upgrade version of the components library ([ca64e7c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/ca64e7c63eecce5644591aeff7bc232823e2f925))
- [[BB-2496](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2496)] New tooltips appearing when rolling over the labels. Info icon with tooltip added at subtitle. ([5acf673](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/5acf673ba21ee006b0490bdaa6bcee6dd3924408))
- [[BB-2496](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2496)]. Corrected text. ([94b6aa0](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/94b6aa037fb41a790196837308d25fd6c4828f81))
- [[BB-2514](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2514)] callResultModal.container.js created to pass a dispatch into the view. ([501dcb0](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/501dcb0c885a1ae81bf539826030fe249fc3a900))
- [[BB-2515](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2515)] More refactoring: Usage of redux removed. Redux references removed. ([0207b8a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/0207b8af3bf46719b95fd08d3fac2df6a24c8131))
- [[BB-2515](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2515)] Make use of new libraries. Merge content where needed. Removed unnecessary files. New module css added. commons renamed to CalendarModal.utils.js ([23c6d7d](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/23c6d7db30a228df106c098553efb4521b72c641))
- [[BB-2515](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2515)] More refactoring. ([a84e09a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/a84e09a2e827cfb6603184e8b105b518cbd5d332))
- [[BB-2515](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2515)]. Little old bug fixed. In case no time is selected by default we should use the current date and time. ([4a92bda](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/4a92bda57af01522a15913bc5bfa3b867a0f09e2))
- [[BB-2515](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2515)]. Little old bug fixed. In case no time is selected by default we should use the current date and time. ([231393c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/231393cf04979c7f430cb9cc3571422e4b79f059))
- [[BB-2524](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2524)] Go to Note and Schedule in case of unsucsesfull call. ([0903c2b](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/0903c2bf3ccd80527d03518e99c58636f928f29a))
- [[BB-2524](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2524)] removed unused const ([1c5d3c6](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/1c5d3c6c26acd7a0cb7aa9635f4781f31922219f))
- add DatePicker into Schedule Next step modal. Also, fix some layout issues. ([9a33886](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/9a338862a2d00553be5497841b07ed49fe6a318a))
- Add nurturing and discarded reason input for company column ([19dd24d](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/19dd24db68e6cf2ff582fbb6d4922473ab41a1c8))
- add the icon in the warning message ([feeb7f8](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/feeb7f817d0f30da4cd0b0460957173184a45ad6))
- Add the save logic in Next button ([9e353fc](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/9e353fc062b3c04a8660ae14eb35de833b1ad1d5))
- Add warning for different cases ([ae48d9c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/ae48d9c82a41a9d47b30386e32cf713b6ba1b889))
- change the labels by radio buttons ([814dc5e](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/814dc5e6b1951c5541f8f8ba668fd3faf3d3e12f))
- create a machine for the lead and the company status ([ed4f950](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/ed4f95098316316005ef3343846ad51ce1562ceb))
- create test for the machine ([1b9504b](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/1b9504becad6d389bdfec6f5709c5903ba5916cb))
- create the new modal and fill the Recoil state when complete the fields ([6e269e8](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/6e269e82feb834364476f5c84ca2bc21cf623213))
- improve the code ([d42490a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/d42490a69d968ff177215576170f3c6b36f1298d))
- improve the code. Add constants ([28b0415](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/28b041577cff11bc93756d3fdf757e50af8004c5))
- improve the code. Add constants ([3983065](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/3983065ea3f1c863eb84dc48a10ef96c05d1e42c))
- improve the tests ([8d5cca6](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/8d5cca6a0b829fc02479be4539d96deeee294fa2))
- include the new step ([990a4ff](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/990a4ff54170f02677abd8e175adf1c3ce4a8385))
- Modify the call result flow to don't show the Task modal ([470aadb](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/470aadb53a9bae9af72b0e2a1460ea75d3426e74))
- Modify the call result flow to show the Add note & QQ when the call result is Approach or Gatekeeper ([38b4b89](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/38b4b89d0ef7e8b21b43982c17f520c50db6fa01))
- Modify the step 'Update Status' to remove the Company status fields ([7b8091b](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/7b8091b95c900f15027bf2f4ed149e13e245cf3d))
- Open 'Create Activity' modal when the company status is meeting ([d951e0b](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/d951e0bd373f221d5b96e4892aeb6f97aee43bdf))
- Pitch input element modifications ([64565fb](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/64565fb529551afc4acd40d8db10bdc07ca7cd55))
- Rename old component to ChangeStatus. ([23fa81d](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/23fa81d702706fdd6ed94b4103e03239ff372f93))
- update the components library ([253c5e2](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/253c5e2a598cbed753eb7f821a75212fd32c9ea2))
- use the new machine in the change status step ([c7bbf7e](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/c7bbf7e31c3d7960459396b2e3778b6a34bee6c6))

### Bug Fixes

- **webapp:** It is not possible to make 2 calls in a row to a lead without a company (Dialer disabled) ([da5988e](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/da5988e4742e633ae344a616ec059c441aa80487)), closes [BB-2639](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2639)
- **webapp:** [BB-2631](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2631) Selectable time dates in the call result are wrong when call result is not correct contact ([5e67f6b](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/5e67f6b3299e35376486a784dedf5d594afbb987))
- **webapp:** \* Change title for leads with no company. ([41adfd4](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/41adfd4ab4d75a2469ff107312798c2fe953018a)), closes [BB-2637](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2637) [BB-2638](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2638)
- **webapp:** \* Change title for leads with no company. ([1c333b8](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/1c333b82391ab2374e368fc1fee972ba1cca90f7)), closes [BB-2637](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2637) [BB-2638](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2638)
- Bloobirds crashes when trying to create a next step for a lead without company ([b79564d](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/b79564d6dfc6f524309f230753b7ca7469f160dc)), closes [BB-2633](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2633)
- **webapp:** fixed re-renders in CallResult modal ([681ac91](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/681ac91ab559d9f1d530d1c5c42202aff2dbb33a))
- **webapp:** fixed typo on comparison for 'engaged' scheduleShortTimes ([afa3c06](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/afa3c06186c5e82719001332ec0a034ba9b3e2a4)), closes [BB-2613](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2613)
- **webapp:** When lead has no company associated the titles on the modals must refer to the lead. ([a295b4d](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/a295b4d5c3f74d0453be7a8d7fe756cd27b3e0b3)), closes [BB-2617](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2617)
- **webapp:** When the call result is not correct contact, in the next step is appearing "null company" instead of the status of the company ([769cda9](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/769cda90cdf8f0d9934b3ffdafc20d211381cd8e))
- **webapp:** wrong selected time when the call result is not succesful ([e6f7ebc](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e6f7ebc22759bb63b40edb86fd89cecffc669fe8))
- [[BB-2564](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2564)]: Lead in nurturing and discarded will not syncro with company ([c005f72](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/c005f728285691653079ef95fabc88129d7bbd29))
- [[BB-2564](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2564)]: Tests fixed. ([43da367](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/43da36711706ea9b0dc43864d45025d5dc0bc674))
- [[BB-2567](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2567)] Button text logic fixed. ([d9f9e69](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/d9f9e692b94dae45fe171c21f89d8fd66cdae33c))
- [[BB-2570](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2570)] text amended ([102e23d](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/102e23dd353f5ff2928fd026a966871de2834260))
- [[BB-2579](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2579)]: Add question mark in title ([84b52af](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/84b52af707b581b97867355a145af08d757b2bfc))
- [[BB-2580](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2580)] In case company is undefined no step is set after the note. ([75e8488](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/75e84882f810a84e1ffd4c50f138d68e250c0823))
- [BB-2569](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2569) "Add a title" should be replaced with "Add a title _" because its a required field & "Leads" should be replaced by "Lead _" ([2825f77](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/2825f77ed43fe91a2afc0b7748e131bbaa79e6fe))
- [BB-2574](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2574) The width of the "Date and time" + the width of the "Lead \*" input should be the same width as the "Add a title" input ([c35a00a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/c35a00a219dde844ac4ea0a38a985b5bbaa74e3d))
- [BB-2575](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2575) The preconfigured times for the "Schedule a next step for NURTURING company" company should be different than for ENGAGED and CONTACTED companies ([5a0c4a2](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/5a0c4a2ac02c1dd7f8f6c730f5f641b737823974))
- [BB-2581](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2581) When we set a calendar event after the call (schedule or meeting task) by default lenght should be 30 min ([981da61](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/981da61bf916293923e24233a902d65f676cb51e))
- [BB-2582](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2582) The email of the account executive should be added to the Google Calendar event ([bb96e19](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/bb96e19768352e637fa30e727131fbe790181e0e))
- [BB-2588](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2588) Currently when the user selects "NO" in the "Did you get to pitch?" question, the "Pitch / Snippet used" disappears but if you have selected a value before (When you click yes) the value is saved in the activity ([ce6ee4d](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/ce6ee4d6d4300de18f36f3f73f756d725ffa5a1e))
- [BB-2592](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2592) Switching from NO to YES should NOT change the vertical position of the YES and NO buttons ([faca348](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/faca3484effabddea28b7b18b8e58f0aafcbc9d9))
- [BB-2605](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2605) Incorrect input text in the modal fo nurturing/discarded reasons ([f184970](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/f184970efe1e7a778e22b33197f6addef5a77c46))
- [BB-2614](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2614) In the incoming calls of a registered lead, the call result is not appearing after the call ([e401299](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e401299e836ff3127104c72163b6477693d7cd6a))
- 404 error when we try to get the Company info ([3f8faab](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/3f8faab8092be2bd5496b21cc5b268a085eb0dc3))
- Add new dependency in the lead/company statuses ([a343ef3](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/a343ef388afc0a5011ff58c494f147cdefce0db2))
- change placeholder for lead field ([babc0f1](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/babc0f16bc6ae5ed4260d3454a5e7a8fc2964c7f))
- change the color of the info icon ([55f648a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/55f648a23b0c8b8c20822445dc63db70ba98aaf9))
- change the machine states for adapt it to the acceptance criteria ([20e823b](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/20e823bd24f8cd4d682bfc7f5a8d381642f92f82))
- change type of data when the value not exists ([b671839](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/b6718398d4bb6d35b50bc919f6eba9733163a0d2))
- error 500 when saves the notes ([a5a6063](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/a5a60635f1b3768c97aa0462ccca66b4e7e9049b))
- eslint error ([59310c1](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/59310c1a68c1af83b322385374d628babecef746))
- eslint errors ([01222fe](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/01222fef4869a5441678a9eae27ca4327d280b47))
- fix the test of changeStatus machine ([b869bfc](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/b869bfceb66f52f8664e5fe902d2e4eb4ed80ed0))
- import useMemo. Error after resolve a merge conflict ([959d5ca](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/959d5ca9f00bdea7831c1114fb273e6644495ce5))
- Order the pitches questions ([ccb8f6d](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/ccb8f6daf460d4896c34a33c552dfe178e64eea2))
- remove console ([1eaedd4](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/1eaedd4d260c1b796efd022d8591a379418fbfc1))
- some visual fixes ([8ad4f47](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/8ad4f471b8a56ee0bac35f780caa0d310e087d82))
- TEXT arrenged ([1ff87c6](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/1ff87c60445827ea42710763914184366baea5df))
- TEXT arrenged ([e23c582](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e23c5824343d17280420f997fc6f196d0751d706))
- the modal 'Next step' is not closed ([808c171](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/808c1712bb82d2ff49ea3755c908557c8524b143))
- the select of leads are empty in Next Step modal ([6f38cfe](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/6f38cfeefceed176b07785d60ddaa5f4e6b54b8a))
- upgrade the components library version ([8c0b068](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/8c0b068a7f572a4451aa7d7b8c8b218331274dac))
- warning width was incorrect ([65949ca](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/65949ca58f4ae04510c6122e061e59c229a967ff))

## [1.2.0-preprod.2](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v1.2.0-preprod.1...v1.2.0-preprod.2) (2020-11-24)

### Bug Fixes

- **webapp:** fixed the style of the header without tasks for today ([b4edb54](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/b4edb5407dbb6b18d41f21105f52deb9697b2d7c))

## [1.2.0-preprod.1](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v1.1.0...v1.2.0-preprod.1) (2020-11-24)

### Features

- **webapp:** added the task description along with the new styles ([109eadc](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/109eadc345b9401e8a8f97e574bb3167b522d9a9)), closes [BB-2062](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2062)
- **webapp:** added the task description along with the new styles (WIP) ([1d53268](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/1d53268708838d15d8b69ba50c46563cb5ba042b)), closes [BB-2062](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2062)
- **webapp:** fixed the TM icons and the resize ([f2179c6](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/f2179c6059d6fec448c2b51758e26f4bf1a1cd3c)), closes [BB-2128](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2128)

### Bug Fixes

- **prospect:** Fix ready to prospect Oops, date ([55ce9c8](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/55ce9c830ad22af7c1a0d4fafd6749c259647f4c))
- BB Crashes when using filters and changing tab ([251848c](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/251848cda67dd4cf1ecd6d3c589dccdb0a89d6b0))
- **webapp:** fixed the deliver companies style ([8706432](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/87064327c4b0648f3e31f2238f93903d644e8495)), closes [BB-2128](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2128)

## [1.1.0](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v1.0.0...v1.1.0) (2020-11-18)

### Features

- fixed place of reseting the company. Added a dependency at the dialer for it to close when we leave a company/lead view ([5e1e59a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/5e1e59a3f0b6e15314ce0cb75b22cf2ad3c170e2))
- sort qq alphabetically ([322d0f9](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/322d0f9be0feb1dc6863d950627171a949010133))
- use outputs job for slack message ([9385ef6](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/9385ef6026f9c5c54b8d77a008df63eb0a52430b)), closes [BB-2619](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2619)

### Bug Fixes

- invalid yaml syntax ([e717a73](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e717a73b68468abce5217d8c0a66be623074f391)), closes [BB-2619](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2619)
- keep add variable button open after selecting a variable ([8d78858](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/8d78858acc4066ab1bb7d41e222a5cf188d593cf)), closes [BB-2624](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2624)
- missing github release plugin and semantic id step ([578dac6](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/578dac6585cdf4d8b1f604ce24db9c04de496d25)), closes [BB-2619](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2619)
- properly cleanup add variable button scroll event ([2f0ba52](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/2f0ba52b39cee8ead6c812c11eaac30fd62c4574)), closes [BB-2623](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2623)
- remove punctuation ([7aec071](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/7aec07177938d5f4b5d12a4ddc11036b058d21ba)), closes [BB-2610](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2610)
- slackify markdown ([b18f1d8](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/b18f1d8b3318e47de97bf5b704140c07494bb1df)), closes [BB-2619](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2619)
- **webapp:** when the response is a 400 set the warning instead of the error ([6d316fd](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/6d316fd4a56800478e6f5f971f015580253dbcf8)), closes [BB-2615](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2615)
- two lines were unnecessary ([71f4864](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/71f4864056641af5b25efa2426f813398c28477b))

## [1.0.0-preprod.16](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v1.0.0-preprod.15...v1.0.0-preprod.16) (2020-11-18)

### Features

- fixed place of reseting the company. Added a dependency at the dialer for it to close when we leave a company/lead view ([5e1e59a](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/5e1e59a3f0b6e15314ce0cb75b22cf2ad3c170e2))

### Bug Fixes

- two lines were unnecessary ([71f4864](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/71f4864056641af5b25efa2426f813398c28477b))

## [1.0.0-preprod.15](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v1.0.0-preprod.14...v1.0.0-preprod.15) (2020-11-18)

### Bug Fixes

- keep add variable button open after selecting a variable ([8d78858](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/8d78858acc4066ab1bb7d41e222a5cf188d593cf)), closes [BB-2624](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2624)
- properly cleanup add variable button scroll event ([2f0ba52](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/2f0ba52b39cee8ead6c812c11eaac30fd62c4574)), closes [BB-2623](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2623)

## [1.0.0-preprod.14](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v1.0.0-preprod.13...v1.0.0-preprod.14) (2020-11-17)

### Bug Fixes

- invalid yaml syntax ([e717a73](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/e717a73b68468abce5217d8c0a66be623074f391)), closes [BB-2619](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2619)
- slackify markdown ([b18f1d8](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/b18f1d8b3318e47de97bf5b704140c07494bb1df)), closes [BB-2619](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2619)

## [1.0.0-preprod.13](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v1.0.0-preprod.12...v1.0.0-preprod.13) (2020-11-17)

### Features

- use outputs job for slack message ([9385ef6](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/9385ef6026f9c5c54b8d77a008df63eb0a52430b)), closes [BB-2619](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2619)

## [1.0.0-preprod.12](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v1.0.0-preprod.11...v1.0.0-preprod.12) (2020-11-17)

### Bug Fixes

- missing github release plugin and semantic id step ([578dac6](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/578dac6585cdf4d8b1f604ce24db9c04de496d25)), closes [BB-2619](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2619)

## [1.0.0-preprod.11](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v1.0.0-preprod.10...v1.0.0-preprod.11) (2020-11-17)

### Bug Fixes

- remove punctuation ([7aec071](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/7aec07177938d5f4b5d12a4ddc11036b058d21ba)), closes [BB-2610](https://bloobirds-it.myjetbrains.com/youtrack/issue/BB-2610)

# [1.0.0-preprod.10](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v1.0.0-preprod.9...v1.0.0-preprod.10) (2020-11-17)

### Bug Fixes

- **webapp:** when the response is a 400 set the warning instead of the error ([6d316fd](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/6d316fd4a56800478e6f5f971f015580253dbcf8))

# [1.0.0-preprod.9](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v1.0.0-preprod.8...v1.0.0-preprod.9) (2020-11-17)

### Features

- sort qq alphabetically ([322d0f9](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/322d0f9be0feb1dc6863d950627171a949010133))

# [1.0.0-preprod.8](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v1.0.0-preprod.7...v1.0.0-preprod.8) (2020-11-17)

### Bug Fixes

- **webapp:** fixed the transition between companies to qualify and leads without QC ([c7c48da](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/c7c48dac93da01c9105188287e1c06448004702c))

# [1.0.0-preprod.7](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v1.0.0-preprod.6...v1.0.0-preprod.7) (2020-11-17)

### Bug Fixes

- **webapp:** version tag with project name ([7350241](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/73502412bb04138e4a8f19c0b751f2e47e2c0c3a))

# [1.0.0-preprod.6](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v1.0.0-preprod.5...v1.0.0-preprod.6) (2020-11-17)

### Bug Fixes

- **webapp:** environment variables working ([ff21d89](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/ff21d897952b64723df5a6928e5466b48ea7ca7e))

# [1.0.0-preprod.5](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v1.0.0-preprod.4...v1.0.0-preprod.5) (2020-11-17)

### Bug Fixes

- **webapp:** sentry releases proper version ([7027317](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/7027317b4f90fb0eb0c41784f5640dc17f91a74c))

# [1.0.0-preprod.4](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v1.0.0-preprod.3...v1.0.0-preprod.4) (2020-11-17)

### Bug Fixes

- **webapp:** sentry releases proper version ([38a902e](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/38a902eb4fb4a11062c1447b8aee622bb6ccff66))

# [1.0.0-preprod.3](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v1.0.0-preprod.2...v1.0.0-preprod.3) (2020-11-17)

### Bug Fixes

- **webapp:** sentry releases ([81215ef](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/81215ef56f650c676e4e9caf3f3ba85018eeea68))

# [1.0.0-preprod.2](https://github.com/bloobirds-it/bloobirds-platform-frontend/compare/v1.0.0-preprod.1...v1.0.0-preprod.2) (2020-11-17)

### Bug Fixes

- **webapp:** sentry fix + changelog ([c600340](https://github.com/bloobirds-it/bloobirds-platform-frontend/commit/c60034022e1dd7e3f98b5821fbd9822da34e931a))
