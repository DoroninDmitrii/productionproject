import { AppRoutes } from "@/shared/const/router";
import { ScrollToolbar } from "@/widgets/ScrollToolbar";
import { useRouteChange } from "@/shared/lib/router/useRouteChange";

export function useAppToolbar() {

    const appRoute = useRouteChange();
  
    const toolbarByAppRoute: any = {
        [AppRoutes.ARTICLES]: <ScrollToolbar />,
        [AppRoutes.ARTICLE_DETAILS]: <ScrollToolbar />,
    }

    return toolbarByAppRoute[appRoute];
}
