export interface RocketLaunches {
    mission_name: string,
    flight_number: number,
    details: string,
    launch_date_local: string,
    launch_date_utc: string,
    launch_date_unix: number,
    launch_success: boolean,
    launch_year: string,
    upcoming: boolean,
    launch_site: {
        site_id: string,
        site_name: string,
        site_name_long: string,
    },
    launch_failure_details: {
        time: number,
        reason: string
    },
    rocket: {
        rocket_name: string,
        rocket_type: string,
    },
    links: {
        article_link: string,
        mission_patch: string,
        mission_patch_small: string,
        video_link: string,
        wikipedia: string,
    }
}

export interface LaunchInfoCardProps {
    launch: {
        mission_name: string,
        flight_number: number,
        details: string,
        launch_date_local: string,
        launch_date_utc: string,
        launch_date_unix: number,
        launch_success: boolean,
        launch_year: string,
        upcoming: boolean,
        launch_site: {
            site_id: string,
            site_name: string,
            site_name_long: string,
        },
        launch_failure_details: {
            time: number,
            reason: string
        },
        rocket: {
            rocket_name: string,
            rocket_type: string,
        },
        links: {
            article_link: string,
            mission_patch: string,
            mission_patch_small: string,
            video_link: string,
            wikipedia: string,
        }
    }
}